import style from './MvvText.module.css'

const MvvText = (props)=>{               
    return (              
        <li className={style.Mvvp}>{props.cardText}</li>
    )
}

export default MvvText   