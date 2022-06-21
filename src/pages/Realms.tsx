import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../redux/rootReducer";
import { useEffect, useState } from "react";
import "../css/slot-machine-animation.css";
import "../css/fade-animation.css";
import Realm from "../components/Realm";
import { realmsActions, RealmsState } from "../redux/realms/realmsSlice";
import Anchor from "../components/Anchor";

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
	console.log(randomRealmArray.length);

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
						<div
							className="slot-machine-animation text-center"
							data-chosen={isChosen}
						>
							<ul className="pt-0">
								{randomRealmArray.length ? null : (
									<li className="text-white">MAP</li>
								)}
								{randomRealmArray.map((realm, index) => {
									return (
										<li className="text-white" key={index}>
											{realm.name}
										</li>
									);
								})}
							</ul>
						</div>
						{randomRealm ? (
							<img
								className="fade absolute top-1/2 left-0 -translate-y-1/2 -z-10"
								data-fade={!isChosen ? true : false}
								src={`./src/img/realms/${randomRealm.id}B.webp`}
								alt={randomRealm.name}
							/>
						) : null}
					</div>
					<div className="flex flex-wrap justify-center gap-2 sm:gap-4 w-full">
						<Button body="GENERATE" handleClick={handleClickRandom} />
						<Anchor body={"configuration"} link={"#configuration"} />
					</div>
				</section>
				<section id="configuration">
					<div className="sticky top-0 flex flex-wrap justify-center gap-2 sm:gap-4 w-full py-4 z-20 bg-black">
						<Button
							body="DISABLE ALL"
							handleClick={() => {
								dispatch(realmsActions.disableAll());
							}}
						/>
						<Button
							body="ENABLE ALL"
							handleClick={() => {
								dispatch(realmsActions.enableAll());
							}}
						/>
						<Anchor body="roulette" link="#roulette" />
					</div>
					<ul className=" mt-8  w-full flex flex-wrap gap-4 justify-center items-center text-white">
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
					</ul>
				</section>
			</main>
		</>
	);
}
export default Realms;
