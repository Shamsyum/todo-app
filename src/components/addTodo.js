import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { addTodo } from '../store/todoSlice';

const AddTodo = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState("");
    const handleKeyDown = e => {
        const trimmedText = e.target.value
        if (e.which === 13 && trimmedText) {
            dispatch(addTodo(text))
            setText('')
        }

    }
    const handleOnClick = () => {
        if (text) {
            dispatch(addTodo(text));
            setText('')
        }
    }

    return (
        <div>
            <input
                value={text}
                type="text"
                placeholder="What needs to be done?"
                onChange={e => setText(e.target.value)}
                onKeyDown={handleKeyDown} />

            <button onClick={handleOnClick}>Add Item</button>
        </div>
    );
}

export default AddTodo;