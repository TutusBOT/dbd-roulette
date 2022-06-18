import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import { AppState } from "../redux/rootReducer";
import { useState } from "react";
import "../css/realms.css";
import Realm from "../components/Realm";

function Realms() {
	const { realms } = useSelector((state: AppState) => state.realms);
	const [selectedRealmIndex, setSelectedRealmIndex] = useState<
		undefined | number
	>(undefined);
	console.log(realms);

	return (
		<>
			<Navbar />
			<main>
				<Button
					body="Random"
					handleClick={() => {
						setSelectedRealmIndex(Math.floor(Math.random() * realms.length));
						console.log(selectedRealmIndex, realms[0].name);

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
				<div className="realms-animation">
					<ul className=" text-white w-screen grid place-items-center">
						{realms.map((realm) => {
							return <p key={realm.name}>{realm.name}</p>;
						})}
					</ul>
				</div>
				<ul className="text-white">
					<Realm
						background="bg-macmillan"
						name="THE MACMILLAN ESTATE"
						maps={["COAL MINE", "GROANING STOREHOUSE", "IRONWORKS OF MISERY"]}
					/>
					<Realm
						background="bg-autohaven"
						name="AUTOHAVEN WRECKERS"
						maps={[
							"AZAROV'S RESTING PLACE",
							"BLOOD LODGE",
							"GAS HEAVEN",
							"WRECKERS' YARD",
							"WRETCHED SHOP",
						]}
					/>
					<Realm
						background="bg-coldwind"
						name="COLDWIND FARM"
						maps={[
							"FRACTURED COWSHED",
							"RANCID ABATTOIR",
							"ROTTEN FIELDS",
							"THE THOMPSON HOUSE",
							"TORMENT CREEK",
						]}
					/>
					<li>CROTUS PRENN ASYLUM</li>
					<li>HADDONFIELD</li>
					<li>BACKWATER SWAMP</li>
					<li>LÉRY'S MEMORIAL INSTITUTE</li>
					<li>RED FOREST</li>
					<li>SPRINGWOOD</li>
					<li>GIDEON MEAT PLANT</li>
					<li>YAMAOKA ESTATE</li>
					<li>ORMOND</li>
					<li>GRAVE OF GLENVALE</li>
					<li>SILENT HILL</li>
					<li>RACCOON CITY</li>
					<li>FORSAKEN BONEYARD</li>
					<li>WITHERED ISLE</li>
				</ul>
			</main>
		</>
	);
}
export default Realms;
