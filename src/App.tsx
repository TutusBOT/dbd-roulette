import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Realms from "./pages/Realms";
import ErrorPage from "./pages/ErrorPage";
import Killers from "./pages/Killers";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/realms" element={<Realms />} />
				<Route path="/killers" element={<Killers />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</Router>
	);
}

export default App;
