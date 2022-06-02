import React from 'react'
import Item from './Item'
import { useSelector } from 'react-redux'

const DisplayAllData = (props) => {

   const allitems = useSelector(state => state.todo.items)

    return (
        <>
            {allitems.map((item) =>
                   <Item
                    id={item.id}
                    key={item.id}
                    todo={item.todo}
                    handleEdit={props.handleEdit}
                />
            )}
        </>
    )
}

export default DisplayAllData