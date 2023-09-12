import { nanoid } from 'nanoid/async'
import classes from './TeamCard.module.scss'

type PropsType = {
    name: string,
    progers: Array<{
        fullname: string,
        specializations: Array<string>
    }>
    openPos: Array<string>
}

export default function TeamCard(props: PropsType) {
    return(
        <div className={classes.Wrapper}>
            <h2 className={classes.Name}>{props.name}</h2>
            <div className={classes.Team}>
                {props.progers.map(proger=>{
                    return(
                        <div key={String(nanoid())} className={classes.TeamContent}>
                            <svg width="100" height="100" viewBox="0 0 168 168" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="84" cy="84" r="84" fill="#D9D9D9"/>
</svg>
<div className={classes.ProgerInfo}>
    <h6>{proger.fullname}</h6>
    <div className={classes.StackList}>
        {proger.specializations.map(spec=>{
            return(
                <div key={String(nanoid())}>{spec}</div>
            )
        })}
    </div>
</div>
                        </div>
                    )
                })}
            </div>
            <div className={classes.OpenPosWrapper}>
                <h5>Открытые позиции</h5>
                <div className={classes.OpenPos}>
                    <div className={classes.OpenSpec}>
                        {props.openPos.map(pos=>{
                            return(
                                <div key={String(nanoid())}>
                                    {pos}
                                </div>
                            )
                        })}
                    </div>
                    <button type='button' className='StandardButton'>Присоединиться</button>
                </div>
            </div>
        </div>
    )
}