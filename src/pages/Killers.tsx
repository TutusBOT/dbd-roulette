import { useDispatch, useSelector } from "react-redux";
import Anchor from "../components/Anchor";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import SlotMachine from "../components/SlotMachine";
import "../css/slot-machine-animation.css";
import { AppState } from "../redux/rootReducer";
import { useEffect, useState } from "react";
import { killersActions, KillersState } from "../redux/killers/killersSlice";
import Killer from "../components/Killer";
import ConfigurationWrapper from "../components/ConfigurationWrapper";

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
			setRandomKiller(randomKillerArray[0]);
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
					<div className=" grid place-items-center h-3/4 overflow-hidden">
						<SlotMachine height={208} isChosen={isChosen}>
							{randomKillerArray.map((killer, index) => {
								return (
									<li key={index}>
										<img
											src={`./src/img/killers/${killer.id}.webp`}
											alt={killer.name}
										/>
									</li>
								);
							})}
						</SlotMachine>
						{/* <img
							data-fade={!isChosen ? true : false}
							src="./src/img/killers/1.webp"
							alt={randomKiller ? randomKiller.name : "killer background"}
						/> */}
					</div>
					<div className="sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-4 w-full">
						<Button
							body="GENERATE"
							handleClick={handleClickRandom}
							isDisabled={isChosen}
						/>
						<Anchor body="CONFIGURATION" link="#configuration" />
					</div>
				</section>
				<section id="configuration">
					<div className="sticky top-0 flex flex-wrap justify-center gap-2 sm:gap-4 w-full py-4 z-20 bg-black">
						<Button
							body="DISABLE ALL"
							handleClick={() => {
								dispatch(killersActions.disableAll());
							}}
						/>
						<Button
							body="ENABLE ALL"
							handleClick={() => {
								dispatch(killersActions.enableAll());
							}}
						/>
						<Anchor body="roulette" link="#roulette" />
					</div>
					<ConfigurationWrapper>
						{killers.map((killer) => {
							return (
								<Killer
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
