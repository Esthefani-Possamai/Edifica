import React from "react";
import { CriarButton } from "../Style"

export default function SubmitButton ({ text }) {
    return(
        <CriarButton>
            <button>{text}</button>
        </CriarButton>
    )
}