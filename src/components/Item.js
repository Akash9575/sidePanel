import React from 'react'
import { Button } from '@mui/material'
import './Item.css'

const Item = (props) => {

    const Delete = (e) => {
        props.handleDelete(props.id)
    }

    const Edit = (e) => {
        props.handleEdit(props)
    }

    return (
        <>
            <div className='item'>
                <h2>{props.todo}</h2>
                <Button variant='contained' className='button' color='secondary' onClick={Edit} >Edit</Button>
                <Button variant='contained' className='button' color='error' onClick={Delete}>Delete</Button>
            </div>
        </>
    )
}

export default Item