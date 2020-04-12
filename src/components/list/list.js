import React from 'react'

const List = ({ items }) => (
    <ul>
        {items.map(item => <li key={item.label}></li>)}
    </ul>
)

export default List