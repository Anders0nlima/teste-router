import Img from '../subComponents/Img'
import styles from './Footer.module.css'
import canada from '../componets/imagem/canada.png'; 


function Footer(){
  return(
    <div className={styles.principal}>

            <div className={styles.espacoLinks}>

                <div className={styles.link}>

                   <div className={styles.botao}>
                   <Img id="login" imagem={canada} to="/login" />
                     
                   </div>

                   <div className={styles.descricao}>
                     <p>Login</p>
                  </div>

                </div>

                <div className={styles.link}>

                   <div className={styles.botao}>
                     <Img id="guias" imagem="" to="/login" />
                   </div>

                   <div className={styles.descricao}>
                     <p>Gamificação</p>
                  </div>

                </div>

                <div className={styles.link}>

                   <div className={styles.botao}>
                     <Img id="guias" imagem="/imagens/h1.jpg" to="/login" />
                   </div>

                   <div className={styles.descricao}>
                     <p>Agenda</p>
                  </div>

                </div>

                <div className={styles.link}>

                   <div className={styles.botao}>
                     <Img id="guias" imagem="/imagens/h1.jpg" to="/login" />
                   </div>

                   <div className={styles.descricao}>
                     <p>Mapa</p>
                  </div>

                </div>

                <div className={styles.link}>

                   <div className={styles.botao}>
                     <Img id="guias" imagem="/imagens/h1.jpg" to="/login" />
                   </div>

                   <div className={styles.descricao}>
                     <p>Torne-se Guia</p>
                  </div>

                </div>

                <div className={styles.link}>

                   <div className={styles.botao}>
                     <Img id="guias" imagem="/imagens/h1.jpg" to="/login" />
                   </div>

                   <div className={styles.descricao}>
                     <p>Blogs</p>
                  </div>

                </div>

           


        </div>

    </div>
  )
}

export default Footer