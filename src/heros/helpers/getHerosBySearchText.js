import { heroes } from "../data/heros";
export const getHerosBySearchText = (searchText) => {
    if(searchText)
    {return heroes.filter(hero=>hero.superhero.toUpperCase().startsWith(searchText.toUpperCase()))}
    return [];
}