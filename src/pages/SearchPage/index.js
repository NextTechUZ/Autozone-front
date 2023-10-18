import React from 'react'
import Showcase from '../../components/section/Showcase'
import { showcaseData } from '../../store/store'
import Navigation from '../../components/Navigation'
import SearchSection from '../../components/section/SearchSection'
export default function SearchPage() {
    let navigationBar=[
        {
          title:"ГЛАВНАЯ",
          link:"/"
        },
        {
          title:"ПОИСК",
          link:"/search"
        }
      ]
  return (
    <>
       <Showcase data={showcaseData}/> 
       <Navigation pathUrl={navigationBar}/>
       <SearchSection/>
    </>
    )
}
