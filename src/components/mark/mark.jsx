import style from './mark.module.css'
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

const mark = (props) => {
    const marked = props.marked


    return(
        <div className={style.markContainer}>
            { marked
                ? <FaRegBookmark />
                : <FaBookmark />
            }            
        </div>
    )
}

export default mark;