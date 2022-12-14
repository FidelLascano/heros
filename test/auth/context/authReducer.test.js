import {authReducer} from "../../../src/auth";
import {types} from "../../../src/auth/types/types.js";

describe("Testin authReducer", () => {
    test("Testing useReducer null state", (done) => {
        const action = {type: "other"};
        const state = authReducer(null, action);
        expect(state).toBeNull();
        done();
    });

    test("Testing useReducer initial State", (done) => {
        const initialState = {logged: false, user: null};
        const action = {type: "other"};
        const state = authReducer(initialState, action);
        expect(state).toEqual(initialState);
        done();
    });

    test("Testing authReducer login", (done) => {
        const action = {type: types.login, payload: {logged: true, user: {name: "Fidel Lascano"}}};
        const initialState = null;
        const state = authReducer(initialState, action);
        expect(state.user.name).toEqual(action.payload.user.name);
        expect(state.logged).toEqual(action.payload.logged);
        done();

    });

    test("Testing authReducer logout", (done) => {
        const action = {type: types.logout, payload: {logged: true, user: {name: "Fidel Lascano"}}};
        const initialState = null;
        const state = authReducer(initialState, action);
        expect(state.user).toBeNull();
        expect(state.logged).toBeFalsy();
        done();
    });
});