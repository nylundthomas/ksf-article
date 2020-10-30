import React from 'react'
import parse from 'html-react-parser'

const Paragraph = ({ text }) => {
    
    return (
    <p>{parse(text)}</p>
    )
}

export default Paragraph