import Cover from "@/components/Cover";
import Intro from "@/components/Vision";
import Steps from "@/components/Steps";
import Vision from "@/components/Vision";

const page = () => {
	return (
		<main>
			<Cover />
			{/* <Intro /> */}
			<Intro />
			<Steps />
			<Vision />
		</main>
	);
};

export default page;
