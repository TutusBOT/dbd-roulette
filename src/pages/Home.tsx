import Navbar from "../components/Navbar";

function Home() {
	return (
		<>
			<Navbar active="home" />
			<main className="text-white pt-16">
				<h2 className="text-3xl">What is this all about?</h2>
				<p>
					This website is a randomizer in a shape of slot machine for Dead by
					Daylight game.
				</p>
			</main>
		</>
	);
}
export default Home;
