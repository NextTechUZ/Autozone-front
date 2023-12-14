import { Link } from "react-router-dom"
import styles from "./index.module.scss"

function Button({to,style,value,click,buttonType}){
   if (to) {
    return(
        <Link style={style} className={styles.button}  to={to}>
                {value}    
        </Link>
    )
   }
   return(
    <button type={buttonType} style={style} className={styles.button} onClick={click}>
        {value}
    </button>
   )
}
export default Button