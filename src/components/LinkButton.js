
import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonLink } from './Style.js'

export default function LinkButton ({to, text}) {
    return(
        <Link to={to}>
            <ButtonLink>{text}</ButtonLink>
        </Link>
    )
}