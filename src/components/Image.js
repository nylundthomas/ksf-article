import React from 'react'

const Image = ({ item }) => {
    const { byline, caption, url } = item

    const imageContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        margin: 0,
        width: '100%',
        alignItems: 'center'
    }

    const imageStyle = {
        width: '100%',
    }

    const textContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        width: '99%',
        margin: '0',
        justifyContent: 'left',
    }

    const textStyle = {
        margin: '3px 10px 0px 0px',
        fontSize: 13,
    }

    return (
        <div style={imageContainerStyle}>
            <img style={imageStyle} src={`${url}&width=800&height=600`} alt="" />
            <div style={textContainerStyle}>
                <p style={textStyle}>{caption} <strong>BILD: {byline}</strong></p>
            </div>
        </div>
    )
}

export default Image