import singleton from './CreationalPatterns/singleton'
import SchnorrSignature from './SchnorrSignature'

let selector = process.argv[2]
let messagge = "hello world ~!"


if(selector == "singleton") {
    console.log("singleton")

    const sign = SchnorrSignature.sign(messagge)

    await singleton().schnorrVerify(
        messagge,
        sign
    )
}