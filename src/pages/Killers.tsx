import { useDispatch, useSelector } from "react-redux";
import Anchor from "../components/Anchor";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import SlotMachine from "../components/SlotMachine";
import { AppState } from "../redux/rootReducer";
import { useEffect, useState } from "react";
import { killersActions, KillersState } from "../redux/killers/killersSlice";
import Killer from "../components/Killer";
import ConfigurationWrapper from "../components/ConfigurationWrapper";
import ConfigurationButtons from "../components/ConfigurationButtons";
import "../css/fade-animation.css";

function Killers() {
	const killers = useSelector((state: AppState) => state.killers);
	const dispatch = useDispatch();
	const KILLERS_KEY = "DBD_ROULETTE_KILLERS";
	const [isChosen, setIsChosen] = useState(false);
	const [randomKillerArray, setRandomKillerArray] = useState<KillersState[]>(
		[]
	);
	const [randomKiller, setRandomKiller] = useState<KillersState>();
	const animationTime = 2100;
	const [isAnimImageFinished, setIsAnimImageFinished] = useState(true);

	useEffect(() => {
		const killersConfig = localStorage.getItem(KILLERS_KEY);
		if (killersConfig) {
			dispatch(killersActions.set(JSON.parse(killersConfig)));
		}
	}, []);
	useEffect(() => {
		localStorage.setItem(KILLERS_KEY, JSON.stringify(killers));
	}, [killers]);
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

	function chooseRandomKiller() {
		const enabledArray = killers.filter((killer) => killer.enabled);
		return enabledArray.sort(() => 0.5 - Math.random());
	}

	function handleClickRandom() {
		const randomArray = chooseRandomKiller();
		while (randomArray.length < 20) {
			randomArray.push(...chooseRandomKiller());
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
			<span id="roulette"></span>
			<Navbar active="killers" />
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
							{randomKiller?.alias}
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
							killers.reduce((prev, curr) => {
								return prev && curr.enabled;
							}, true)
								? () => dispatch(killersActions.disableAll())
								: () => dispatch(killersActions.enableAll())
						}
					/>
					<ConfigurationWrapper>
						{killers.map((killer, index) => {
							return (
								<Killer
									key={index}
									id={killer.id}
									alias={killer.alias}
									enabled={killer.enabled}
								/>
							);
						})}
					</ConfigurationWrapper>
				</section>
			</main>
		</>
	);
}
export default Killers;
