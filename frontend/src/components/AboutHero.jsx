import { easeOut, motion } from "framer-motion";
import React from "react";

const titleVariant = {
	initial: {
		y: "-20vh",
		opacity: 0,
	},

	animate: {
		opacity: [1],
		y: 0,
		transition: {
			duration: 1.2,
			ease: easeOut,
		},
	},
};

const AboutHero = () => {
	return (
		<div className="section-container">
			<div className="text-container">
				<div className="heading text-white font-krona uppercase text-center pt-[6.7rem] lg:pb-[10rem] pb-[7rem]">
					<motion.h1
						className="text-[4rem] sm:text-[5rem] sm:leading-[3.5rem] lg:text-[7rem] lg:leading-[5rem] leading-[2.5rem]"
						variants={titleVariant}
						initial="initial"
						animate="animate"
					>
						We are
					</motion.h1>
					<h1 className="sm:text-[1.8rem] text-[1.5rem]">made for more</h1>
					<motion.h1 className="py-2 text-[.9rem] sm:text-[1rem]">
						Get to know about us
					</motion.h1>
				</div>
			</div>
		</div>
	);
};

export default AboutHero;
