import style from './Comments.module.css'
import OpinionesImg from '../../Assets/Opiniones.png'

const Comments = () =>{
    return(
        <div className={style.CommentsContainer}>
            <img src={OpinionesImg} alt='mano sosteniendo opiniones'/>
            <span>OPINIONES</span>
            <br />
            <span>QUE IMPORTAN</span>
            <div className={style.OpinionesCardContainer}>

            </div>
        </div>
    )
}

export default Comments;