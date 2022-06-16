import Button from "./components/Button";
import "./index.css";

function App() {
	return (
		<>
			<Button body="SURVIVOR" handleClick={() => console.log("d")} />;
			<Button body="KILLER" handleClick={() => console.log("d")} />;
		</>
	);
}

export default App;
