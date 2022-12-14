import {AuthContext} from "../../src/auth/index.js";
import {PublicRoute} from "../../src/router/PublicRoute";
import {render, screen} from "@testing-library/react"
import {MemoryRouter, Routes, Route} from "react-router-dom";

describe('Test in PublicRouter File', () => {
    test("must be to show the children if this is not authenticated", (done) => {
        const contextValue = {logged: false};

        render(<AuthContext.Provider value={contextValue}>
            <PublicRoute>
                <h1>No estoy autenticado</h1>
            </PublicRoute>
        </AuthContext.Provider>);
        expect(screen.getByText("No estoy autenticado")).toBeTruthy();
        done();
    });

    test("Must to navigate when is authenticated", (done) => {
        const contextValue = {logged: true, user: {name: "Fidel Lascano", id: 12345}};

        render(<AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path={"login"} element={<PublicRoute><h1>No estoy autenticado</h1></PublicRoute>}></Route>
                    <Route path={"heros/*"} element={<h1>Hi heros</h1>}></Route>
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>);
        expect(screen.getByText("Hi heros")).toBeTruthy();
        done();
    })
});