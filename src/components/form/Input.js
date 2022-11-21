import React from "react";
import { InputForm } from "../Style"

//Imput dinâmico para qualquer formulário
export default function Input ({type, text, name, placeholder, handleOnChange, value}) {
    return (
        <div>
            <label htmlFor={name}>{text}:</label>
            <InputForm type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value}/>
        </div>
    )
}