import {useRef, useState} from 'react';

const CounterApp = () => {
    const [count, setCount] = useState(0) 
    const intervalRef = useRef(null);

    const startTimer = () => {
        intervalRef.current = setInterval(() => {
            setCount((prevCount) => prevCount + 1)
        }, 1000)
    }
    const stopTimer = () => {
        clearInterval(intervalRef.current)
    }
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
        </div>
    )
}

export default CounterApp