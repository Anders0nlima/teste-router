import NavBar from '../componets/NavBar'
import styles from './Banner.module.css'


function Banner ({id, imagem, title, descripiton}){
    return (
       <>
       <div className={styles.banner}>

       <img className={styles.img} id={id} type="button" style={{backgroundImage: `url(${imagem})`}} alt=""></img>

        <div className={styles.content}>
        <h1>{title}</h1>
        <p>{descripiton}</p>
        </div>

        </div>
       </>
        
    )
}

export default Banner