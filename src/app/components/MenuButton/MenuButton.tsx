"use client"

import { useAppDispatch } from '@/app/lib/redux/hooks'
import classes from './MenuButton.module.scss'
import { showMenu } from '@/app/lib/redux/serviceSlice'

export default function MenuButton() {
const dispatch = useAppDispatch()

    return(
<div className={classes.Wrapper} onClick={()=>dispatch(showMenu(true))}>
    <div className={classes.Line}></div>
    <div className={classes.Line}></div>
    <div className={classes.Line}></div>
</div>
    )
}