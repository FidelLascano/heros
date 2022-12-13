import {authReducer} from "../../../src/auth";

describe("Testin authReducer", () => {
   test("Testing useReducer initial data",(done)=>{
       const action = {type:"other"};
       const state = authReducer(null, action);
       expect(state).toBeFalsy();
       done();
   })
});