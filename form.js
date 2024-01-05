
const Form =({ todos, inputTxt, setToDose, setInputTxt, setStatus}) => {
    const inputTxtHandler = (e) =>{
    
        setInputTxt(e.target.value);
    
        }
        const TodoHn = (e) => {
            e.preventDefault();
        if(inputTxt){
            setToDose([
                ...todos, 
                {Text: inputTxt, completed: false, id : Date.now()}
            ])
            setInputTxt('');
        }else
        {
            alert('please write something')
            
        }
    }

    const StatusHn = (e) =>{
      setStatus(e.target.value); 
    }

    return(
        <form>
            <input value={inputTxt} onChange={inputTxtHandler} type="text" className="todo-input" />
            <button onClick={TodoHn} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={StatusHn} name="todo" className="filter-todo">
                    <option value='all'>All</option>
                    <option value='completed'>Completed</option>
                    <option value='uncompleted'>Uncompleted</option>
                </select>
            </div>
        </form>
    )
}
export default Form;