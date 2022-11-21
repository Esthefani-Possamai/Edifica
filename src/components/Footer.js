import React from 'react'
import { Link } from 'react-router-dom'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import { Foote } from './Style.js'


export default function Footer () {
    return (
        <Foote>
            <nav className='NavFooter1'>
                <ul>
                    <li><a href='#'><FaFacebook /></a></li>
                    <li><a href='#'><FaInstagram /></a></li>
                    <li><a href='#'><FaLinkedin /></a></li>
                </ul>
            </nav>
            <p>Edifica &copy; 2022</p>
        </Foote>
    )
}