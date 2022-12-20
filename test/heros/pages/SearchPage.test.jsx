import {fireEvent, render, screen} from "@testing-library/react";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import {SearchPage} from "../../../src/heros";
import {AuthContext} from "../../../src/auth";
import {mockComponent} from "react-dom/test-utils";
const mockedUseNavigate2 = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate2
}))

describe("Test in <SearchPage />", (done) => {
    beforeEach(()=>jest.clearAllMocks())
    test("debe de mostrarse con valores sin defecto", (done) => {
        const {container} = render(<MemoryRouter>
            <SearchPage/>
        </MemoryRouter>)
        expect(container).toMatchSnapshot();
    done();
    });

    test("must be to show batman with query string batman" ,(done) => {

        render(
        <MemoryRouter initialEntries={['/search?q=batman']}>
            <SearchPage/>
        </MemoryRouter>)
        const input = screen.getByRole("textbox");
        expect(input.value).toBe("batman");
        const divNotSearchHero = screen.getByTestId("div-not-search-hero");
        expect(divNotSearchHero.style.display).toBe("none");
        done();
    });


    test("must be to show and error when the hero didn't find" ,(done) => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage/>
            </MemoryRouter>)
        const input = screen.getByRole("textbox");
        expect(input.value).toBe("batman123");
        const divNotSearchHero = screen.getByTestId("div-not-search-hero");
        expect(divNotSearchHero.style.display).toBe("block");
        done();
    });


    test("must be call the browser to the new page" ,(done) => {

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage/>
            </MemoryRouter>)
        const input = screen.getByRole("textbox");
        fireEvent.change(input,{target: {name:'searchText', value:'superman'}});
        const formPage = screen.getByTestId("searh-from-test");
        fireEvent.submit(formPage);
        expect(mockedUseNavigate2).toHaveBeenCalledWith(`?q=superman`)
        done();
    });


});