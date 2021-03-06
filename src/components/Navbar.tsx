import AnchorUnderlined from "./AnchorUnderlined";

type Navbar = {
	active: "home" | "killers" | "realms" | "perks";
};

function Navbar({ active }: Navbar) {
	return (
		<header>
			<nav className="fixed w-full flex justify-center gap-8 py-4 text-white text-2xl bg-black z-20">
				<AnchorUnderlined
					body="HOME"
					link="/dbd-roulette/"
					active={active === "home" ? true : false}
				/>
				<AnchorUnderlined
					body="PERKS"
					link="/dbd-roulette/#/perks"
					active={active === "perks" ? true : false}
				/>
				<AnchorUnderlined
					body="KILLERS"
					link="/dbd-roulette/#/killers"
					active={active === "killers" ? true : false}
				/>
				<AnchorUnderlined
					body="REALMS"
					link="/dbd-roulette/#/realms"
					active={active === "realms" ? true : false}
				/>
			</nav>
		</header>
	);
}
export default Navbar;
