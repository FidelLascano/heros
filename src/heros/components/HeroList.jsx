import React from 'react'
import { getHerosByPublisher } from '../helpers/getHerosByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {
   const herosList = getHerosByPublisher(publisher);   
  return (
    <>
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {herosList.map((hero) => 
        (<HeroCard key={hero.id} {...hero}/>) ) }
    </div>
    </>
  )
}
