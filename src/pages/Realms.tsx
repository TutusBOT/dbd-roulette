import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../redux/rootReducer";
import { useEffect, useState } from "react";
import "../css/fade-animation.css";
import Realm from "../components/Realm";
import { realmsActions, RealmsState } from "../redux/realms/realmsSlice";
import Anchor from "../components/Anchor";
import SlotMachine from "../components/SlotMachine";
import ConfigurationWrapper from "../components/ConfigurationWrapper";
import ConfigurationButtons from "../components/ConfigurationButtons";

function Realms() {
	const realms = useSelector((state: AppState) => state.realms);
	const dispatch = useDispatch();
	const REALMS_KEY = "DBD_ROULETTE_REALMS";
	// const [selectedRealmIndex, setSelectedRealmIndex] = useState<
	// 	undefined | number
	// >(undefined);
	const [randomRealmArray, setRandomRealmArray] = useState<RealmsState[]>([]);
	const [randomRealm, setRandomRealm] = useState<RealmsState>();
	const [isChosen, setIsChosen] = useState(false);
	const animationTime = 2100;

	useEffect(() => {
		const realmsConfig = localStorage.getItem(REALMS_KEY);
		if (realmsConfig) {
			dispatch(realmsActions.set(JSON.parse(realmsConfig)));
		}
	}, []);
	useEffect(() => {
		localStorage.setItem(REALMS_KEY, JSON.stringify(realms));
	}, [realms]);
	useEffect(() => {
		if (!isChosen) {
			setRandomRealm(randomRealmArray[0]);
		}
	}, [isChosen]);

	function chooseRandomRealm() {
		const enabledArray = realms.filter((realm) => realm.enabled);
		return enabledArray.sort(() => 0.5 - Math.random());
	}

	function handleClickRandom() {
		const randomArray = chooseRandomRealm();
		while (randomArray.length < 20) {
			randomArray.push(...chooseRandomRealm());
		}
		setRandomRealmArray(randomArray);
		setIsChosen(true);

		setTimeout(() => {
			setRandomRealmArray((prev) => prev.slice(0, 1));
			setIsChosen(false);
		}, animationTime);
	}

	return (
		<>
			<span id="roulette"></span>
			<Navbar active="realms" />
			<main>
				<section className="w-full h-screen flex flex-col items-center">
					<div className=" grid place-items-center h-3/4 overflow-hidden">
						{/* <div
							className="slot-machine-animation text-center"
							data-chosen={isChosen}
						>
							<ul className="pt-0">
								{randomRealmArray.map((realm, index) => {
									return (
										<li className="text-white" key={index}>
											{realm.name}
										</li>
									);
								})}
							</ul>
						</div> */}
						<SlotMachine
							height={72}
							isChosen={isChosen}
							fontSize={4}
							offset={1.5}
						>
							{randomRealmArray.map((realm, index) => {
								return (
									<li className="text-white text-center" key={index}>
										{realm.name}
									</li>
								);
							})}
						</SlotMachine>
						<img
							className="fade absolute top-16 lg:top-1/2 left-0 lg:-translate-y-1/2 -z-10"
							data-fade={!isChosen ? true : false}
							src={
								randomRealm
									? `./assets/realms/${randomRealm.id}B.webp`
									: "./assets/realms/0.webp"
							}
							alt={randomRealm ? randomRealm.name : "background"}
						/>
					</div>
					<div className="sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-4 w-full">
						<Button
							body="GENERATE"
							handleClick={handleClickRandom}
							isDisabled={isChosen}
						/>
						<Anchor body={"configuration"} link={"configuration"} />
					</div>
				</section>
				<section id="configuration">
					<ConfigurationButtons
						selectAction={
							realms.reduce((prev, curr) => {
								return prev && curr.enabled;
							}, true)
								? () => dispatch(realmsActions.disableAll())
								: () => dispatch(realmsActions.enableAll())
						}
					/>
					<ConfigurationWrapper>
						{realms.map((realm) => {
							return (
								<Realm
									key={realm.id}
									id={realm.id}
									name={realm.name}
									enabled={realm.enabled}
									type={realm.type}
								/>
							);
						})}
					</ConfigurationWrapper>
				</section>
			</main>
		</>
	);
}
export default Realms;
