import styles from "./styles/home.module.css"
import Card from "../card/card"
import oldPorfolio from "./styles/Captura.PNG"
import { useState } from "react";

function Home(){
    const [imagenesProyectos, setImagenesProyectos] = useState(oldPorfolio)
    const proyectos = [oldPorfolio]

    function handleClickRight(){
        
    }
    function handleClickLeft(){
        
    }

        return (
            <div className={styles.contenedor}>
                <div className={styles.cuerpo}>
                    <h1 className={styles.for}>For a better experience, use a PC</h1>
                    <Card></Card>
                        <p className={styles.proyectos}>Proyects</p>
                    <div className={styles.proyectoides}>
                        <img onClick={() => handleClickLeft()} className={styles.flecha1} src="https://www.pngkey.com/png/full/355-3555726_circular-la-edicin-deja-una-flecha-blanca-arrow.png" alt="" />
                        <button className={styles.button}><img className={styles.profolio} src={imagenesProyectos} alt="" /></button>
                        <img onClick={() => handleClickRight()} className={styles.flecha2} src="https://www.pngkey.com/png/full/355-3555726_circular-la-edicin-deja-una-flecha-blanca-arrow.png" alt="" />
                    </div>    
                </div>
                <div className={styles.pc}>
                    
                </div>
            </div>
    )
}

export default Home