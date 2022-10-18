import {useState} from "react";

const LocalText = () => {
  const [text, setText] = useState('Initial Text');
  const [bio, setBio] = useState('Lego enthusiast');
  return (
    <>
      <h3>Local text</h3>
      <h4>{text}</h4>
      <input value={text}
             className="form-control"
             onChange={(event) => setText(event.target.value)}
      />
      <textarea
        className="form-control"
        value={bio}
        onChange={(e) => setBio(e.target.value)}></textarea>
      <h5>{bio}</h5>
    </>
  )
}
export default LocalText;