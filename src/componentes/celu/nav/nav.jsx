import logo from "./logo.png"
import styles from "./styles/nav.module.css"

function Nav(){
    return (
        <div className={styles.contenedor}>
            <ul className={styles.header}>
                <li><img className={styles.logo} src={logo} alt="" /></li>
                <li><h1>Porfolio</h1></li>
                <li><button onClick={window.location.href = "https://drive.google.com/file/d/1BUQ68zJrOqxKJ2Ns-QRQNAz8zvJC55HO/view?usp=sharing"} className={styles.boton}>Download CV</button></li>
                </ul>
        </div>
    )
}

export default Nav