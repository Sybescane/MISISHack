"use client"

import { useRouter } from 'next/navigation'
import classes from './page.module.scss'
import { useEffect, useRef, useState } from 'react'
import ErrorModal from '../components/ErrorModal/ErrorModal'
import { useAppDispatch, useAppSelector } from '../lib/redux/hooks'
import { showError, showLogin } from '../lib/redux/serviceSlice'
import { nanoid } from 'nanoid'
import { setSpecs} from '../lib/redux/specSlice'
import { setUserData } from '../lib/redux/userSlice'

export default function SignUp() {
const router = useRouter()
const isShowErr = useAppSelector(state=>state.serviceSlice.isErrorShow)
const dispatch = useAppDispatch()
const [isPwdMatch,setIsPwdMatch] = useState<boolean>(true)
const [stack,setStack] = useState<{
    specName: string,
    specializationId: number
}[]>([])
const [isAddTech,setIsAddTech] = useState<boolean>(false)
const specList = useAppSelector(state=>state.specSlice.specList)
const [selectedTech,setSelectedTech] = useState<string|null>(null)
const techRef = useRef<HTMLLIElement|null>(null)

function selectTech(e:React.MouseEvent<HTMLLIElement>) {
    if (techRef.current) {
        techRef.current.style.color = 'black'
        techRef.current.style.backgroundColor = 'white'
    }
    techRef.current = e.currentTarget
    setSelectedTech(e.currentTarget.innerText)
    e.currentTarget.style.backgroundColor='blue'
    e.currentTarget.style.color='white'
}

async function register(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    if (formData.get('password')!==formData.get('repeat-pwd')) {
        setIsPwdMatch(false)
        return
    }
    const dataObj = {
        email: formData.get('email'),
        fullname: formData.get('name'),
        password: formData.get('password'),
        nickname: formData.get('login')
    }
    console.log('DATA ONG')
    console.log(JSON.stringify(dataObj))
    const res = await fetch('http://localhost:4200/auth/register', {
        method: 'POST',
        body: JSON.stringify(dataObj),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.ok) {
        const resData = await res.json()
        dispatch(setUserData({
            token: resData.access_token,
            isSignIn: true
        }))
        dispatch(showLogin(false))
        router.push('/')
    }
    else dispatch(showError(true))
}

async function getSpec() {
    const res  = await fetch('http://localhost:4200/spec/getAll')
    const resData = await res.json()
    console.log('resData')
    console.log(resData)
    dispatch(setSpecs(resData))

} 

function addTech() {
    const dataObj = {
        //@ts-ignore
        specializationId: +techRef.current!.dataset.id,
        specName: techRef.current!.innerText
    }
setStack([dataObj, ...stack])
}

useEffect(()=>{
getSpec()
},[])
    return(
        <div className={classes.Wrapper}>
            <div className={classes.Title}>
            <h1>РЕШИЛ НАЧАТЬ ХАКАТОНИТЬ?</h1>
            <h1>WELCOME!</h1>
            </div>
            <form onSubmit={(e)=>register(e)}>
                    <label htmlFor="name">Имя</label>
                    <input type="text" id="name" name="name" required/>
                    <label htmlFor="surname">Фамилия</label>
                    <input type="text" id="surname" name="surname" required/>
                    <label htmlFor="login">Никнейм</label>
                    <input type="text" id="login" name="login" required/>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required/>
                    <label htmlFor="password">Пароль</label>
                    <input type="password" name="password" id="password" required onFocus={()=>setIsPwdMatch(true)}/>
                    <label htmlFor="repeat-password">Повторите пароль</label>
                    <input type="password" name='repeat-pwd' id='repeat-pwd' required onFocus={()=>setIsPwdMatch(true)}/>
                    <label htmlFor="contact">Предпочтительный контакт для связи</label>
                    <input type="text" id="contact" name="contact" required/>
                    <div className={classes.Stack}>
                        <label htmlFor="stack">Ваши технологии</label>
                        {isAddTech&&
                        <div className={classes.AddTech}>
<div className={classes.TechInput}>
<input type="text" placeholder='Начните вводить название технологии...'/>
<ul className={classes.StackCheck}>
    {specList.map(el=>{
        return(
            <li key={el.specializationId} onClick={(e)=>selectTech(e)} data-id={el.specializationId}>{el.specName}</li>
        )
    })}
</ul>
</div>
<button type='button' disabled={techRef.current===null?true:false} onClick={()=>addTech()}>Добавить</button>
<button type='button' onClick={()=>setIsAddTech(false)}>Отмена</button>
</div>
                        }
                        {!isAddTech&&<button type='button' onClick={()=>setIsAddTech(true)}>Добавить технологию</button>}
                        <ul className={classes.StackList}>
                            {stack.map(el=>{
                                return(
                                    <li key={el.specializationId} className={classes.StackEl}>
                                        <p>{el.specName}</p>
                                        <svg onClick={()=>setStack(stack.filter(item=>item.specializationId!==el.specializationId))} style={{cursor: 'pointer'}} width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M9.17065 4C9.58249 2.83481 10.6937 2 11.9999 2C13.3062 2 14.4174 2.83481 14.8292 4" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/> <path d="M20.5 6H3.49988" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/> <path d="M18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5M18.8334 8.5L18.6334 11.5" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/> <path d="M9.5 11L10 16" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/> <path d="M14.5 11L14 16" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/> </g>

</svg>
                                        </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={classes.About}>
                    <label htmlFor="about">О себе</label>
                    <textarea name="about" id="about"></textarea>
                    </div>
                    <div className={classes.Agreement}>
                    <input type="checkbox" id="agreement" name="agreement" required/>
                    <label htmlFor="agreement">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet egestas lectus. Pellentesque vel finibus velit. Nunc vitae metus pharetra, eleifend leo eu, luctus neque. Etiam porta turpis sed tellus aliquam, sed gravida sapien sollicitudin. Nullam porta arcu nunc. In in nisi tincidunt, ornare arcu sed, congue leo. Nam imperdiet arcu et dui facilisis vestibulum.</label>
                    </div>
                <button className={`${classes.SignUpBtn} StandardButton`} type='submit'>Зарегистрироваться</button>
                {!isPwdMatch&&
                <p className={classes.NoMatchPwds}>Пароли не совпадают</p>
                }
            </form>
            {isShowErr&&<ErrorModal errText='Такой пользователь уже зарегестрирован'/>}
        </div>
    )
}