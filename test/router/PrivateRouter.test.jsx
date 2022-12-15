import {AuthContext} from "../../src/auth/index.js";
import {PublicRoute} from "../../src/router/PublicRoute";
import {render, screen} from "@testing-library/react"
import {MemoryRouter, Routes, Route} from "react-router-dom";
import {PrivateRoute} from "../../src/router/PrivateRoute";

describe('Test in PrivateRouter File', () => {
    test("When user is not logged not will go to heros", (done) => {
        const contextValue = {logged: true, user: {name: "Fidel Lascano", id: 12345}};

        render(<AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path={"login"} element={<PublicRoute><h1>No estoy autenticado</h1></PublicRoute>}/>
                    <Route path={"heros/*"} element={<PrivateRoute><h1>Hi heros</h1></PrivateRoute>}/>
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>);
        expect(screen.getByText("Hi heros")).toBeTruthy();
        expect(localStorage.getItem("lastLocation")).not.toBeNull();
        done();
    });

    test("When user is not logged", (done) => {
        const contextValue = {logged: false, user: null};

        render(<AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path={"login"} element={<PublicRoute><h1>No estoy autenticado</h1></PublicRoute>}/>
                    <Route path={"heros/*"} element={<PrivateRoute><h1>Hi heros</h1></PrivateRoute>}/>
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>);
        expect(screen.getByText("No estoy autenticado")).toBeTruthy();
        done();
    });

    test("When user is logged, localStorage must have  been called", (done) => {
        Storage.prototype.setItem = jest.fn();
        const contextValue = {logged: true, user: {name: "Fhalcom", id: 123456}};
        render(<AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path={"login"} element={<PublicRoute><h1>No estoy autenticado</h1></PublicRoute>}/>
                    <Route path={"heros/*"} element={<PrivateRoute><h1>Hi heros</h1></PrivateRoute>}/>
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>);
        expect(localStorage.setItem).toBeCalledWith('lastLocation','/heros')
        done();
    })


});