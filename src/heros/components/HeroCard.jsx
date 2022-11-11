import React from 'react'
import { Link } from 'react-router-dom';

const CharacterByHero = ({characters, alter_ego}) => 
{
    const charactersByHero = <p>{characters}</p>;
    return (alter_ego == characters)
        ? (<></>)
        : charactersByHero;
}

export const HeroCard = ({ id, superhero, alter_ego, first_appearance, characters, publisher, }) => {
    const heroImageUrl = `../src/assets/img/heroes/${id}.jpg`;
    return (
        <>
            <div className="col">
                <div className='card'>
                    <div className='row no-gutters'>
                        <div className='col-4'>
                            <img srcSet={heroImageUrl} className="card-img" alt={`${superhero}`} />
                        </div>
                        <div className='col-8'>

                            <div className="card-body">
                                <h5 className='card-title'>{superhero}</h5>
                                <p className='card-text'>{alter_ego}</p>
                                {<CharacterByHero characters = {characters} alter_ego = {alter_ego}/>}
                                <p className='card-text'>
                                    <small className='text-muted'>{first_appearance}</small>
                                </p>
                                <Link to={`/heros/hero/${id}`}>More...</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
