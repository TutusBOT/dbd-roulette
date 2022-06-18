import Anchor from "./Anchor";

function Navbar() {
	return (
		<header>
			<nav className="text-white">
				<Anchor link="/realms" body={"Realms"} />
			</nav>
		</header>
	);
}
export default Navbar;
