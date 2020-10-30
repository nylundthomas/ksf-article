import React, { useState } from 'react'
import parse from 'html-react-parser'

const Box = ({ box }) => {
    const [btnTxt, setBtnTxt] = useState('Öppna ruta')
    const [faktaContent, setFaktaContent] = useState(null)
    const { headline, content, title } = box

    const h3Style = {
        backgroundColor: '#f07e26',
        width: '100%',
        padding: '5px 0px',
        margin: 0,
        textAlign: 'center',
        fontFamily: 'Duplex Serfif Web, Roboto',
    }

    const containerStyle = {
        backgroundColor: '#f7f5f3',
        borderLeftStyle: 'dashed',
        borderTopStyle: 'solid',
        borderRightStyle: 'dashed',
        borderColor: '#f07e26',
        display: 'flex',
        flexDirection: 'column',
        width: '70%',
        justifyContent: 'center',
    }

    const buttonStyle = {
        margin:'5px 0px 0px 0px',
        width: '100%',
    }

    const titleStyle = {
        margin: '5px 2px',
        fontWeight: 'bold',
        fontFamily: 'Duplex Serfif Web, Roboto',
    }

    const paraStyle = {
        margin: '5px 0px 5px 5px'
    }

    const handleClick = btnTxt => {
        if(btnTxt === 'Öppna ruta') {
            setFaktaContent(content)
            setBtnTxt('Stäng ruta')
        }

        if(btnTxt === 'Stäng ruta') {
            setFaktaContent(null)
            setBtnTxt('Öppna ruta')
        }
    }

    return (
        <div style={containerStyle}>
            <h3 style={h3Style}>{headline.toUpperCase()}</h3>
            <p style={titleStyle}>{title}</p>
            {faktaContent &&
                content.map((item, idx) => <p key={idx} style={paraStyle}>{parse(item)}</p>)
            }
            <button onClick={() => handleClick(btnTxt)} style={buttonStyle}>{btnTxt}</button>
        </div>
    )
}

export default Box