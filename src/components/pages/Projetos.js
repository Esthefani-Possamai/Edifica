import React from 'react'
import Message from '../Message'
import Loading from '../Loading'
import LinkButton from '../LinkButton'
import ProjectCard from '../ProjectCard'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Projeto, OrganizaProj, ProjetosAll } from "../Style"


export default function Projetos () {

    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState (false)

    const location = useLocation ()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/projects', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(resp => resp.json())
            .then(data => {
                setProjects(data)
                setRemoveLoading(true)
            })
            .catch(err => console.log(err))
        }, 1000)
    }, [])


    function removeProject(id) {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(resp => resp.json())
        .then(data => {
            setProjects(projects.filter((project) => project.id !== id))
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <ProjetosAll>
                <h2>Meus Projetos realizados</h2>
                <LinkButton to="/NewProject" text="Criar Projeto" />
            </ProjetosAll>
            {message && <Message type="success" msg={message}/>}
            <OrganizaProj>
                {projects.length > 0 && 
                    projects.map((project) => 
                    <Projeto>
                    <ProjectCard id={project.id} 
                    name={project.name} 
                    budget={project.budget} 
                    category={project?.category?.name} 
                    key={project.id} 
                    handleRemove={removeProject}
                    /> </Projeto>)} 
                    {!removeLoading && <Loading/>}
                    {removeLoading && projects.length === 0 && (
                        <p>No momento, não há produtos a serem apresentados para o cliente</p>
                    )}
            </OrganizaProj>
        </div>
    )
}