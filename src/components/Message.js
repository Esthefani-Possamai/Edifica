import React from "react";
import { useState, useEffect } from 'react'
import { MsgStyle } from './Style'


export default function Message ({ type, msg}) {
    const [visible, setVisible] = useState(false)

    useEffect (() => {
        if(!msg) {
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)

        return () => clearTimeout(timer)

    }, [msg])

    return (
        <>
        {visible && (
            <MsgStyle>
            {msg}
            </MsgStyle>
        )}
        </>
    )
} 
