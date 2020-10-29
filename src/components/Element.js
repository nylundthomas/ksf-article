import React from 'react'
import Headline from './Headline'
import Paragraph from './Paragraph'
import Image from './Image'

const Element = ({ item }) => {
    console.log(item)

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
            null
        }
        </div>
    )

}

export default Element