import Banner from "@/components/Banner";
import Cover from "@/components/Cover";
import Intro2 from "@/components/Intro2";
import Steps2 from "@/components/Steps2";
import Vision from "@/components/Vision";

const page = () => {
	return (
		<main>
			<Cover />
			<Intro2 />
			<Steps2 />
			<Vision />
			<Banner />
		</main>
	);
};

export default page;
