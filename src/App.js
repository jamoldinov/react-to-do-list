import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
const [data, setData] = useState([])
    
    const updateData =(id) =>{
        const newData = data.map((item) => {
            if(item.id === id){
                return{...item, selected: !item.selected}
            }
            return item
        })
        setData(newData)
    }

    const deleteItem = (id)=> {
        const newData = data.filter((item) =>{
            return item.id !== id;
        })
        setData(newData)
    }

    return <div className="App">
        <div className="container">
            <h1 className="title"> 
            Todo List</h1>
            <Form setData={setData}/>
            <TodoList data={data} updateData={updateData} deleteItem={deleteItem}/>
            <hr/>
            <footer>
                <p>Items: {data.length}</p>
                <button className="" onClick={() => {
                    setData([])
                }}>Clear All</button>
            </footer>
        </div>
    </div>;
}

export default App;
