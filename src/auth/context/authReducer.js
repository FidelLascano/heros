import { types } from "../types/types";

const initialState = {
    logged: false,
    user: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case types.login:
            return {
                ...state,
                logged: action.payload.logged,
                user: action.payload.user
            };
        case types.logout:
            return {
                logged: false,
                user: null
            };
        default:
            return state;
    }
}