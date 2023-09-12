"use client"

import classes from './page.module.scss'
import ProgrammerCard from '../components/ProgrammerCard/ProgrammerCard'
import { useState, useEffect } from 'react'

type ProgrammersType = Array<{
    fullname: string,
    nickname: string,
    specializations: Array<{
        specializationId: number,
        specName: string
    }>
}>

export default function CreateTeam() {
    const [isCreated,setIsCreated] = useState<boolean>(false)
    const [progers,setProgers] = useState<ProgrammersType>([
        {
            fullname: 'Артёмчик',
            nickname: 'Красавец',
            specializations: [
                {
                    specializationId: 1,
                    specName: "Сосать хуй"
                },
                {
                    specializationId: 2,
                    specName: "Маму ебал"
                },
                {
                    specializationId: 3,
                    specName: "Инмин говно"
                },
            ]
        },
        {
            fullname: 'Артёмчик',
            nickname: 'Красавец',
            specializations: [
                {
                    specializationId: 1,
                    specName: "Сосать хуй"
                },
                {
                    specializationId: 2,
                    specName: "Маму ебал"
                },
                {
                    specializationId: 3,
                    specName: "Инмин говно"
                },
            ]
        },
        {
            fullname: 'Артёмчик',
            nickname: 'Красавец',
            specializations: [
                {
                    specializationId: 1,
                    specName: "Сосать хуй"
                },
                {
                    specializationId: 2,
                    specName: "Маму ебал"
                },
                {
                    specializationId: 3,
                    specName: "Инмин говно"
                },
            ]
        },
        {
            fullname: 'Артёмчик',
            nickname: 'Красавец',
            specializations: [
                {
                    specializationId: 1,
                    specName: "Сосать хуй"
                },
                {
                    specializationId: 2,
                    specName: "Маму ебал"
                },
                {
                    specializationId: 3,
                    specName: "Инмин говно"
                },
            ]
        },
        {
            fullname: 'Ортёмчик',
            nickname: 'Твою',
            specializations: [
                {
                    specializationId: 1,
                    specName: "ML"
                },
                {
                    specializationId: 2,
                    specName: "Маму ебал"
                },
                {
                    specializationId: 3,
                    specName: "Инмин говно"
                },
            ]
        },
        {
            fullname: 'Артёмчик',
            nickname: 'Красавец',
            specializations: [
                {
                    specializationId: 1,
                    specName: "Сосать хуй"
                },
                {
                    specializationId: 2,
                    specName: "Маму ебал"
                },
                {
                    specializationId: 3,
                    specName: "Инмин говно"
                },
            ]
        },
        {
            fullname: 'Артёмчик',
            nickname: 'Красавец',
            specializations: [
                {
                    specializationId: 1,
                    specName: "Сосать хуй"
                },
                {
                    specializationId: 2,
                    specName: "Маму ебал"
                },
                {
                    specializationId: 3,
                    specName: "Инмин говно"
                },
            ]
        },
        {
            fullname: 'Артёмчик',
            nickname: 'Красавец',
            specializations: [
                {
                    specializationId: 1,
                    specName: "Сосать хуй"
                },
                {
                    specializationId: 2,
                    specName: "Маму ебал"
                },
                {
                    specializationId: 3,
                    specName: "Инмин говно"
                },
            ]
        },
        {
            fullname: 'Артёмчик',
            nickname: 'Красавец',
            specializations: [
                {
                    specializationId: 1,
                    specName: "Сосать хуй"
                },
                {
                    specializationId: 2,
                    specName: "Маму ебал"
                },
                {
                    specializationId: 3,
                    specName: "Инмин говно"
                },
            ]
        },{
            fullname: 'Артёмчик',
            nickname: 'Красавец',
            specializations: [
                {
                    specializationId: 1,
                    specName: "Сосать хуй"
                },
                {
                    specializationId: 2,
                    specName: "Маму ебал"
                },
                {
                    specializationId: 3,
                    specName: "Инмин говно"
                },
            ]
        },
        {
            fullname: 'Артёмчик',
            nickname: 'Красавец',
            specializations: [
                {
                    specializationId: 1,
                    specName: "Сосать хуй"
                },
                {
                    specializationId: 2,
                    specName: "Маму ебал"
                },
                {
                    specializationId: 3,
                    specName: "Инмин говно"
                },
            ]
        },{
            fullname: 'Артёмчик',
            nickname: 'Красавец',
            specializations: [
                {
                    specializationId: 1,
                    specName: "Сосать хуй"
                },
                {
                    specializationId: 2,
                    specName: "Маму ебал"
                },
                {
                    specializationId: 3,
                    specName: "Инмин говно"
                },
            ]
        },
    ])
    const [queryFind,setQueryFind] = useState<string>('')
    const [filteredProgers,setFilteredProgers] = useState<ProgrammersType>(progers)

async function getProgers() {
    const res = await fetch('http://localhost:4200')
    
    if(res.ok) {
        setProgers(await res.json())
    }
}

async function createTeam(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const dataObj = {
        isOpened: true,
        description: '',
        captainId: 5,
        specializations: [],
        name: formData.get('name')
    }
    const res = await fetch('http://localhost:4200/team/create-team',{
        method: 'POST',
body: JSON.stringify(dataObj),
headers: {
    'Content-Type': 'application/json'
}
    })
    if (res.ok) {
        console.log('OK')
        console.log(res)
        setIsCreated(true)
    }
    else console.log('error')
}

useEffect(()=>{
getProgers()
},[])
useEffect(()=>{
    if (queryFind==='') setFilteredProgers(progers)
    else {
        const query = queryFind.trim().toLocaleLowerCase()
        const filteredArr = progers.filter(proger=>{
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
    },[queryFind])
    return(
        <div className={classes.Wrapper}>
           {!isCreated&&
           <form onSubmit={(e)=>createTeam(e)}>
           <h3 className={classes.Title}>Создание команды</h3>
           <div className={classes.TitleInput}>
               <label htmlFor="name">Название команды</label>
               <input type="text" id='name' name='name' required placeholder='Что-то креативное :)'/>
           </div>
           <h3 className={classes.AddProg}>Добавьте участников</h3>
           <input type="text" placeholder='Введите имя или технологию...' className={classes.FindInput} onChange={(e)=>setQueryFind(e.currentTarget.value)}/>
           <div className={classes.Progers}>
               {filteredProgers.map(proger=>{
                   return(
                       <div className={classes.ProgersWrapper}>
<ProgrammerCard nickname={proger.nickname} fullname={proger.fullname} specializations={proger.specializations}/>
                       </div>
                   )
               })}
           </div>
           <button type='submit' className={`StandardButton ${classes.RegBtn}`}>Зарегистрировать</button>
       </form>
           } 
           {isCreated&&
<h1 className={classes.Success}>Команда успешно создана!</h1>
           }
        </div>
    )
}