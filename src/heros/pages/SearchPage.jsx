import React, {useState} from 'react';
import queryString from 'query-string';
import {HeroCard} from "../components/HeroCard.jsx";
import {useForm} from "../../hooks/useForm.js";
import {HeroList} from "../components/index.js";
import {getHerosBySearchText} from "../helpers/index.js";
import {useLocation, useNavigate} from "react-router-dom";

export const SearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const {q = ''} = queryString.parse(location.search);
    const heros = getHerosBySearchText(q);
    const {searchText, onInputChange} = useForm({searchText:""});
    const isSearch =  (q.length > 0 );
    const hasHeros =  (q.length > 0 && heros.length < 1 );
    const onSearchSubmit = (event) => {
        event.preventDefault();
        if(searchText.trim().length<1) {navigate(``)}
        navigate(`?q=${searchText}`)
    }


    return (
        <>
            <h1>Search</h1>
            <hr/>
            <div className="row">

                <div className="col-5">
                    <h4>Searching</h4>
                    <hr/>
                    <form onSubmit={onSearchSubmit}>
                        <input
                            type="text"
                            placeholder={"Search Hero"}
                            className={"form-control"}
                            name={"searchText"}
                            autoComplete={"off"}
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button className={"btn btn-outline-primary mt-1"}>
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Result</h4>
                    <hr/>
                    <div className={"alert alert-primary"} style={{display: isSearch?'none':'block'}}>Search a Hero with {q}</div>
                    <div className={"alert alert-danger"} style={{display: hasHeros?'block':'none'}}>Not a Hero with <b>{q}</b></div>
                    {heros.map(hero=>(<HeroCard key={hero.id} {...hero}/>))}
                </div>
            </div>
        </>
    )
}
