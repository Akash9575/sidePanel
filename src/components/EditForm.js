import React from 'react'
import { Drawer, Box, Button } from '@mui/material'
import './EditForm.css'

const EditForm = (props) => {

    return (
        <>
            <Drawer anchor='left' open={props.isDrawerOpen} onClose={() => props.setIsDrawerOpen(false)}>
                <Box width='250px' role='presentation'>
                    <form onSubmit={props.handleEditSubmit} className='Form'>
                        <input className='input' type="text" name='todo' value={props.current.todo} onChange={props.handleEditInput} />
                        <Box m={2}>
                            <Button variant='contained' className='button' type="submit"> Edit </Button>
                            <Button variant='contained' className='button' type="submit" color='error' onClick={() => props.handleCancle()}> Cancle </Button>
                        </Box>
                    </form>
                </Box>
            </Drawer>
        </>
    )
}

export default EditForm