import Banner from '../subComponents/Banner'
import styles from './Conteudo.module.css'
import imagemPrinciapal from './imagem/imagempPrincipal.jpeg'


function Conteudo(){
    return(
        <>
            <div className={styles.banner}>
             <Banner id="imagemprincipal" imagem={imagemPrinciapal} title="title" descripiton="descrição"/> 
            </div>
       </>

    )
}

export default Conteudo