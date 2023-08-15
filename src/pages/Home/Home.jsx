import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import SectionOne from '../../components/HomeSections/SectionOne/SectionOne'
import SectionTwo from '../../components/HomeSections/SectionTwo/SectionTwo'
import SectionThree from '../../components/HomeSections/SectionThree/SectionThree'
import SectionFour from '../../components/HomeSections/SectionFour/SectionFour'

export const Home = () => {
  return (
    <div>
        <NavBar></NavBar>
        <SectionOne></SectionOne>
        <SectionTwo></SectionTwo>
        <SectionThree></SectionThree>
        <SectionFour></SectionFour>
    </div>
  )
}
