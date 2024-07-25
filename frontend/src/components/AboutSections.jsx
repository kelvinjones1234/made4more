import React, { useState, useEffect } from "react";
import { story, read } from "../constants/images";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useContext } from "react";
import { generalContext } from "../context/GeneralContext";

const cardVariants = {
	hidden: { opacity: 0, scale: 0.95 },
	visible: {
		opacity: [0.9, 1],
		scale: 1,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

const cardData = [
	{
		id: 1,
		title: "Who we are",
		image: story,
		content1:
			"we are made for more, a privileged few with the courage to seek more from life by helping peole understand they are made for more.",
		content2:
			"As seekers of a profound purpose, we challenge the status quo, transcending the limitations that have confined us. We are pioneers of our own narrative, navigating uncharted territories with the conviction that our journey is a testament to the vastness of the human spirit. In our hearts, we resonate with the harmonious melody of love, embodying the essence of a world woven together by compassion, understanding, and unity.",
	},
	{
		id: 2,
		title: "What we believe",
		image: read,
		content1:
			"we believe that every individual possesses an inherent capacity for greatness. We envision a world where people from all walks of life are empowered to embrace their unique strengths, overcome challenges, and create meaningful change in their lives and in that of others.",
	},
];

const HomeSections = () => {
	const screen = useContext(generalContext);
	const { toggle, setToggle } = useContext(generalContext);

	const cardRefs = useRef(
		Array.from({ length: cardData.length }, () => useRef(null))
	);

	const isInViews = cardRefs.current.map((ref) =>
		useInView(ref, { amount: 0.2, once: true })
	);

	return (
		<section className={`relative section-container`}>
			<div className={`w-[100%] sm:relative`}>
				{/* ${toggle && screen.screenSize.width < 700 && "hidden"}  */}

				<div className="cards cards mb-[5rem]">
					{cardData.map((dataItems, index) => (
						<div
							className={`card flex ${
								index % 2 === 0 ? "justify-start" : "justify-end"
							}`}
						>
							<motion.div
								key={dataItems.id}
								variants={cardVariants}
								ref={cardRefs.current[index]}
								animate={isInViews[index] ? "visible" : "hidden"}
								className={`card w-[80%] text-center pt-[5rem] grid ${
									index % 2 === 0 ? "sm:flex" : "sm:flex sm:flex-row-reverse"
								}`}
							>
								<div className="sm:flex-[80rem] max-w-[500px]">
									<h1 className="text-[1.7rem] pb-[1rem] sm:hidden font-light leading-[2rem] font-roboto px-[1rem] uppercase">
										{dataItems.title}
									</h1>
									<div>
										<img src={dataItems.image} alt="" className={`mb-[2rem]`} />
									</div>
								</div>

								<div className="text font-poppins font-light text-[.7rem] px-[1rem] max-w-[400px]">
									<h1 className="text-[1.7rem] hidden sm:block pb-[1rem] font-light leading-[2rem] font-roboto px-[1rem] uppercase">
										{dataItems.title}
									</h1>
									<p className="text-sofs">{dataItems.content1}</p>
									<p className="font-poppins font-light text-sofs">
										{dataItems.content2}
									</p>
								</div>
							</motion.div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HomeSections;
