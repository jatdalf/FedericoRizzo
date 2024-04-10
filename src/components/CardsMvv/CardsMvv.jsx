import style from './CardsMvv.module.css'
import MvvText from '../MvvText/MvvText'

const CardsMvv = (props)=>{    
    const textData = props.cardText
    const currentText = props.cardText.slice(0,textData.length)       
    
    return (
    <div className={style.cardMvv}>           
        <div> 
            <img className={style.MvvIcon} src={props.cardImage} alt={props.name} />
            <h2  className={style.MvvTitle}>{props.name}</h2>     
            {currentText.map(textData =>{
                return <MvvText
                    key= {textData.id}
                    ID= {textData.id}                                     
                    cardText = {textData}            
                />})       
                }  
        </div>        
    </div>)
}

export default CardsMvv   