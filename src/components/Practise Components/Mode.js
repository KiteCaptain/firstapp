import {useState} from "react"

function Mode() {
    const [darkModeOn, setDarkModeOn] = useState(true)
    const darkMode = <p>Dark mode is on</p>
    const LightMode = <p>Light mode is on</p>
    function toggleMode() {
        let userGuess = prompt('Guess a number')
        let randomNo = Math.floor(Math.random() * 3) + 1
        setDarkModeOn(!darkModeOn)
        alert(`Your guess: ${userGuess}, Computer guess: ${randomNo}`)
    }
    
    return (
        <>
        <button onClick={toggleMode}>Change Mode</button>
        <div>
            <h1>{darkModeOn ? darkMode : LightMode}</h1>
        </div>
        </>
       
    )
}

export default Mode