import React from 'react'
import Faq from '../../components/section/FAQ'
import Showcase from '../../components/section/Showcase'
import Navigation from '../../components/Navigation'
import { showcaseData } from '../../store/store'
export default function FAQPage() {
    let navigationBar=[
        {
          title:"главная",
          link:"/"
        },
        {
          title:"FAQ",
          link:"/faq"
        }
      ]
  return (
    <div>
        <Showcase data={showcaseData}/>
        <Navigation pathUrl={navigationBar}/>
        <Faq/>
    </div>
  )
}
