
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

function NavBar(){
    return(
        <div className={styles.list}>

          <Link className={styles.item} to="/teste-router">HomePage</Link>

          <Link className={styles.item} to="/registrar">RegisterPage</Link>

          <Link  className={styles.item} to="/login">LoginPage</Link>

          <Link className={styles.item} to='/detalhes'>GuideDetails</Link>

        </div> 
    )
}

export default NavBar