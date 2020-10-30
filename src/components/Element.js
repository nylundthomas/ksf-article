import React from 'react'
import Headline from './Headline'
import Paragraph from './Paragraph'
import Image from './Image'
import Box from './Box'

const Element = ({ item }) => {

    const boxContainer = {
        display: 'flex',
        justifyContent: 'center',
    }

    return (
        <div>

        {item.html &&
            <Paragraph text={item.html}/>
        }

        {item.headline &&
            <Headline text={item.headline} />
        }

        {item.image &&
            <Image item={item.image} />
        }

        {item.box &&
            <div style={boxContainer}>
            <Box box={item.box}/>
            </div>
        }
        </div>
    )

}

export default Element