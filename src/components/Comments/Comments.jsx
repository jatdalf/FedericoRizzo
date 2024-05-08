import style from './Comments.module.css'
import OpinionesImg from '../../Assets/Opiniones.png'
import { commentsDb } from '../commentsDb'
import CommentCard from '../CommentCard/CommentCard'

const Comments = () =>{
    let filteredComments = commentsDb.filter((commentsDb)=>{
        return commentsDb.stars == 5
    })

    function obtenerTresElementosAlAzar(array) {
        // Copia el array original para no modificarlo
        const copiaArray = array.slice();
  
         // Aleatoriza el orden del array
        copiaArray.sort(() => Math.random() - 0.5);
  
        // Retorna los primeros tres elementos del array aleatorizado
        return copiaArray.slice(0, 3);
    }
    
    let commentsToShow = obtenerTresElementosAlAzar(filteredComments);
    const currentComment = commentsToShow.slice(0, 3)

    return(
        <div className={style.CommentsContainer}>
            <img className={style.CommentsImg} src={OpinionesImg} alt='mano sosteniendo opiniones'/>
            <span className={style.CommentsOpiniones}>OPINIONES</span>
            <br />
            <span className={style.CommentsQimportan}>QUE IMPORTAN</span>
            <div className={style.OpinionesCardContainer}>
                {currentComment.map(cardData =>{
                return <CommentCard
                    key= {cardData.id}
                    ID= {cardData.id}
                    stars={cardData.stars}
                    comment={cardData.comment}
                    user={cardData.user}
                    userPic={cardData.userPic}
                />})
                }                  
            </div>
        </div>
    )
}

export default Comments;