const todos = [
    {
        id: 123,
        todo: 'Buy milk',
        complete: false
    },
    {
        id: 123,
        todo: 'Walk dogs',
        complete: false
    },
]

function Todo() {
    return(
        <div>
            <h2>Todo List</h2>
            <ul>
                {
                    todos.map((t, ndx) =>
                        <li key={ndx}>{t.todo}</li>
                    )
                }
            </ul>
        </div>
    )
}
export default Todo