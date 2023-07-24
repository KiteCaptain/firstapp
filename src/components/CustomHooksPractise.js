import { useState } from 'react';
import useConsoleLog from './useConsoleLog';


export default function CustomHooksPractise() {
    const [count, setCount] = useState(9)
    useConsoleLog(count) 
    function increment() {
        setCount(prevCount => prevCount + 37)
    }
    return (
        <>
            <h1>Custom Hooks Practise</h1>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Plus 37</button>
        </>
    )
}