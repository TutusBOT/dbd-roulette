import Navbar from "../components/Navbar";

function Home() {
	return (
		<>
			<Navbar active="home" />
			<main>
				<h2>What is this all about?</h2>
				<p>
					This website is a randomizer in a shape of slot machine for Dead by
					Daylight game.
				</p>
			</main>
		</>
	);
}
export default Home;
