import React, { useEffect } from 'react'
import Showcase from '../../components/section/Showcase'
import { showcaseData } from '../../store/store'
import Navigation from '../../components/Navigation'
import News from '../../components/section/News'
import { useQuery } from 'react-query'
import { myAxios } from '../../utils/myAxios'
export default function NewsPage() {
  useEffect(()=>{
    window.scrollTo(0,450)
  },[])
    let navigationBar=[
        {
          title:"ГЛАВНАЯ",
          link:"/"
        },
        {
          title:"НОВОСТИ",
          link:"/faq"
        }
      ]
      const {data:newsData}= useQuery("new",()=>myAxios("/news"),{
        select:(el)=>el.data.data
      })
  return (
    <div>
        <Showcase data={showcaseData}/>
        <Navigation pathUrl={navigationBar}/>
        <News data={newsData}/>
    </div>
  )
}
