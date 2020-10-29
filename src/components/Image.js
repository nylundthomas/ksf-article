import React from 'react'

const Image = (item) => {
    const {alignment, byline, caption, thumb, url} = item.item

    return (
        <img src={url} alt=""/>
    )
}

export default Image