import React, { useEffect } from "react";
import Nav from "../components/Nav";
import { generalContext } from "../context/GeneralContext";
import AboutHero from "../components/AboutHero";
import Footer from "../components/Footer";
import { useContext } from "react";
import AboutSections from "../components/AboutSections";
const AboutPage = () => {
	const { toggle, setToggle } = useContext(generalContext);

	return (
		<div
			className={`bg-background-image ${
				toggle && "fixed"
			} sm:relative bg-center w-full bg-cover h-[400px] lg:h-[500px]`}
		>
			<div className="text-shadow">
				<div className=" max-w-mxw m-auto pt-[2rem]">
					<Nav />
					<AboutHero />
				</div>
				<AboutSections />
				<Footer />
			</div>
		</div>
	);
};

export default AboutPage;
