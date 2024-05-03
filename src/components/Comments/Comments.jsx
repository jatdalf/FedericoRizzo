import style from './Comments.module.css'
import OpinionesImg from '../../Assets/Opiniones.png'
import { commentsDb } from '../commentsDb'
import CommentCard from '../CommentCard/CommentCard'

const Comments = () =>{
    let filteredComments = commentsDb.filter((commentsDb)=>{
        return commentsDb.stars == 5
    })
    console.log (filteredComments)
    
    let commentsToShow = []
    for (let index = 0; index < 2; index++) {
        let parte1 = []
        let parte2 = []
        let azar = Math.floor(Math.random()*filteredComments.length)
        commentsToShow.push(filteredComments[azar])
        if(azar === 0){
            filteredComments.shift()
        }else{
            parte1 = filteredComments.slice(0,azar)
            parte2 = filteredComments.slice(azar+1)
        }
        filteredComments= parte1.concat(parte2)        
    }
    console.log("filtrado")
    console.log(commentsToShow)


    return(
        <div className={style.CommentsContainer}>
            <img className={style.CommentsImg} src={OpinionesImg} alt='mano sosteniendo opiniones'/>
            <span className={style.CommentsOpiniones}>OPINIONES</span>
            <br />
            <span className={style.CommentsQimportan}>QUE IMPORTAN</span>
            <div className={style.OpinionesCardContainer}>
                <CommentCard 
                    stars={5}
                    comment={'comment'}
                    user={'user'}
                    userPic={''}
                    />
            </div>
        </div>
    )
}

export default Comments;