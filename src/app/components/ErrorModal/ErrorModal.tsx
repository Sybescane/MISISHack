"use client"

import { useAppDispatch } from '@/app/lib/redux/hooks'
import classes from './ErrorModal.module.scss'
import { showError } from '@/app/lib/redux/serviceSlice'

export default function ErrorModal({errText}: {errText: string}) {
const dispatch = useAppDispatch()

    return(
        <div className={classes.Wrapper}>
<h1>{errText}</h1>
<button onClick={()=>dispatch(showError(false))}>Ок</button>
        </div>
    )
}