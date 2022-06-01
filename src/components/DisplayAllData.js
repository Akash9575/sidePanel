import React from 'react'
import Item from './Item'

const DisplayAllData = (props) => {
    return (
        <>
            {props.allData.map((item) =>
                <Item
                    id={item.id}
                    key={item.id}
                    todo={item.todo}
                    handleDelete={props.handleDelete}
                    handleEdit={props.handleEdit}
                />
            )}
        </>
    )
}

export default DisplayAllData