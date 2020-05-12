// write your CatList component here
import React from "react"

const CatList = (props) => {
    console.log(props)
    return (
        <div>
            <ul>
                {props.catPics.map(catPic => {
                    return <li key={catPic.id}><img src={catPic.url} alt={catPic.id} /></li>
                })}
            </ul>
        </div>
    )
}

export default CatList