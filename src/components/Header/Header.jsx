
import Menu from "./Menu/Menu";
import styles from "./Header.module.css";
import logo from "../../img/logo.svg";
import MenuElem from "./MenuElem/MenuElem";
import Profile from "./Profile/Profile";


const Header = () => {


     const React = require('react');

     console.log(React.version);

     return (
         <header>
              <div className="container">
                   <div className="flex just">
                        <a href="/"><img src={logo} className={ styles.logo } alt="Привет, Обед!"/></a>
                        <div className={ styles.menu_nav }>
                             <Menu />
                             <MenuElem />
                             <Profile />
                        </div>
                   </div>
              </div>
         </header>
     );
}



export default Header;
