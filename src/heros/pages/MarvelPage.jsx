import React from 'react'
import { HeroList } from '../components'
import { VALID_PUBLISHER } from '../helpers/getHerosByPublisher'

export const MarvelPage = () => {
  return (
    <>
    <h1>Marvel Page</h1>
    <HeroList publisher={VALID_PUBLISHER[1]}/>
    </>
  )
}
