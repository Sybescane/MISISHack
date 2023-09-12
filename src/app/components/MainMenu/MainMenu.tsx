import { useAppDispatch } from '@/app/lib/redux/hooks'
import classes from './MainMenu.module.scss'
import { showMenu } from '@/app/lib/redux/serviceSlice'
import Link from 'next/link'

export default function MainMenu() {
const dispatch = useAppDispatch()

    return(
        <div className={classes.Wrapper}>
            <div className={classes.Header}>
            <svg className={classes.Cross} fill="#ffffff" width="60px" height="60px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g onClick={()=>dispatch(showMenu(false))} style={{cursor: 'pointer'}} id="SVGRepo_iconCarrier"> <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5 c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4 C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"/> </g>

</svg>
<svg width="100" height="60" viewBox="0 0 141 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.39648 29.9998C2.39648 14.7549 14.7549 2.39648 29.9998 2.39648L110.994 2.39648C126.239 2.39648 138.597 14.7549 138.597 29.9998C138.597 45.2447 126.239 57.6031 110.994 57.6031L29.9998 57.6031C14.7549 57.6031 2.39648 45.2447 2.39648 29.9998Z" fill="#90FFA2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30 0L110.994 0C127.563 0 140.994 13.4315 140.994 30C140.994 46.5685 127.563 60 110.994 60L30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0ZM30 2.39668C14.7551 2.39668 2.39668 14.7551 2.39668 30C2.39668 45.2449 14.7551 57.6033 30 57.6033L110.994 57.6033C126.239 57.6033 138.598 45.2449 138.598 30C138.598 14.7551 126.239 2.39668 110.994 2.39668L30 2.39668Z" fill="#282828"/>
<path d="M27.5312 43.6187V16.3838L21.9863 16.4382V43.6187H27.5312Z" fill="#282828"/>
<path d="M38.5308 21.9286V43.6187H44.0213V21.9286H52.2842V16.4382H30.2679V21.9286H38.5308Z" fill="#282828"/>
<path d="M108.136 16.438L101.069 43.075V16.438H90.1968L82.9668 43.6186H88.4573L95.5242 16.9816V43.6186H106.396L113.463 16.9816V43.6186H119.008V16.438H108.136Z" fill="#282828"/>
<path d="M72.7351 42.3113H78.2255L71.0499 23.4661L65.6409 23.4661L60.232 23.4661L53.002 42.3113H58.4924L65.6409 23.4661L72.7351 42.3113Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M71.8317 43.6185L65.6376 27.1642L59.3961 43.6185H51.1016L59.3347 22.1587H71.9523L80.1235 43.6185H71.8317ZM65.6423 23.4659L72.7364 42.3112H78.2269L71.0512 23.466L65.6423 23.4659L60.2333 23.466L53.0033 42.3112H58.4938L65.6423 23.4659Z" fill="#282828"/>
</svg>
            </div>
            <div className={classes.LinksList}>
            <Link href="/findProgrammer" className={classes.Link}>НАЙТИ КОМАНДУ/СПЕЦА</Link>
            </div>
        </div>
    )
}