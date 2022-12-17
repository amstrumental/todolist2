import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from "./components/header"
import { Form } from './components/form';
import {TodosList} from './components/TodosList';

function App() {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([{title: "Buy a Car", id: "12334", completed:true}]);
  return (
    <div className="container">
      <div className='app-wrapper'>
        <div>
          <Header />
        </div>
        <div>
          <Form 
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          />
        </div>
        <div>
          <TodosList listOfTodos={todos} newSetTodos={setTodos}/>
        </div>
      </div>
      
    </div>
  );
}

export default App;

