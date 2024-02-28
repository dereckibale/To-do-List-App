import React from 'react'
import Item from './Item'
const ItemList = ({ items, handleDelete, handleCheck }) => {
  return (
    <ul>
      {items.map(
      (item)=>(
          <Item 
          key={item.id}
          item={item}
          items={items}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
          />
          )    
      )}
    </ul>
  )
}

export default ItemList