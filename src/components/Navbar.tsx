import AnchorUnderlined from "./AnchorUnderlined";

type Navbar = {
	active: string;
};

function Navbar({ active }: Navbar) {
	return (
		<header>
			<nav className="fixed w-full flex justify-center gap-8 py-4 text-white text-2xl bg-black z-20">
				<AnchorUnderlined body="HOME" link="/" />
				<AnchorUnderlined body="REALMS" link="/realms" />
			</nav>
		</header>
	);
}
export default Navbar;
