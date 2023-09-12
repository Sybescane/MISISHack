"use client"

import classes from './page.module.scss'
import { useEffect, useState } from 'react'

export default function UserProfile() {
const [skills,setSkills] = useState([
'php',
'kotlin',
'js',
'c++',
'c--'
])
const [contacts,setContacts] = useState([{
    src:'Discord',
    value:'5252525252'
},
{
    src: 'VK',
    value: '255252525255'
},
{
    src: 'Telegram',
    value: '352252525'
}
])

    return (
        <div className={classes.Wrapper}>
            <div className={classes.Content}>
            <div className={classes.NameSkills}>
    <h1>Артем “Goodzone” Зебелян</h1>
    <ul>
        {skills.map(skill=>{
            return(
                <li className={classes.Skill}>{skill}</li>
            )
        })}
    </ul>
</div>
<div className={`${classes.About} ${classes.ContentBlocks}`}>
    <h3>О себе</h3>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere odio nec tellus bibendum rhoncus. Morbi volutpat, ipsum eu tempus lacinia, nibh risus molestie lectus, eget semper nisl felis nec mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tempor mattis rutrum. Curabitur imperdiet et odio at euismod. Maecenas pharetra metus velit, at vehicula risus placerat sed. Proin nec eros porttitor ipsum eleifend semper ac id risus. Nam mattis, neque at imperdiet accumsan, lectus magna aliquam lorem, at vulputate lectus magna vel nisl. Suspendisse at ultrices diam, ac accumsan enim. Donec nec faucibus justo. Sed eleifend sapien nec neque gravida luctus. In porttitor lectus at arcu elementum, sit amet pulvinar neque pellentesque. Donec vitae vestibulum lacus. Nullam sed odio odio. Mauris id gravida lectus. Cras congue ultricies eleifend.
    </p>
</div>
<div className={`${classes.Contacts} ${classes.ContentBlocks}`}>
{contacts.map(contact=>{
    return(
        <>
        <p>{contact.src}</p>
        <p>{contact.value}</p>
        </>
    )
})}
</div>
<div className={classes.ContentBlocks}>
    <h3>Активные команды</h3>
    <p>Пока не состоит ни в одной команде...</p>
</div>
<div className={classes.ContentBlocks}>
    <h3>Активные соревнования</h3>
    <p>Конкуренция не начата...</p>
</div>
<div className={classes.ContentBlocks}>
    <h3>Достижения</h3>
    <p>Ещё многое предстоит открыть...</p>
</div>
            </div>
        </div>
    )
}