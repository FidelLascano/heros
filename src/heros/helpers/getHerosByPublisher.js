import { heroes } from "../data/heros";

export const VALID_PUBLISHER = ['DC Comics', 'Marvel Comics'];
export const getHerosByPublisher = (publisher) => {
    if(VALID_PUBLISHER.includes(publisher)) { return heroes.filter(heroe => (heroe.publisher === publisher))};
    throw new Error(`${publisher} is not a valid publisher`)
}