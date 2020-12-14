import styles from "./MenuElem.module.css";
import analitic from "../../../img/ico/analitic.svg";
import question from "../../../img/ico/question.svg";

const MenuElem = () => {
     return (
          <div>
               <ul className={ styles.nav }>
                    <li className={ styles.liAnalitic } >
                         <a href="#" className={ styles.analitic }>
                              <img src={ analitic } alt="" />
                         </a>
                    </li>
                    <li className={ styles.liQuestion } >
                         <a href="#" className={ styles.question }>
                              <img src={ question } alt="" />
                         </a>
                    </li>
               </ul>
          </div>
     );
}

export default MenuElem;