import React from 'react'
import LinkButton from '../LinkButton'
import { SectionHome, Title } from '../Style'
import style from '../../index.css'

export default function Home () {
    return (
        <SectionHome>
            <Title>Bem-vindo ao Edifica</Title>
            <p>Organize os orçamentos da sua edificação desde o planejamento até a finalização!</p>
            <LinkButton className="Btn" to="/NewProject" text="Criar Projeto" />
        </SectionHome>
    )
}