import React from "react";

export const TodosList = (props) => {
  const {listOfTodos, newSetTodos}=props
  // console.log(listOfTodos)
  const handleDelete = (todo) => {
    const {id, title} = todo
    console.log(id, title);
    newSetTodos(listOfTodos.filter((todo2) => todo2.id !== id))
  }
  return (
    <div>
      {listOfTodos.map((todo) => {
        console.log(todo)
        return (
          <li className="list-item" key={todo.id} >
            <input type="text" value={todo.title} className="list" onChange={(event) => event.preventDefault()} />     
            <div>
              <button className="button-complete task-button">
                <i className="fa fa-check-circle"/>
              </button>
              <button className="button-edit task-button">
                <i className="fa fa-edit"/>
              </button>
              <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
                <i className="fa fa-trash"/>
              </button>                 
            </div>       
          </li>
        )
       })}
    </div>
  )
}

