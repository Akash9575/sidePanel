import React, { useState } from 'react'
import { Drawer, Box, Button } from '@mui/material'
import './EditForm.css'

const SideBarForm = (props) => {

    const [data, setData] = useState({
        todo: ''
    })

    const HandleInput = (e) => {
        setData((oldvalue) => {
            return { ...oldvalue, [e.target.name]: e.target.value }
        })
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        props.newData(data)
        props.setIsDrawerOpen(false);
        setData({
            todo: ''
        })
    }

    return (
        <>
            <Drawer anchor='left' open={props.isDrawerOpen} onClose={() => props.setIsDrawerOpen(false)}>
                <Box p={2} width='250px'>
                    <form onSubmit={HandleSubmit} className="Form">
                        <input type="text" name='todo' className='input' value={data.todo} onChange={HandleInput} />
                        <Button variant='contained' className='button' type="submit"> Submit </Button>
                    </form>
                </Box>
            </Drawer>
        </>
    )
}

export default SideBarForm