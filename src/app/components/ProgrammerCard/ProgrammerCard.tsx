import classes from './ProgrammerCard.module.scss'

type PropsType = {
    fullname: string,
    specializations: Array<{
        specializationId: number,
        specName: string
    }>,
    nickname: string
}

export default function ProgrammerCard(props: PropsType) {
    return(
        <div className={classes.Wrapper}>
            <svg width="100" height="100" viewBox="0 0 168 168" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="84" cy="84" r="84" fill="#D9D9D9"/>
</svg>
<div className={classes.Info}>
    <h3>{props.fullname} {props.nickname}</h3>
    <div className={classes.StackList}>
        {props.specializations.map(spec=>{
            return <p className={classes.Spec}>{spec.specName}</p>
        })}
    </div>
</div>
<button type='button' className={`StandardButton ${classes.HuntBtn}`}>Захантить в команду</button>
        </div>
    )   
}