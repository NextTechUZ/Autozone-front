import { Link } from "react-router-dom"
import styles from "./index.module.scss"

function Button({to,color,value,click,type}){
   if (to) {
    return(
        <Link style={{color:color}} className={styles.button}  to={to}>
                {value}    
        </Link>
    )
   }
   return(
    <button type={type} style={{color:color}} className={styles.button} onClick={click}>
        {value}
    </button>
   )
}
export default Button