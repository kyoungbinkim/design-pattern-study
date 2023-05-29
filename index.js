/*
    https://ko.wikipedia.org/wiki/%EB%94%94%EC%9E%90%EC%9D%B8_%ED%8C%A8%ED%84%B4_(%EC%B1%85) 하나씩 정리하는 중.
*/

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