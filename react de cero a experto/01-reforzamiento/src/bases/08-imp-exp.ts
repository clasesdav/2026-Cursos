import { heroes } from "../data/heroes.data";
import type { Hero, Owner } from "../data/heroes.data";


const getHeroById = (id: number): Hero | undefined => {

    const hero = heroes.find((hero) => {
        return hero.id === id;
    });

    // if (!hero) {
    //     throw new Error(`No existe un hero con el id ${id}`)
    // }

    return hero;

}

// console.log(getHeroById(3));

export const getHeroesByOwner = (owner: Owner): Hero[] | undefined => {
    const heroesByOwner = heroes.filter(
        hero => hero.owner === owner
    )
    return heroesByOwner;

}