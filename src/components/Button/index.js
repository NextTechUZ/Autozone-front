import { Link } from "react-router-dom"
import styles from "./index.module.scss"

function Button({to,color,value,click}){
   if (to) {
    return(
        <Link style={{color:color}} className={styles.button}  to={to}>
                {value}    
        </Link>
    )
   }
   return(
    <button style={{color:color}} className={styles.button} onClick={()=>click()}>
        {value}
    </button>
   )
}
export default Button