import React, { useState, useEffect} from "react";

function Counter ({ children }){
const [count, setCount] = useState(0);
const [title, setTitle] = useState(children || "Basic Count");

// useEffect(() => {  // componentDidMount
//     console.log("mountit");
// },[]);
// useEffect(() => {  // componentDidUpdate
//     console.log("componentDidUpdate");
// });
useEffect(() => {  // componentDidMount
    console.log("nkarit");
},[count]);

const handleAdd = () => {
        setCount(count + 1)
}
const handleSub = () => {
        setCount(count - 1)
}
return(
    <div>
        <input type="text" value={ title } onChange={(e)=> setTitle(e.target.value)}/><br/>
        <button onClick={ handleAdd }>+</button>
        <h1>Count: {count}</h1>
        {count === 10 && <span>Urra</span>}
        <button onClick={ handleSub }>-</button>
    </div>
    )
}

export default Counter