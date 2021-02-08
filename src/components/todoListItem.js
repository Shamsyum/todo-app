import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../store/todoSlice';

function TodoListItem({ todo }) {
    const dispatch = useDispatch();
    const { text, completed } = todo;

    const onDelete = () => {
        console.log("Delete ID: " + todo.id)
        return dispatch(deleteTodo(todo.id));
    }

    const handleCompletedChanged = () => {
        dispatch(toggleTodo(todo.id));
    }

    return (
        <div>
            <li>
                <input
                    className="toggle"
                    type="checkbox"
                    checked={completed}
                    onChange={handleCompletedChanged}
                />

                {text} 
                <button onClick={onDelete}>❌</button>

            </li>
        </div>
    );
}

export default TodoListItem;