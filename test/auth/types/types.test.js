import {types} from "../../../src/auth/types/types.js";

describe("Testing Types.js", ()=>{
    test("Testing Types Object", ()=>{
        expect(types).toEqual({
            login : '[Auth] Login',
            logout: '[Auth] Logout}'
        })
    })
})