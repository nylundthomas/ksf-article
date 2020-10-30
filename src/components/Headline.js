import React from 'react'

const Headline = ({ text }) => {

    const headLineStyle = {
        width: '100%',
        textAlign: 'left',
        margin: '20px 0px 0px 0px'
    }

    return (
        <h4 style={headLineStyle}>{text.toUpperCase()}</h4>
    )
}

export default Headline