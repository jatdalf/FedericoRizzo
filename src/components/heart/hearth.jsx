import style from './hearth.module.css'
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

const heart = (props) => {
    // const like = props.like
    const like = false


    return(
        <div className={style.heartcontainer}>
            { like
                ? <GoHeartFill />  
                : <GoHeart />
            }            
        </div>
    )
}

export default heart;