"use client"

import { usePathname, useRouter } from 'next/navigation'
import classes from './layout.module.scss'
import { useAppDispatch } from '../lib/redux/hooks'
import { updateFinderQuery } from '../lib/redux/serviceSlice'
import { useState } from 'react'

export default function FindCommunityLayout(props:{
    children: React.ReactNode
}) {
const pathname = usePathname()
const router = useRouter()
const dispatch = useAppDispatch()

    return(
        <div className={classes.Wrapper}>
        <div className={classes.Content}>
        <div className={classes.Title}>
            <h1>Hack Finder</h1>
            <input type="text" onChange={(e)=>dispatch(updateFinderQuery(e.currentTarget.value))}/>
        </div>
        <div className={classes.Buttons}>
            <div className={classes.findCategory}>
            <button className={pathname==='/findProgrammer'?classes.ActiveBtn:classes.InactiveBtn} onClick={()=>router.push('/findProgrammer')}>Найти специалиста</button>
                <button className={pathname==='/findTeam'?classes.ActiveBtn:classes.InactiveBtn} onClick={()=>router.push('/findTeam')}>Найти команду</button>
            </div>
            <button className={classes.CreateTeamBtn} onClick={()=>router.push('/createTeam')}>Создать команду</button>
        </div>
        {props.children}
        </div>
    </div>
    )
}