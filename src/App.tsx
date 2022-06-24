import "./index.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Realms from "./pages/Realms";
import ErrorPage from "./pages/ErrorPage";
import Killers from "./pages/Killers";
import Perks from "./pages/Perks";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/realms" element={<Realms />} />
				<Route path="/killers" element={<Killers />} />
				<Route path="/perks" element={<Perks />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</Router>
	);
}

export default App;
