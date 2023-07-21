import './App.css';
import { useState, useRef, useReducer } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import ReactPlayer from 'react-player/youtube';
import Heading from './components/Heading';
import Nav from './components/Nav';
import Footer from './components/Footer'
import Promo from './components/Promo';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Mode from './components/Mode';
import Main from './components/Main';
import Homepage from './components/Homepage';
import Aboutme from './components/Aboutme';
import Calculator from './components/Calculator';
import CounterApp from './components/TimerApp';
import DayDisplay from './components/DayDisplay';
import lightbulb from './assets/images/light-bulb.jpg'

// function InputComponent() {
// 	const [inputText, setText] = useState('Hello')
// 	function handleChange(e) {
// 		setText(e.target.value);
// 	}
// 	return (
// 		<>
// 		<input value={inputText} onChange={handleChange} />
// 		<p>You typed: {inputText}</p>
// 		<button onClick={() => setText('hello')}>Reset</button>
// 		</>
// 	)
// }
// function InputFocus() {
// 	const inputEl = useRef(null)
// 	const onButtonClick = () => {
// 		// `current` points to the mounted text input element
// 		inputEl.current.focus();
// 	}
// 	return (
// 		<>
// 			<p>useRef practise</p>
// 			<input ref={inputEl} type="text"/>
// 			<button onClick={onButtonClick}>Focus the input</button>
// 		</>
// 	)
// }
// function AudioPlayer() {
// 	const bird1 = new Audio(
// 		"https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3" 
// 	); 
	
// 	const bird2 = new Audio( 
// 		"https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3" 
// 	);

// 	function toggle1() {
// 		if (bird1.paused) {
// 			bird1.play()
// 		} else {
// 			bird1.pause()
// 		}
// 	}
// 	function toggle2() {
// 		if (bird2.paused) {
// 			bird2.play()
// 		} else {
// 			bird2.pause()
// 		}
// 	}

// 	return (
// 		<>
// 		<button className='btn btn-secondary' onClick={toggle1}>Caspian Tern 1</button>
// 		<button className='btn btn-secondary' onClick={toggle2}>Caspian Tern 2</button>
// 		</>
// 	)
// }

// function App() {
// 	const randomImageUrl = "https://images.pexels.com/photos/1462011/pexels-photo-1462011.jpeg?auto=compress&cs=tinysrgb&w=600"
// 	// const day = new Date().getDay();
// 	return (
// 		// <div className="App">
// 		// 	<nav>	
// 		// 		<Link to="/" className="nav-item">Home</Link>
// 		// 		<Link to="/about-me" className="nav-item">AboutMe</Link>
// 		// 	</nav>
// 		// 	<Routes>
// 		// 		<Route path='/' element={<Homepage />}/>
// 		// 		<Route path='/about-me' element={<Aboutme />}/>
// 		// 	</Routes>
// 		// 	<div>
// 		// 	<DayDisplay />
// 		// 	</div>
// 		// 	<div>
// 		// 		<AudioPlayer />
// 		// 	</div>
// 		// 	<div className="mb-5 mt-5">
// 		// 		<ReactPlayer 
// 		// 			style={{marginLeft: 'auto', marginRight: 'auto'}} 
// 		// 			url='https://www.youtube.com/watch?v=h_ILdk4gdZI&pp=ygUQZGltYXRpcyB0d28gd2F5cw%3D%3D' 
// 		// 			playing={true}
// 		// 			volume={0.1}
// 		// 		/>
// 		// 	</div>
// 		// 	<div>
// 		// 		< img
// 		// 			height={300}
// 		// 			src={lightbulb} 
// 		// 			alt="A light bulb"
// 		// 		/>
// 		// 		< img
// 		// 			height={300}
// 		// 			src={randomImageUrl} 
// 		// 			alt="A light bulb"
// 		// 		/>
// 		// 		< img
// 		// 			height={300}
// 		// 			src={require("./assets/images/chain-birds.jpg")} 
// 		// 			alt="A light bulb"
// 		// 		/>
// 		// 	</div>

// 		// </div>
// 		<div className='App'>
// 			<CounterApp />
// 			<Calculator />
// 		</div>
// 	)
// }
const data = [
	{
		id: "1",
		title: "Tiramisu",
		description: "Best tiramisu in town",
		image: "some link 1",
		price: "$5.00",
	},
	{
		id: "1",
		title: "Lemon ice cream",
		description: "Best Lemon ice cream in town",
		image: "some link 2",
		price: "$54.00",
	},
	{
		id: "1",
		title: "Milk chocolate",
		description: "Best milk chocolate in town",
		image: "some link 3",
		price: "$34.00",
	},
]

const topDesserts = data.map(dessert => {
	return {
		content: `${dessert.title} - ${dessert.description}`,
		price: dessert.price,
	}
})

const ToDo = props => (
	<tr>
		<td><label>{props.id}</label></td>
		<td>
			<input/>
		</td>
		<td><label>{props.createdAt}</label></td>
	</tr>
)


function App() { 
	const [todos, setTodos] = useState([{
		id: 'todo1',
		createdAt: '18:00'
	}, {
		id: 'todo2',
		createdAt: '18:30'
	}, {
		id: 'todo3',
		createdAt: '19:00'
	}
	])

	const rerverseOrder = () => {
		setTodos([...todos].reverse())
	}

	const listItems = data.map(dessert => {
		const itemText = `${dessert.title} - ${dessert.price}`
		return <li>{itemText}</li>
	})
	return (
			<div>
				<button onClick={rerverseOrder}>Reverse</button>
				<table>
					<tbody>
						{todos.map((todo, index) => (<ToDo key={todo.id} id={todo.id} createdAt={todo.createdAt}/>))}
					</tbody>
				</table>
			</div>
		)
} 

export default App;