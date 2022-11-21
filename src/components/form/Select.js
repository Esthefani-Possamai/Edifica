import React from "react";
import { SelectForm, SelectAll } from "../Style"

export default function Select ({text, name, options, handleOnChange, value}) {
    return (
    <SelectAll>
        <label htmlFor={name}>{text}:</label>
        <SelectForm name={name} id={name} onChange={handleOnChange} value={value || ''}>
            <option>
                Caro usuário, selecione uma opção
            </option>
            {options.map((option) => (
                <option value={option.id} key={option.id}>{option.name}</option>
            ))}
        </SelectForm>
    </SelectAll>
    )
}


