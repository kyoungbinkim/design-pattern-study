import { SignKeyGen } from "./keys.js";
import { Sign, Verify } from "./sign.js";
import { GENERATOR, FIELDPRIME } from "./utils/math.js";

let {pk, sk} = SignKeyGen();

export default {
    PRIME : FIELDPRIME,
    GENERATOR : GENERATOR,
    pk : pk,
    sk : sk,
    sign: (m) => {
        return Sign(m, sk);
    },
    verify: (m, s) => {
        return Verify(m, s, pk);
    }
}