import React from "react";
import Project from "./pages/Project";
import { Link } from "react-router-dom";
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'
import { category_text, ButtonLink, CardAll, CardTot } from './Style'

export default function ProjectCard ({id, name, budget, category, handleRemove}) {
    
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }
    
    return (
        <CardTot>
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span> R${budget}
            </p>
            <category_text>
                {category}
            </category_text>
            <CardAll>
                <Link to={`/project/${id}`}>
                    <span>
                        <BsPencil /> Editar
                    </span>
                </Link>
                <ButtonLink onClick={remove}>
                    <BsFillTrashFill /> Excluir
                </ButtonLink>
            </CardAll>
        </CardTot>
    )
}