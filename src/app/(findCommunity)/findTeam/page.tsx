"use client"

import classes from './page.module.scss'
import { useEffect, useState } from 'react'
import { useAppSelector } from '@/app/lib/redux/hooks'
import TeamCard from '@/app/components/TeamCard/TeamCard'

type TeamsType=Array<
{
    name: string,
    progers: Array<{
        fullname: string,
        specializations: Array<string>
    }>,
    openPos: Array<string>
}
>

export default function FindTeam() {
    const [teams, setTeams] = useState<TeamsType>([
        {
    name: 'INMIN.net',
    progers: [
        {
            fullname: 'Артём Зебелян',
                    specializations: ['PM','Frontend','Backend','DevOps']
        },
        {
            fullname: 'Артём Зебелян',
                    specializations: ['PM','Frontend','Backend','DevOps']
        },
        {
            fullname: 'Артём Зебелян',
                    specializations: ['PM','Frontend','Backend','DevOps']
        },
        {
            fullname: 'Артём Зебелян',
                    specializations: ['PM','Frontend','Backend','DevOps']
        },
    ],
    openPos: ['Frontend', 'Backend', 'DevOps','ML Engineer']
},
{
    name: 'INMIN.net',
    progers: [
        {
            fullname: 'Артём Зебелян',
                    specializations: ['PM','Frontend','Backend','DevOps']
        },
        {
            fullname: 'Артём Зебелян',
                    specializations: ['PM','Frontend','Backend','DevOps']
        },
        {
            fullname: 'Артём Зебелян',
                    specializations: ['PM','Frontend','Backend','DevOps']
        },
        {
            fullname: 'Артём Зебелян',
                    specializations: ['PM','Frontend','Backend','DevOps']
        },
    ],
    openPos: ['Frontend', 'Backend', 'DevOps','ML Engineer']
},
{
    name: 'INMIN.net',
    progers: [
        {
            fullname: 'Артём Зебелян',
                    specializations: ['PM','Frontend','Backend','DevOps']
        },
        {
            fullname: 'Артём Зебелян',
                    specializations: ['PM','Frontend','Backend','DevOps']
        },
        {
            fullname: 'Артём Зебелян',
                    specializations: ['PM','Frontend','Backend','DevOps']
        },
        {
            fullname: 'Артём Зебелян',
                    specializations: ['PM','Frontend','Backend','DevOps']
        },
    ],
    openPos: ['Frontend', 'Backend', 'DevOps','ML Engineer']
},
{
    name: 'INMIN.net',
    progers: [
        {
            fullname: 'Артём Зебелян',
                    specializations: ['PM','Frontend','Backend','DevOps']
        },
        {
            fullname: 'Артём Зебелян',
                    specializations: ['PM','Frontend','Backend','DevOps']
        },
        {
            fullname: 'Артём Зебелян',
                    specializations: ['PM','Frontend','Backend','DevOps']
        },
        {
            fullname: 'Артём Зебелян',
                    specializations: ['PM','Frontend','Backend','DevOps']
        },
    ],
    openPos: ['Frontend', 'Backend', 'DevOps','ML Engineer']
},
{
    name: 'INMIN.net',
    progers: [
        {
            fullname: 'Артём Зебелян',
                    specializations: ['PM','Frontend','Backend','DevOps']
        },
        {
            fullname: 'Артём Зебелян',
                    specializations: ['PM','Frontend','Backend','DevOps']
        },
        {
            fullname: 'Артём Зебелян',
                    specializations: ['PM','Frontend','Backend','DevOps']
        },
        {
            fullname: 'Артём Зебелян',
                    specializations: ['PM','Frontend','Backend','DevOps']
        },
    ],
    openPos: ['Frontend', 'Backend', 'DevOps','ML Engineer']
},
{
    name: 'INMIN.net',
    progers: [
        {
            fullname: 'Артём Зебелян',
                    specializations: ['PM','Frontend','Backend','DevOps']
        },
        {
            fullname: 'Артём Зебелян',
                    specializations: ['PM','Frontend','Backend','DevOps']
        },
        {
            fullname: 'Артём Зебелян',
                    specializations: ['PM','Frontend','Backend','DevOps']
        },
        {
            fullname: 'Артём Зебелян',
                    specializations: ['PM','Frontend','Backend','DevOps']
        },
    ],
    openPos: ['Frontend', 'Backend', 'DevOps','ML Engineer']
},
])
const [filteredTeams,setFilteredTeams] = useState<TeamsType>(teams)
const hackFinderQuery = useAppSelector(state=>state.serviceSlice.hackFinderQuery)
const [openPosFilter,setOpenPosFilter] = useState<string>('')

useEffect(()=>{
if (hackFinderQuery===''&&openPosFilter==='') setFilteredTeams(teams)
else {
    const query = hackFinderQuery.trim().toLocaleLowerCase()
    const openPosQuery = openPosFilter.trim().toLocaleLowerCase()
    const filteredArr = teams.filter(team=>{
        const openPos = team.openPos.join().trim().toLocaleLowerCase()
        if (hackFinderQuery!=='') {
            const name = team.name.trim().toLocaleLowerCase()
            const progers = team.progers.map(el=>`${el.fullname} ${el.specializations}`).join().trim().toLocaleLowerCase()
            if (name.includes(query)) return true
            else if (progers.includes(query)) return true
            else if (openPos.includes(query)) return true
            else return false
        }
        if (openPosFilter!=='') {
            if (openPos.includes(openPosQuery)) return true
            else return false
        }
    })
    setFilteredTeams(filteredArr)
}
},[hackFinderQuery,openPosFilter])

    return (
        <div className={classes.Wrapper}>
            <div className={classes.Filter}>
                <h5>Фильр по открытым позициям</h5>
                <input type="text" placeholder='Введите интересующую позицию...' onChange={(e)=>setOpenPosFilter(e.currentTarget.value)}/>
            </div>
            <div className={classes.Teams}>
            {filteredTeams.map(team=>{
                return(
                    <TeamCard name={team.name} progers={team.progers} openPos={team.openPos}/>
                )
            })}
            </div>
        </div>
    )
}