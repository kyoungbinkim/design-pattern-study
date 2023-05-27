import ss from "./SchnorrSignature/index.js"

describe("TEST", () => {
    it("schnorr signature", () => {
        let message = "hello world";
        let signature = ss.sign(message);
        let verify = ss.verify(message, signature);

        console.log("key : ", ss.pk, ss.sk);
        console.log("signature : ", signature);
        console.log("verify : ", verify);
    })
})