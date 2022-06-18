type Realm = {
	background: string;
	name: string;
	maps: string[];
};

function Realm({ background, name, maps }: Realm) {
	return (
		<li
			className={`animation-realm w-[380px] h-[256px] ${background} bg-no-repeat bg-center  overflow-hidden text-center flex flex-col justify-between pt-4`}
		>
			<p className="bg-black bg-opacity-70">{name}</p>
			<ul>
				{maps.map((map) => {
					return <li key={map}>{map}</li>;
				})}
			</ul>
		</li>
	);
}
export default Realm;
