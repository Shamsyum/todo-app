import { useSelector } from 'react-redux';
import TodoListItem from './todoListItem';

const TodoList = () => {
    const todos = useSelector(state => state.todoReducer)
    const filter = useSelector((state) => state.filterReducer.status);
    const getVisibleTodos = (todos, filter) => {
        switch (filter) {
            case 'All':
                return todos;
            case 'Active':
                return todos.filter((todo) => !todo.completed);
            case 'Completed':
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    };
    const visibleTodos = getVisibleTodos(todos, filter);

    const renderedListItems = visibleTodos.map((todo) => {
        return <TodoListItem key={todo.id} todo={todo} />
    })
    return (
        <div>
            {renderedListItems}
        </div>
    );
}

export default TodoList;