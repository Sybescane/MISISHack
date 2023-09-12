"use client"

import { useEffect, useState } from 'react'
import ProgrammerCard from '@/app/components/ProgrammerCard/ProgrammerCard'
import classes from './page.module.scss'
import { useAppSelector } from '@/app/lib/redux/hooks'

type ProgrammersType = Array<{
    fullname: string,
    nickname: string,
    specializations: Array<{
        specializationId: number,
        specName: string
    }>
}>

export default function FindCommunity() {
const [programmers,setProgrammers] = useState<ProgrammersType>([])
const hackFinderQuery = useAppSelector(state=>state.serviceSlice.hackFinderQuery)
const [filteredProgers,setFilteredProgers] = useState<ProgrammersType>(programmers)

async function getProgrammers() {
    console.log('reuest is going...')
    const res = await fetch('http://localhost:4200/user/getAll')
    if (res.ok) {
        setFilteredProgers(await res.json())
    }
    else {
        console.log('Request failed')
    }
}

useEffect(()=>{
getProgrammers()
},[])
useEffect(()=>{
if (hackFinderQuery==='') setFilteredProgers(programmers)
else {
    const query = hackFinderQuery.trim().toLocaleLowerCase()
    const filteredArr = programmers.filter(proger=>{
        const fullname = proger.fullname.trim().toLocaleLowerCase()
        const nickname = proger.nickname.trim().toLocaleLowerCase()
        const specializations = proger.specializations.map(spec=>spec.specName).join().trim().toLocaleLowerCase()
        if (fullname.includes(query)) return true
        else if (nickname.includes(query)) return true
        else if (specializations.includes(query)) return true
        else return false
    })
    setFilteredProgers(filteredArr)
}
},[hackFinderQuery])
    return(
        <div className={classes.Wrapper}>
            {filteredProgers.map(proger=>{
                return <ProgrammerCard nickname={proger.nickname} fullname={proger.fullname} specializations={proger.specializations}/>
            })}
        </div>
    )
}