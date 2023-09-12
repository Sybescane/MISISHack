"use client"

import classes from './LoginModal.module.scss'
import { useAppDispatch } from "@/app/lib/redux/hooks"
import { useRouter } from "next/navigation"
import { showError, showLogin } from "@/app/lib/redux/serviceSlice"
import Link from 'next/link'
import { setUserData } from '@/app/lib/redux/userSlice'
import { useEffect } from 'react'

export default function LoginModal() {
const router = useRouter()
const dispatch = useAppDispatch()

    async function signIn(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const dataObj = {
            email: formData.get('email'),
            password: formData.get('pwd')
        }
        const res = await fetch('http://localhost:4200/auth/login-user',{
            method: 'POST',
            body: JSON.stringify(dataObj),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (res.ok) {
            const resData = await res.json()
            console.log('DATA RECEIVED')
            console.log(resData)
            dispatch(setUserData({
                token: resData.access_token,
                isSignIn: true
            }))
            router.push('userProfile')
        }
        else {
            dispatch(showError(true))
            console.log(res)
        }
    }

    return(
        <div className={classes.Wrapper}>
<svg className={classes.Cross} onClick={()=>dispatch(showLogin(false))} fill="#7AD088" width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" stroke="#7AD088" stroke-width="0.00016">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z" fill-rule="evenodd"/> </g>

</svg>
            <h1>Вход в хакатон клуб</h1>
            <form onSubmit={(e)=>signIn(e)}>
                <div className={classes.InputBlock}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div className={classes.InputBlock}>
                    <label htmlFor="pwd">Пароль</label>
                    <input type="password" name="pwd" id="pwd" required/>
                </div>
                <button type="submit" className='StandardButton'>Войти</button>
                <Link className={classes.NoRegister} href='/signup'>Ещё не регистрировались?</Link>
            </form>
        </div>
    )
}