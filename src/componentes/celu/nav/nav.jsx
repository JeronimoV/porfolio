import logo from "./logo.png"
import styles from "./styles/nav.module.css"

function Nav(){
    return (
        <div className={styles.contenedor}>
            <nav className={styles.header}>
                <img className={styles.logo} src={logo} alt="" />
                <h1>Porfolio</h1>
                <button>Download CV</button>
            </nav>
        </div>
    )
}

export default Nav