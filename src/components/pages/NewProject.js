import React from 'react'
import { useNavigate } from 'react-router-dom' 
import Form from '../form/Form'
import { ProjSection, LinhaDiv } from "../Style"

export default function NewProject (){

    //redireciona o usuário para outra página
    const navigate = useNavigate()


    function createPost(project){
        // Initialize cost and services
        project.cost = 0
        project.services = []

        fetch ('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then(resp => resp.json())
        .then((data) => {
            // redirect
            navigate ('/projetos', {state: {message: 'Projeto criado com sucesso!'}})
        })
        .catch(err => console.log(err))
    }

    return (
        <ProjSection>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <LinhaDiv></LinhaDiv>
            <Form handleSubmit={createPost} btnProject="Criar Projeto"/>
        </ProjSection>
    )
}