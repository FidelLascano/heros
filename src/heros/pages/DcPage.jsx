import React from 'react'
import { HeroList } from '../components'
import { VALID_PUBLISHER } from '../helpers/getHerosByPublisher'

export const DcPage = () => {
  return (
    <>
    <h1>Dc Page</h1>
    <HeroList publisher={VALID_PUBLISHER[0]}/>
    </>
  )
}
