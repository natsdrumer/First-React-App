import React from "react";
import "./styles.css"



function Button ({name, color, size, handleOnClick }){

    let width, height, fontSize;

    switch(size){
        case 'small':
            width = '80px'
            height = '40px'
            fontSize = '14px'
            break
        case 'medium':
            width = '150px'
            height = '50px'
            fontSize = '18px'
            break
        case 'big':
            width = '225px'
            height = '60px'
            fontSize = '22px'
            break
        default:
            break
    }

    const styles = {
        backgroundColor: color,
        width: width,
        height: height,
        fontSize: fontSize,
    }
    return(
        <button
        className = 'button'
        style={styles}
        onClick={handleOnClick}
        >{name}</button>
    )  
}

export default Button;