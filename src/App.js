import './App.css';
import SideBarForm from './components/SideBarForm';
import { useState } from 'react';
import DisplayAllData from './components/DisplayAllData';
import EditForm from './components/EditForm';
import MenuIcon from '@mui/icons-material/Menu'
import { IconButton } from '@mui/material';

function App() {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [allData, setAllData] = useState([])
    const [current, setCurrent] = useState({})

    const newData = (value) => {
        setAllData((oldvalue) => {
            return [{
                id: new Date().getTime(),
                todo: value.todo
            }, ...oldvalue]
        })
    }

    const HandleDelete = (id) => {
        const UpdateData = allData.filter((item) => item.id !== id)
        setAllData(UpdateData)
    }

    const HandleEdit = (value) => {
        setCurrent({ ...value })
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
        const UpdateData = allData.map((item) => {
            return item.id === current.id ? current : item
        })
        setAllData(UpdateData)
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
            <div className='empty'>
                {allData.length > 0 ? ' ' : <h1>you don't have any to do</h1>}
            </div>
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
                    newData={newData}
                    isDrawerOpen={isDrawerOpen}
                    setIsDrawerOpen={setIsDrawerOpen} />
            }
            <DisplayAllData
                allData={allData}
                handleDelete={HandleDelete}
                handleEdit={HandleEdit} />
        </>
    );
}

export default App;
