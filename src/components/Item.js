import React from 'react'
import { Button } from '@mui/material'
import './Item.css'
import { useDispatch } from 'react-redux'
import { TodoAction } from '../store/Todoslice'

const Item = (props) => {

    const dispatch = useDispatch();

    const Delete = (e) => {
        dispatch(TodoAction.RemoveTodo(props.id))
    }

    const Edit = (e) => {
        const {id , todo} = props
        props.handleEdit(id , todo)
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