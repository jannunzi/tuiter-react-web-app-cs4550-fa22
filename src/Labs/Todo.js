import {useState} from "react";

const todosArray = [
  {
    id: 123,
    todo: 'Buy milk',
    complete: false
  },
  {
    id: 234,
    todo: 'Walk dogs',
    complete: false
  },
]

function Todo() {

  const [todos, setTodos] = useState(todosArray);
  const [title, setTitle] = useState('New Todo')

  const addTodo = () => {
    const newTodos = [
      ...todos,
      {
        id: (new Date()).getTime(),
        todo: title,
        complete: false
      }
    ];
    setTodos(newTodos);
  }

  const deleteTodo = (todo) => {
    console.log(todo)
    const newTodos = todos.filter((td) =>
      td === todo ? false : true)
    setTodos(newTodos)
  }
  return (
    <div>
      <h2>Todo List</h2>
      <input value={title}
             onChange={(e) => {
               setTitle(e.target.value)
             }}
             className="form-control"/>
      <button onClick={() => {
        addTodo();
      }} className="btn btn-primary">
        Add Todo
      </button>
      <ul className="list-group">
        {
          todos.map((t, ndx) =>
            <li className="list-group-item"
                key={ndx}>
              <button onClick={() => {
                deleteTodo(t)
              }} className="btn btn-danger">Delete</button>
              {t.todo}
            </li>
          )
        }
      </ul>
      <h3>{title}</h3>
    </div>
  )
}

export default Todo