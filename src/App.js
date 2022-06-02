import './App.css';
import SideBarForm from './components/SideBarForm';
import DisplayAllData from './components/DisplayAllData';
import EditForm from './components/EditForm';
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { TodoAction } from './store/Todoslice';

function App() {

    const dispatch = useDispatch()
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [current, setCurrent] = useState({})

    const HandleEdit = (id, todo) => {
        setCurrent({ 
            id,
            todo
         })
        setIsEditing(true)
        setIsDrawerOpen(true)
    }

    const HandleEditInput = (e) => {
        setCurrent((oldvalue) => {
            return { ...oldvalue, [e.target.name]: e.target.value }
        })   
    }

    const HandleEditSubmit = (e) => {
        e.preventDefault();
        dispatch(TodoAction.EditTodo(current))
        setIsEditing(false);
        setIsDrawerOpen(false)
    }

    const HandleCancle = (e) => {
        setIsDrawerOpen(false)
        setIsEditing(false)
    }

    return (
        <>
            <IconButton size='larger' onClick={() => setIsDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>
            {isEditing ?
                <EditForm
                    current={current}
                    isDrawerOpen={isDrawerOpen}
                    setIsDrawerOpen={setIsDrawerOpen}
                    handleEditInput={HandleEditInput}
                    handleEditSubmit={HandleEditSubmit}
                    handleCancle={HandleCancle} />
                :
                <SideBarForm
                    isDrawerOpen={isDrawerOpen}
                    setIsDrawerOpen={setIsDrawerOpen} />
            }
            <DisplayAllData
                handleEdit={HandleEdit}
                 />
        </>
    );
}

export default App;
