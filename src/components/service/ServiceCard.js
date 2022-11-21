import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { ButtonLink, ServiceeCard } from "../Style"

export default function ServiceCard ({ id, name, cost, description, handleRemove }) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id, cost)
    }

    return(
        <ServiceeCard>
            <h4>{name}</h4>
            <p>Custo total: R${cost}</p>
            <p>Descrição do serviço: {description}</p>
            <div>
                <ButtonLink onClick={remove}>
                <BsFillTrashFill />
                Excluir
                </ButtonLink>
            </div>
        </ServiceeCard>
    )
}

