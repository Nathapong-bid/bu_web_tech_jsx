import React , {useState} from 'react';

export default function TodoListApp() {
    const [task , settask] = useState("");
    const [list , setlist] = useState([]);


    function addtask() {
        if (task === "") return ;
        setlist([...list,{text:task , done:false}]);
        settask("");
    }

    function toggle(index){
        const new_list = [...list];
        new_list[index].done = !new_list[index].done;
        setlist(new_list);
    }

    return(
        <div>
            <h1>Todo List App</h1>
            <input
                type = 'text'
                placeholder = "Enter a new task..."
                value = {task}
                onChange ={(e) => settask(e.target.value)}
            />

            <button onClick = {addtask}>Add</button>

            <ul>
                {list.map((item , index) => (
                    <li key ={index}>
                        <input
                            type="checkbox"
                            checked={item.done}
                            onChange={() => toggle(index)}
                        />
                        <span
                            style={{
                                textDecoration:item.done ? "line-through" : "none", 
                                opacity : item.done ? 0.5 : 1 ,
                            }}
                        >
                            {item.text}
                        </span>
                    </li>
                ))}      
            </ul>
        </div>
    );
}