import React from 'react'
import './Aa.scss'

const Aa = ({ num }) => {
    return (
        <>
            <a href={`#hero${num}`}>Section {num} </a>
        </>
    )
}

export default Aa