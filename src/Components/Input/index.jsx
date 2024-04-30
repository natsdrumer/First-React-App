import React from "react";
import'./styles.css'

function Input({type,id,size }){
    let width, height;

    switch(size){
        case 'small':
            width = '125px'
            height = '30px'
            break
        case 'medium':
            width = '250px'
            height = '30px'
            break
        case 'big':
            width = '400px'
            height = '55px'
            break
        default:
            break
    }


    const styles = {
        width: width,
        height: height,

    }

    return (
        <input 
        className="input"
        style={styles}
        type = {type}
        id={id}
        ></input>
    )
}

export default Input;