import React from 'react'
import parse from 'html-react-parser'

const Paragraph = ({ text }) => {
    
    const paraStyle = {
            textAlign: 'left',
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: 300,
            fontFamily: 'Roboto',
        
    }

    return (
    <p style={paraStyle}>{parse(text)}</p>
    )
}

export default Paragraph