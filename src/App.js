import './App.css';
import Heading from './Heading';
import Nav from './components/Nav';
import Footer from './components/Footer'
import Promo from './components/Promo';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Mode from './components/Mode';

function App() {
	return (
		<div className="App">
			<Heading name="Kite Eugine"/>
			<Mode />
			<Nav />
			<Promo initial="0"/>
			<Intro1 />
			<Intro2 />
			<Intro3 />
			<Footer />
		</div>
		
	)
}
export default App;