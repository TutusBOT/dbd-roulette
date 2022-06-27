import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Anchor from "../components/Anchor";
import Button from "../components/Button";
import ConfigurationButtons from "../components/ConfigurationButtons";
import ConfigurationWrapper from "../components/ConfigurationWrapper";
import Navbar from "../components/Navbar";
import Perk from "../components/Perk";
import SlotMachine from "../components/SlotMachine";
import { perksActions, PerksState, Role } from "../redux/perks/perksSlice";
import { AppState } from "../redux/rootReducer";

function Perks() {
	const perks = useSelector((state: AppState) => state.perks);
	const dispatch = useDispatch();
	const PERKS_KEY = "DBD_ROULETTE_PERKS";
	const [isChosen, setIsChosen] = useState(false);
	const [randomPerks, setRandomPerks] = useState<PerksState[][]>([[]]);
	const [randomKiller, setRandomKiller] = useState<PerksState>();
	const animationTime = 2100;
	const [isAnimImageFinished, setIsAnimImageFinished] = useState(true);
	const [role, setRole] = useState<{
		role: Role;
		isChosen: boolean;
	}>({
		role: "killer",
		isChosen: false,
	});

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
			setRandomKiller(randomPerks[0][0]);
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
		setRandomPerks([randomArray]);
		setIsChosen(true);

		setTimeout(() => {
			setRandomPerks((prev) => prev.slice(0, 1));
			setIsChosen(false);
		}, animationTime);
	}

	function chooseRandomPerks() {
		const enabledArray = perks.filter((perk) => perk.enabled);
		const randomizedArray = enabledArray.sort(() => 0.5 - Math.random());
		const selectedPerks = randomizedArray.splice(0, 4);
		return {
			selectedPerks: selectedPerks,
			baseArray: enabledArray,
		};
	}
	console.log(chooseRandomPerks());

	return (
		<>
			<Navbar active="perks" />
			<main>
				{role.isChosen ? null : (
					<div className="flex flex-wrap gap-4 absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2">
						<Button
							body="SURVIVOR"
							handleClick={() => {
								setRole({ role: "survivor", isChosen: true });
							}}
						/>
						<Button
							body="KILLER"
							handleClick={() => {
								setRole({ role: "killer", isChosen: true });
							}}
						/>
					</div>
				)}
				<section className="w-full h-screen flex flex-col items-center">
					<div
						className={`flex flex-wrap h-3/4 overflow-hidden ${
							isChosen ? "" : "transition-opacity opacity-0 md:opacity-100"
						}`}
					>
						<SlotMachine height={256} isChosen={isChosen}>
							{randomPerks[0].map(({ id, name }, index) => {
								return (
									<img
										src={`./assets/perks/${id}.webp`}
										alt={name}
										key={index}
									/>
								);
							})}
						</SlotMachine>
						<SlotMachine height={256} isChosen={isChosen}>
							{randomPerks[0].map(({ id, name }, index) => {
								return (
									<img
										src={`./assets/perks/${id}.webp`}
										alt={name}
										key={index}
									/>
								);
							})}
						</SlotMachine>
						<SlotMachine height={256} isChosen={isChosen}>
							{randomPerks[0].map(({ id, name }, index) => {
								return (
									<img
										src={`./assets/perks/${id}.webp`}
										alt={name}
										key={index}
									/>
								);
							})}
						</SlotMachine>
						<SlotMachine height={256} isChosen={isChosen}>
							{randomPerks[0].map(({ id, name }, index) => {
								return (
									<img
										src={`./assets/perks/${id}.webp`}
										alt={name}
										key={index}
									/>
								);
							})}
						</SlotMachine>
					</div>
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
