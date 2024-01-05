 const Todo = ({Text, todo, todos, setToDose}) => {
    const DelHn = () =>{
        setToDose(todos.filter((el)=> el.id !== todo.id))
    }
    const completeHn = () =>{
        setToDose(todos.map((item)=> {
            if(item.id === todo.id){
                return{
                    ...item, completed : !item.completed
                }

            }
            return item;
        }))
    }
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{Text}</li>
            <button onClick={completeHn} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={DelHn} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>

        </div>
    )
 }

 export default Todo 