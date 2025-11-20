import Cover from "@/components/Cover";
import Intro2 from "@/components/Intro2";
import Steps2 from "@/components/Steps2";
import Services from "@/components/Services";
import Vision from "@/components/Vision";
import Kontakt from "@/components/Kontakt";
import Banner from "@/components/Banner";

const page = () => {
	return (
		<main>
			<Cover />
			<Intro2 />
			<Steps2 />
			<Vision />
			<Services />
			<Kontakt />
			<Banner />
		</main>
	);
};

export default page;
