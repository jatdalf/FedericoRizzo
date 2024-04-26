import style from './mark.module.css'
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

const mark = (props) => {
    // const marked = props.marked
    const marked = false

    return(
        <div className={style.markContainer}>
            { marked
                ?  <FaBookmark />
                : <FaRegBookmark />
            }            
        </div>
    )
}

export default mark;