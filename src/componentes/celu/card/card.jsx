import { useState } from "react"
import style from "./styles/card.module.css"

function Card(){
    const [img, setImg] = useState("https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png")

    

    function ImageChanger(){
            if(img === "https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png"){
                setImg("https://repository-images.githubusercontent.com/347723622/92065800-865a-11eb-9626-dff3cb7fef55")
            }else if(img === "https://repository-images.githubusercontent.com/347723622/92065800-865a-11eb-9626-dff3cb7fef55"){
                setImg("https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png")
            }else{
                setImg("https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png")
            }
        }
    
    setTimeout(ImageChanger, "2000")
    

    return (
        <div className={style.fondo}> 
            <img  className={style.fondoimg} src={img} alt="react png" />
            <h1>Without work experience</h1>
        </div>
    )}

export default Card