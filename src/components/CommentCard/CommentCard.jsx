import style from './CommentCard.module.css'
import StarRank from '../StarRank';
import DefaultProfileImg from '../../Assets/profile-default-icon-small.png'

const CommentCard = (props) =>{
    let thisCardStars = props.stars;
    let comment = props.comment;
    let user = props.user;
    let userPic = props.userPic;

    if (userPic === null || userPic === ''){
        userPic = DefaultProfileImg
    }


    return(
        <div className={style.commentCardContainer}>
            <StarRank rate={thisCardStars}/>
            <span className={style.cardUserComment}>{comment}</span>
            <div className={style.cardUserdataContainer}>
                <img className={style.cardUserPic} src={userPic} alt="Imagen de usuario"/>
                <span className={style.cardUsername}>{user}</span>
            </div>
        </div>
    )
}

export default CommentCard