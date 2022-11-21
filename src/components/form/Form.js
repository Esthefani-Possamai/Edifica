import React, { useEffect } from "react"
import { useState } from "react"
import Input from "./Input"
import Select from "./Select"
import SubmitButton from "./SubmitButton"

import { FormCriar } from "../Style"

export default function Form ({handleSubmit, btnProject, projectData}) {
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    //utilizar o useEffect para evitar que a página crie um loop de tarefas e projeções
    useEffect(() => {
        fetch("http://localhost:5000/categories", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch(err => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange (e) {
        setProject({...project, [e.target.name]: e.target.value })
    }

    function handleCategory (e) {
        setProject({...project, category:{
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
     })
    }

    return (
    <FormCriar onSubmit={submit}>
        <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto" handleOnChange={handleChange} value={project.name ? project.name : ''} />
        <Input type="number" text="Orçamento total" name="budget" placeholder="Insira o orçamento total" handleOnChange={handleChange} value={project.budget ? project.budget : ''}/>
        <Select name="category_id" text="Selecione a categoria" options={categories} handleOnChange={handleCategory} value={project.category ? project.category.id : ''} />
        <SubmitButton text={btnProject} />
    </FormCriar>
    )
}

