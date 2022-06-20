import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../redux/rootReducer";
import { useEffect, useState } from "react";
import "../css/realms.css";
import Realm from "../components/Realm";
import { realmsActions } from "../redux/realms/realmsSlice";

function Realms() {
	const realms = useSelector((state: AppState) => state.realms);
	const dispatch = useDispatch();
	const REALMS_KEY = "DBD_ROULETTE_REALMS";

	useEffect(() => {
		const realmsConfig = localStorage.getItem(REALMS_KEY);
		if (realmsConfig) {
			dispatch(realmsActions.set(JSON.parse(realmsConfig)));
		}
	}, []);
	useEffect(() => {
		localStorage.setItem(REALMS_KEY, JSON.stringify(realms));
	}, [realms]);
	const [selectedRealmIndex, setSelectedRealmIndex] = useState<
		undefined | number
	>(undefined);

	return (
		<>
			<Navbar />
			<main>
				<Button
					body="Random"
					handleClick={() => {
						setSelectedRealmIndex(Math.floor(Math.random() * realms.length));
						console.log(selectedRealmIndex, realms[0]);

						if (selectedRealmIndex) {
							console.log(realms[selectedRealmIndex]);
						}
					}}
				/>

				<p className="text-white">
					{selectedRealmIndex != undefined
						? realms[selectedRealmIndex].name
						: ""}
				</p>
				<button
					onClick={() => {
						dispatch(realmsActions.disableAll);
					}}
				>
					disable
				</button>
				<button
					onClick={() => {
						dispatch(realmsActions.enableAll);
					}}
				>
					enable
				</button>
				<ul className=" text-white w-screen grid place-items-center">
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
			</main>
		</>
	);
}
export default Realms;
