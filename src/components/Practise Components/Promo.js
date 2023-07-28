import { useState } from "react";

function Promo(props) {
    const [counter, setCounter] = useState(parseInt(props.initial));
    const stile = {
        color: "tomato",
        fontSize: "40px",
        fontWeight: "bold"
    }
    const addTwenty = () => {
        setCounter(counter + (Math.floor(Math.random() * 10)))
    }
    const resetCounter = () => {
        setCounter(0)
    }
    return (
        <div className="promo-section">
            <div>
                <h1 style={stile}>Don't miss out on this week's awesome deals</h1>
                <h2>Subscribe to my Newsletter and get all the shop items at {Math.random() >= 0.5 ? <p>Big Dicount</p> : <p>Small Discount</p>} </h2>
                <h1>{counter}</h1>            
                <button onClick={addTwenty}>Add 20</button>
                <button onClick={resetCounter}>Reset</button>
            </div>
        </div>
    )
}

export default Promo