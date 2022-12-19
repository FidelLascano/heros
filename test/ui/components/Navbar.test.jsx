import {render, screen} from "@testing-library/react";
import {AuthContext} from "../../../src/auth";
import {Navbar} from "../../../src/ui";
import {MemoryRouter, Route, Routes} from "react-router-dom";

describe("Pruebas en el <Navbar>", () => {
    test("Debe mostar el nombre del usuario", (done) => {
        const contextValue = {logged: true, user: {name: "Fhalcom", id: 123456}};
        render(<AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Routes>
                    <Route path={"/*"} element={<Navbar/>}/>
                </Routes>

            </MemoryRouter>
        </AuthContext.Provider>)
        screen.debug()
        expect(screen.getAllByText("Fhalcom").length).toBeGreaterThan("0");
        done();
    })
});