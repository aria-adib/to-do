import Todo from "./todo";
import React from "react";
const ToDoList =({todos, setToDose, filteredTd}) =>{
    return(
        <div className="todo-container">
            <ul className="todo-list">
                 {
                       filteredTd.map(
                        (todo)=>(
                            <Todo
                             Text={todo.Text}
                              key={todo.id} 
                              todo={todo} todos={todos}
                              setToDose={setToDose}/>
                        )
                    )
                 }
            </ul>
        </div>
    )
}
export default ToDoList;