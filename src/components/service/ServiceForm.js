import React from "react";
import { useState } from "react"
import Input from "../form/Input"
import SubmitButton from "../form/SubmitButton";
import { FormService } from "../Style"

export default function ServiceForm ({handleSubmit, btnProject, projectData}) {

    const [service, setService] = useState({})

    function submit (e) {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e){
    setService({...service, [e.target.name]: e.target.value})
    }

    return(
        <FormService onSubmit={submit}>
            <Input 
            type="text"
            text="Nome do serviço" 
            name="name"
            placeholder="Insira o nome do serviço"
            handleOnChange={handleChange}
            />
            <Input 
            type="number"
            text="Custo do serviço" 
            name="cost"
            placeholder="Insira o valor total "
            handleOnChange={handleChange}
            />
            <Input
            type="textarea"
            text="Descrição do serviço" 
            name="description"
            placeholder="Descreva o serviço"
            handleOnChange={handleChange}
            />
            
            <span>
                <SubmitButton text={btnProject} />
            </span>
            
        </FormService>
    )
}