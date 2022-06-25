import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Anchor from "../components/Anchor";
import Button from "../components/Button";
import ConfigurationButtons from "../components/ConfigurationButtons";
import ConfigurationWrapper from "../components/ConfigurationWrapper";
import Navbar from "../components/Navbar";
import Perk from "../components/Perk";
import SlotMachine from "../components/SlotMachine";
import { perksActions, PerksState } from "../redux/perks/perksSlice";
import { AppState } from "../redux/rootReducer";

function Perks() {
	const perks = useSelector((state: AppState) => state.perks);
	const dispatch = useDispatch();
	const PERKS_KEY = "DBD_ROULETTE_PERKS";
	const [isChosen, setIsChosen] = useState(false);
	const [randomKillerArray, setRandomKillerArray] = useState<PerksState[]>([]);
	const [randomKiller, setRandomKiller] = useState<PerksState>();
	const animationTime = 2100;
	const [isAnimImageFinished, setIsAnimImageFinished] = useState(true);

	useEffect(() => {
		const perksConfig = localStorage.getItem(PERKS_KEY);
		if (perksConfig) {
			dispatch(perksActions.set(JSON.parse(perksConfig)));
		}
	}, []);
	useEffect(() => {
		localStorage.setItem(PERKS_KEY, JSON.stringify(perks));
	}, [perks]);
	useEffect(() => {
		if (!isChosen) {
			const fadeAnimationTimeAndDelay = 900;
			setRandomKiller(randomKillerArray[0]);
			setIsAnimImageFinished(false);

			setTimeout(() => {
				setIsAnimImageFinished(true);
			}, fadeAnimationTimeAndDelay);
		}
	}, [isChosen]);

	function chooseRandomPerk() {
		const enabledArray = perks.filter((perk) => perk.enabled);
		return enabledArray.sort(() => 0.5 - Math.random());
	}

	function handleClickRandom() {
		const randomArray = chooseRandomPerk();
		while (randomArray.length < 20) {
			randomArray.push(...chooseRandomPerk());
		}
		setRandomKillerArray(randomArray);
		setIsChosen(true);

		setTimeout(() => {
			setRandomKillerArray((prev) => prev.slice(0, 1));
			setIsChosen(false);
		}, animationTime);
	}
	return (
		<>
			<Navbar active="perks" />
			<main>
				<section className="w-full h-screen flex flex-col items-center">
					<div
						className={`grid place-items-center h-3/4 overflow-hidden ${
							isChosen ? "" : "transition-opacity opacity-0 md:opacity-100"
						}`}
					>
						<SlotMachine height={208} isChosen={isChosen}>
							{randomKillerArray.map((killer, index) => {
								return (
									<li key={index}>
										<img
											src={`./assets/killers/${killer.id}.webp`}
											alt={killer.name}
										/>
									</li>
								);
							})}
						</SlotMachine>
					</div>
					<div
						className="fade absolute text-white left-1/2 -translate-x-1/2 sm:left-8 lg:left-16 sm:translate-x-0 top-1/3"
						data-fade={!isChosen ? true : false}
					>
						<h1 className="relative whitespace-nowrap text-4xl text-center sm:text-left py-2 sm:text-6xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] after:absolute after:bottom-0 after:left-0 after:w-full after:bg-red after:h-[2px] after:drop-shadow-none">
							{randomKiller?.name}
						</h1>
						<p className="text-xl text-center sm:text-left drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
							{randomKiller?.name}{" "}
						</p>
					</div>
					<img
						className="fade absolute top-16 right-0 max-h-full -z-10"
						data-fade={!isChosen ? true : false}
						src={
							randomKiller
								? `./assets/killers/background/${randomKiller.id}.webp`
								: "./assets/killers/background/1.webp"
						}
						alt={randomKiller ? randomKiller.name : "killer background"}
					/>
					<div className="sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-4 w-full">
						<Button
							body="GENERATE"
							handleClick={handleClickRandom}
							isDisabled={isChosen || !isAnimImageFinished}
						/>
						<Anchor body="CONFIGURATION" link="configuration" />
					</div>
				</section>
				<section id="configuration">
					<ConfigurationButtons
						selectAction={
							perks.reduce((prev, curr) => {
								return prev && curr.enabled;
							}, true)
								? () => dispatch(perksActions.disableAll())
								: () => dispatch(perksActions.enableAll())
						}
					/>
					<ConfigurationWrapper>
						{perks.map((perk, index) => {
							return (
								<Perk
									key={index}
									id={perk.id}
									name={perk.name}
									enabled={perk.enabled}
								/>
							);
						})}
					</ConfigurationWrapper>
				</section>
			</main>
		</>
	);
}
export default Perks;
