import fs from "fs"
import _ from "lodash"
import Web3 from 'web3';
import SchnorrSignature from '../SchnorrSignature';
import types from "../SchnorrSignature/utils/types";

let schnorrContractIns = undefined;

class schnorrContract{
    constructor(){
        const TEST_PROVIDER = "http://localhost:7545";
        this.web3 = new Web3(new Web3.providers.HttpProvider(TEST_PROVIDER));

        this.contractAddress= undefined;
        this.contractIns    = undefined;
        this.keyJson        = JSON.parse(fs.readFileSync("./contract/keys.json"))
        this.addressList    = _.keys(_.get(this.keyJson, 'private_keys'))
    }

    async deploy(){
        if(this.contractAddress){return;}

        let contractJson= JSON.parse(fs.readFileSync("./contract/build/contracts/VerifySchnorr.json"))
        let abi         = contractJson.abi;
        let bytecode    = contractJson.bytecode;
        
        console.log("deploying contract...");

        this.contractIns = new this.web3.eth.Contract(abi);
        const ins= await this.contractIns.deploy({
            data:bytecode,
            arguments: [
                SchnorrSignature.PRIME.toString(),
                SchnorrSignature.GENERATOR.toString(),
            ]
        }).send({
            from: this.getAddress(0),
            gas : 150000000
        })
        this.contractIns = ins;
    }

    async schnorrVerify(message, signature, pk=SchnorrSignature.pk.pk.toString()){
        if(this.contractIns == undefined){
            await this.deploy();
            console.log("contract address : " ,this.contractIns.options.address)
        }

        console.log(types.asciiToHex(message).toString(10))
        const receipt = await this.contractIns.methods.Verify(
            '0x' + types.asciiToHex(message),
            _.get(signature, 'r').toString(),
            _.get(signature, 's').toString(),
            pk
        ).send({
            from: this.getAddress(0),
            gas : 150000000
        })
        console.log(receipt);
    }

    getAddress(idx=0){
        try {
            return this.addressList[idx]
        } catch (error) {
            return undefined
        }
    }
    
    getPrivateKey(idx=0){
        try {
            return _.get(_.get(KeysJson, 'private_keys'), this.addressList(idx))
        } catch (error) {
            return undefined
        }
    }
}

export default () => {
    if(schnorrContractIns == undefined)
        schnorrContractIns = new schnorrContract();
    return schnorrContractIns;
}