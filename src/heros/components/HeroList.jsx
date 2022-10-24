import React from 'react'
import { getHerosByPublisher } from '../helpers/getHerosByPublisher'

export const HeroList = ({publisher}) => {
   const herosList = getHerosByPublisher(publisher);   
  return (
    <>
    <div>HeroList</div>
    <div>
        {herosList.map(({id, superhero, alter_ego, first_appearance, characters}) => 
        (<ul key={id}>
            <p>
                {id} <br/>
                {superhero} <br/>
                {alter_ego} <br/>
                {first_appearance} <br/>
                {characters} <br/>
            </p>
        </ul>) ) }
    </div>
    </>
  )
}
