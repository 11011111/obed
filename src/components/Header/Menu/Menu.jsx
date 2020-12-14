import styles from "./Menu.module.css";


const Menu = () => {
     return (
          <div>
               <ul className={ styles.nav }>
                    <li>
                         <a className={ styles.operator } href="#">Клиенты</a>
                         <ul>
                              <li><a href="#">Необработанные</a></li>
                         </ul>
                    </li>
                    <li>
                         <a className={ styles.orders } href="#">Заказы</a>
                         <ul>
                              <li><a href="#">Меню</a></li>
                         </ul>
                    </li>
                    <li><a className={ styles.car } href="#">Доставка</a></li>
                    <li><a className={ styles.file } href="#">Отчеты</a></li>
               </ul>
          </div>
     );
}

export default Menu;