import './App.css';
import { useState, useRef, useReducer, useEffect} from 'react'
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
import FeadbackForm from './components/FeedbackForm';
import { UserProvider, useUser } from './UserContext';
import { ThemeProvider, useTheme } from './ThemeProvider';
import Switch from './Switch';
// data fetching
import RandomUser from './components/RandomUser';



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
// React Context
const Title = ({children}) => {
	const {theme} = useTheme()
	return (
		<h2
			style={{
				color: theme === "light" ? "black" : "white"
			}}
			>
			{children}
		</h2>
	)
}
const Paragraph = ({children}) => {
	const {theme} = useTheme()
	return (
		<h2
			style={{
				color: theme === "light" ? "black" : "white"
			}}
			>
			{children}
		</h2>
	)
}
const Content = () => {
	return (
		<div>
			<Paragraph>
			We are a pizza loving family. And for years, I searched and searched and
        searched for the perfect pizza dough recipe. I tried dozens, or more.
        And while some were good, none of them were that recipe that would
        make me stop trying all of the others.
			</Paragraph>
		</div>
	)
}
const Header = () => {
	return (
		<header>
			<Title>Little Lemon 🍕</Title>
			<Switch />
		</header>
	)
}
const Page = () => {
	return (
		<div className="Page">
			<Title>When it comes to dough</Title>
			<Content />
		</div>
	)
}
// useEffect Hook
const MenuPage = (props) => {
	const [data, setData] = useState([])
	useEffect(() => {
		document.title = 'Little lemon'
	}, [])
	useEffect(() => {
		fetch(`http://127.0.0.1:8000/little-lemon/menu-items`)
		.then(response => response.json())
		.then(json => setData(json))
	})
}
	// Effect with cleanup
function LittleLemonChat(props) {
	const [status, setStatus] = useState('offline')
	useEffect(() => {
		// LemonChat.subscribeToMessages(props.chatId, () => setStatus('online'))
		return () => {
			setStatus('offline')
			// LemonChat.unsubscribeFromMessages(props.chatId)
		}
	}, [])
}


function App() { 
	const [toggle, setToggle] = useState(false)

	const clickHandler = () => {
		setToggle(!toggle)
	}

	useEffect(() => {
		document.title = toggle ? "Wecome to Littlelemon" : "Using the useEffect hook"
	}, )
	// DATA FETCHING 
	const [btcData, setBtcData] = useState({});
	useEffect(() => {
		fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
		.then((response) => response.json())
		.then((jsonData) => setBtcData(jsonData.bpi.USD))
		.catch((error) => console.log(error))
	}, [])

	return (
			// <div className="App"
			// // 	style={{
			// // 		backgroundColor: theme === "light" ? "white": "black",
			// // 	}}
			// // >
			// // 	<Header />
			// // 	<Page />
			// >
			// </div>

			<div className='App'>
				<div>
					<h1>Using the useEffect hook</h1>
					<button onClick={clickHandler}>
						Toggle message
					</button>
					{toggle && <h2>Welcom to LittleLemonChat</h2>}
				</div>
				<RandomUser />
				<div>
					<h1>Current BTC/USD data</h1>
					<p>Code: {btcData.code}</p>
					<p>Symbol: {btcData.symbol}</p>
					<p>Rate: {btcData.rate}</p>
					<p>Description: {btcData.description}</p>
					<p>Rate Float: {btcData.rate_float}</p>
				</div>
			</div>
		)
} 
function Root() {
	<ThemeProvider>
				<App />
	</ThemeProvider>
}
export default App;