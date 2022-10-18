import {useState} from "react";

const LocalBooleans = () => {
  const [title, setTitle] = useState('Initial title');
  const [post, setPost] = useState('Initial post');
  const [show, setShow] = useState(true);
  const [yes, setYes] = useState(true);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState('Jose');
  const [profile, setProfile] = useState({
    firstName: 'Alice', lastName: 'Wonderland'
  })
  const [todos, setTodos] = useState([
    {id: 123, do: 'Eat less sugar', done: true},
    {id: 234, do: 'Eat lest bread', done: false},
  ])
  const setFirstName = (e) => {
    setProfile({...profile, firstName: e.target.value})
  }
  return (
    <>
      <h3>Local Booleans</h3>
      <h4>{title}</h4>
      <input value={title} onChange={e => setTitle(e.target.value)}/>
      <textarea value={post} onChange={e => setPost(e.target.value)}></textarea>
      <h4>Editing Arrays</h4>
      <ul className="list-group">
        <li className="list-group-item">
          <input className="form-control"/>
        </li>
        {
          todos.map(todo => <li className="list-group-item">
            <input type="checkbox" checked={todo.done}/>
            {todo.do}
            <button className="btn btn-danger float-end">Delete</button>
          </li> )
        }
      </ul>
      <h4>Editing Objects</h4>
      <label>First Name</label>
      <input id="fName" value={profile.firstName} onChange={setFirstName}/>
      <label>Last Name</label>
      <input id="fName" value={profile.lastName} onChange={(e) => setProfile({...profile, lastName: e.target.value})}/>
      <h4>Editing</h4>
      {
        !editing && <>
          <label>{name}</label>
        <button onClick={() => setEditing(true)}>Edit</button>
        </>
      }
      {
        editing && <>
          <input value={name} onChange={(e) => setName(e.target.value)}/>
          <button onClick={() => setEditing(false)}>Done</button>
        </>
      }

      <h4>Stuff</h4>
      <label>Maried:</label>
      <label htmlFor="yes-married">Yes</label>
      <input
        onChange={(e) => setYes(true)}
        id="yes-married"
        type="radio"
        name="maried"
        checked={yes}/>
      <label htmlFor="not-married">No</label>
      <input
        onChange={(e) => setYes(false)}
        id="not-married"
        type="radio"
        name="maried"
        checked={!yes}/>
      <label htmlFor="show">Show</label>
      <input
        id="show"
        type="checkbox"
        checked={show}
        onChange={(e) => setShow(e.target.checked)}
      />
      {
        show && <>
          Starship is a fully-reusable, super-heavy-lift launch vehicle being developed by SpaceX, an American aerospace
          manufacturer
        </>
      }
    </>
  )
}
export default LocalBooleans