import styles from "./Profile.module.css";
import ava from "../../../img/ico/ava.svg";

const Profile = () => {
     return (
          <div>
               <ul className={ styles.nav }>
                    <li className={ styles.liAva }>
                         <a href="#">
                              <img src={ ava } width="40" alt="" className={ styles.avaImg } />
                         </a>
                    </li>
                    <li className={ styles.liName }>
                         <a href="#" className={ styles.nameAcc }>
                              <span>Привет, <b id="userName">Админ!</b></span>
                         </a>
                         <ul>
                              <li><a href="#" id="logOut">Выйти</a></li>
                         </ul>
                    </li>
               </ul>
          </div>
     );
}

export default Profile;