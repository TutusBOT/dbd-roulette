type AnchorUnderlined = {
	body: string | any;
	link: string;
	active?: boolean;
};

function AnchorUnderlined({ body, link, active = false }: AnchorUnderlined) {
	return (
		<a
			href={link}
			className={` relative hover:after:w-full  hover:after:left-0 after:absolute after:border-red after:border-b-4 after:w-0 after:h-1 after:transition-all after:duration-300  after:bottom-0 ${
				active ? "after:w-full after:left-0" : "after:left-1/2"
			}`}
		>
			{body}
		</a>
	);
}
export default AnchorUnderlined;
