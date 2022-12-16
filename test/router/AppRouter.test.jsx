import {render, screen} from "@testing-library/react";
import {AuthContext} from "../../src/auth";
import {MemoryRouter} from "react-router-dom";
import {AppRouter} from "../../src/router/AppRouter";

describe("Test AuthRouteer", ()=>{
    test("When There are not a logged user will go to Login page", (done)=>{
        // const initial = {logged:false, user:{name:'Fidel Lascano', id: 123456789}}
        const initial = {logged:false, user:null}

        render(
            <AuthContext.Provider value={initial}>
                <MemoryRouter>
                    <AppRouter/>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(screen.getAllByText('Login').length).toBeGreaterThan(1);
        done();
    })




    test("When The user is logged, will go to Marvel page", (done)=>{
        const initial = {logged:true, user:{name:'Fidel Lascano', id: 123456789}}
        //const initial = {logged:false, user:null}

        render(
            <AuthContext.Provider value={initial}>
                <MemoryRouter>
                    <AppRouter/>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getAllByText('Marvel Page').length).toBeGreaterThan(1);
        done();
    })
})