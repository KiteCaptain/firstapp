import './App.css';
import Heading from './components/Heading';
import Nav from './components/Nav';
import Footer from './components/Footer'
import Promo from './components/Promo';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Mode from './components/Mode';
import Main from './components/Main';
import { useState, useRef } from 'react'

function InputComponent() {
	const [inputText, setText] = useState('Hello')
	function handleChange(e) {
		setText(e.target.value);
	}
	return (
		<>
		<input value={inputText} onChange={handleChange} />
		<p>You typed: {inputText}</p>
		<button onClick={() => setText('hello')}>Reset</button>
		</>
	)
}
function InputFocus() {
	const inputEl = useRef(null)
	const onButtonClick = () => {
		// `current` points to the mounted text input element
		inputEl.current.focus();
	}
	return (
		<>
			<p>useRef practise</p>
			<input ref={inputEl} type="text"/>
			<button onClick={onButtonClick}>Focus the input</button>
		</>
	)
}


function App() {
	return (
		<div className="App">
			<Main msg="Hello world" />
		</div>
	)
}
export default App;