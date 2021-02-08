import { createSlice } from "@reduxjs/toolkit";

function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1;
}
const todoSlice = createSlice({
    name: "todoSlice",
    initialState: [
        { id: 0, text: 'Learn react', completed: true },
        { id: 1, text: 'Learn redux', completed: false },
        { id: 2, text: 'Create an app', completed: false },
    ],
    reducers: {
        addTodo: (state, action) => {
            state.unshift({
                id: nextTodoId(state),
                text: action.payload,
                completed: false
            });
        },

        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        },

        toggleTodo: (state, action) => {
            state.map(todo => {
                if (todo.id === action.payload) {
                    return todo.completed = !todo.completed;
                }
                return todo;
            })
        }
    }
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;