import {fireEvent, render, screen} from "@testing-library/react";
import {AuthContext} from "../../../src/auth";
import {Navbar} from "../../../src/ui";
import {MemoryRouter, Route, Routes} from "react-router-dom";

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))
describe("Pruebas en el <Navbar>", () => {
    beforeEach(()=>jest.clearAllMocks())
    const contextValue = {
        logged: true,
        user:{name: "Fhalcom", id: 123456},
        logout: jest.fn()
    }

    test("Debe mostar el nombre del usuario", (done) => {
        render(<AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Routes>
                    <Route path={"/*"} element={<Navbar/>}/>
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>)
        expect(screen.getAllByText("Fhalcom").length).toBeGreaterThan(0);
        done();
    });

    test("Debe de llamar el logout cuando se hace clic en el boton", (done)=>{
        render(<AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Routes>
                    <Route path={"/*"} element={<Navbar/>}/>
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>)
        const logoutBtn = screen.getByRole('button');
        fireEvent.click( logoutBtn );
        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledTimes(1);
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {"replace": true});
        done();
    });
});