import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Prestation from "./Components/Prestation/Prestation";
import Private from "./Components/Private/Private";
import Dashboard from "./Components/Private/Dashboard/Dashboard";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/NotFound/NotFound";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/prestation/:title" element={<Prestation />} />
				<Route path="/private" element={<Private />}>
					<Route path="/private/dashboard" element={<Dashboard />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
