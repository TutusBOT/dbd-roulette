type Anchor = {
	link: string;
	body: string | any;
};

function Anchor({ link, body }: Anchor) {
	return (
		<a className="text-white text-2xl" href={link}>
			{body}
		</a>
	);
}
export default Anchor;
