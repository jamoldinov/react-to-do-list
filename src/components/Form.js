import { useState } from "react";
import "./Form.css";

function Form({ setData }) {
    const [todo, setTodo] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        let item ={
            id: Date.now(),
            text: todo,
            selected:false
        }
        setData((prev) =>{
            return [...prev, item]
        })
        setTodo("")
    }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="Text"
        placeholder="Add new list item"
        required
        autoFocus
        autoComplete="off"
        onChange={(e) => {
            setTodo(e.target.value)
        }}
        value ={todo}
      >
        
      </input>
      <button type="submit" className="btn">
        Add
      </button>
      
    </form>
  );
}

export default Form;
