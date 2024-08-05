import React from "react";

export default function UseEffect() {
    const [count,setCount] = React.useState(0)
    React.useEffect(()=>{
        document.title = count;
        setTimeout(()=>{
            console.log('hey');
        },1000);
        return()=>{
        }
    },[count]);
    return (
        <>
            <h2>Use Effect</h2>
            <button className="btn-primary" onClick={()=>{setCount(count + 1)}}>count{count}</button>
        </>
    )
}