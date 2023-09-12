"use client"

import ErrorModal from "./components/ErrorModal/ErrorModal"
import LoginModal from "./components/LoginModal/LoginModal"
import MainMenu from "./components/MainMenu/MainMenu"
import { useAppSelector } from "./lib/redux/hooks"
import classes from './page.module.scss'
import Image from "next/image"
import HackImg from './assets/HackImg.png'
import { useEffect, useState } from "react"
import { nanoid } from "nanoid/non-secure"
import image2 from './assets/image2.jpg'
import image3 from './assets/image3.jpg'

export default function Home() {
const isShowMenu = useAppSelector(state=>state.serviceSlice.isShowMenu)
const isShowLogin = useAppSelector(state=>state.serviceSlice.isLoginShow)
const isErrorShow = useAppSelector(state=>state.serviceSlice.isErrorShow)
const [news,setNews] = useState<{
  user: {},
  posts: [],
  hacks:Array<{
    linkOnRegister: string,
    name: string
  }>,
  activities: Array<{
    linkOnRegister: string,
    name: string
  }>
}>({
  user: {},
  posts: [],
  hacks: [],
  activities: []
})
const [hacks,setHacks] = useState<Array<{
  title: string,
  datetime: string
}>>([
  {
    title: 'Itam.Hack',
    datetime: '8 сентября'
  },
  {
    title: 'Itam.Hack',
    datetime: '8 сентября'
  },
  {
    title: 'Itam.Hack',
    datetime: '8 сентября'
  },
  {
    title: 'Itam.Hack',
    datetime: '8 сентября'
  },
  {
    title: 'Itam.Hack',
    datetime: '8 сентября'
  },
  {
    title: 'Itam.Hack',
    datetime: '8 сентября'
  },
  {
    title: 'Itam.Hack',
    datetime: '8 сентября'
  },
  {
    title: 'Itam.Hack',
    datetime: '8 сентября'
  },
  {
    title: 'Itam.Hack',
    datetime: '8 сентября'
  },
])

async function getNews() {
  const res = await fetch('http://localhost:4200/main')
  if (res.ok) {
    const resData = await res.json()
    console.log('RES DATA')
    console.log(resData)
    setNews({
      user: {},
      hacks: resData.hacks,
      activities: resData.activities,
      posts: resData.posts
    })
  }
  else {
    console.log('error')
  }
}

useEffect(()=>{
getNews()
},[])

  return (
    <div className={classes.Wrapper}>
    <div className={classes.HackCalendar}>
      {hacks.map(hack=>{
        return(
          <div className={classes.Hack}>
            <Image src={HackImg} alt="Hack Img"/>
            <h4>{hack.title}</h4>
            <p>{hack.datetime}</p>
          </div>
        )
      })}
    </div>
    <div className={classes.News}>
      <div className={classes.Filter}>
        <h6>Фильтр</h6>
        <div className={classes.FilterContent}>
          <div className={classes.InputBlock}>
          <label htmlFor="courses">Курсы</label>
          <input type="checkbox" id="courses" name="courses" style={{cursor: 'pointer'}}/>
          </div>
    <div className={classes.InputBlock}>
    <label htmlFor="hacks">Хакатоны</label>
          <input type="checkbox" name="hacks" id="hacks" style={{cursor: 'pointer'}}/>
    </div>
          <div className={classes.InputBlock}>
          <label htmlFor="events">События</label>
          <input type="checkbox" id="events" name="events" style={{cursor: 'pointer'}}/>
          </div>
          <div className={classes.InputBlock}>
          <label htmlFor="news">Новости</label>
          <input type="checkbox" id="news" name="news" style={{cursor: 'pointer'}}/>
          </div>
        </div>
      </div>
      <div className={classes.Content}>
      {news.hacks.map((hack,index)=>{
        return(
          <a href={hack.linkOnRegister} key={nanoid()} className={classes.Hacks} target="_blank">
            <Image src={image2} alt="Image" className={classes.Image}/>
          </a>
        )
      })}
      {news.activities.map(act=>{
        return(
          <a key={nanoid()} href={act.linkOnRegister} className={classes.Activities} target="_blank">
            <Image src={image3} alt="Image" className={classes.Image}/>
          </a>
        )
      })}
      </div>
    </div>
    {isShowMenu&&<MainMenu/>}
  {isShowLogin&&<LoginModal/>}
  {isErrorShow&&<ErrorModal errText="Неправильный логин или пароль"/>}
  </div>
  )
}
