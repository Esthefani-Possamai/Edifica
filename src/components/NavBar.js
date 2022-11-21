import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Nav } from './Style.js'


export default function NavBar () {
    return (
        <Header>
            <Link to="/"><img src="https://img.icons8.com/external-outline-lafs/64/000000/external-services-costs-cloud-storage-outline-lafs.png"/></Link>
            <Nav>
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Projetos">Projetos</Link></li>
                <li><Link to="/Contato">Contato</Link></li>
                </ul>
            </Nav>
        </Header>
    )
}