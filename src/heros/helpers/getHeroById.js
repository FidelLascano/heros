import {heroes} from "../data/heros.js";

export const getHeroById = (id) => heroes.find(hero=>hero.id===id);