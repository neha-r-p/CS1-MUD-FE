import React from 'react'

export default function Item(props) {
    return (
        <ul>
           <li>{props.item.item_name}</li> 
        </ul>
    )
}
