import { createSlice } from "@reduxjs/toolkit";

const initialTodoState = {
    items: [],
} 

const TodoSlice = createSlice({
    name:'todo',
    initialState: initialTodoState,
    reducers:{
        addTodo(state,action){
            state.items.push({
                id: new Date().getTime(),
                todo: action.payload.todo
            })  
        },
        RemoveTodo(state,action){
            const id = action.payload;
            state.items = state.items.filter((item) => item.id !== id)
        },
        EditTodo(state,action){
            const current = action.payload
            const UpdateData =  state.items.map((item) => {
                return item.id === current.id ? current : item
            })
            state.items = UpdateData
        }
    }
})

export const TodoAction = TodoSlice.actions;
export default TodoSlice;


