import React from "react";
import Nav from "../components/Nav";
import HomeHero from "../components/HomeHero";
import HomeSections from "../components/HomeSections";
import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import Icons from "../components/Icons";
import Footer from "../components/Footer";
import { generalContext } from "../context/GeneralContext";

const Homepage = () => {
	const { toggle, setToggle } = useContext(generalContext);
	return (
		<div
			className={`bg-background-image ${
				toggle && "fixed"
			} sm:relative bg-center w-full bg-cover h-[667px]`}
		>
			<div className="text-shadow h-[667px] bg-black bg-opacity-[30%]">
				<div className=" max-w-mxw m-auto pt-[2rem]">
					<Nav />
					<HomeHero />
				</div>
			</div> 
			<HomeSections />
			<Footer />
		</div>
	);
};

export default Homepage;
