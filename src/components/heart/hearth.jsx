import style from './hearth.module.css'
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

const heart = (props) => {
    const like = props.like


    return(
        <div className={style.heartcontainer}>
            { like
                ? <GoHeart />   
                : <GoHeartFill /> 
            }            
        </div>
    )
}

export default heart;