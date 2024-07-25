import React from "react";
import { motion } from "framer-motion";

const heroVariant = {
	initial: {
		y: "20vh",
		transition: {
			duration: 2,
		},
	},
	open: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 0.8,
			type: "spring",
			stiffness: 100,
			damping: 30,
			duration: 0.5,
		},
	},
};

const HomeHero = () => (
	<div className="container text-white">
		<div className="text-container relative top-[8rem] sm:top-[7rem]">
			<motion.div>
				<div className="heading leading-[3rem] sm:hidden uppercase">
					<div className="">
						<motion.h1
							className="title text-hhfs font-light font-krona"
							initial={{ opacity: 0 }}
							animate={{ opacity: [0, 0.1, 1] }}
							transition={{
								ease: "easeInOut",
								duration: 2,
							}}
						>
							You're
						</motion.h1>
					</div>

					<div className="">
						<motion.h1 className="title text-hhfs font-light font-krona bg-[#ff561d] table py-1 my-1">
							Made
						</motion.h1>
					</div>
					<div className="">
						<motion.h1 className="title text-hhfs font-light font-krona bg-[#ff561d] table py-1 my-1">
							for
						</motion.h1>
					</div>
					<div className="">
						<motion.h1 className="title text-hhfs font-light font-krona bg-[#ff561d] table py-1 my-1">
							More
						</motion.h1>
					</div>
				</div>

				<div className="heading leading-[3rem] hidden sm:block uppercase">
					<div className="">
						<motion.h1
							className="title text-hhfs font-light font-krona table py-2"
							initial={{ opacity: 0 }}
							animate={{ opacity: [0, 0.1, 1] }}
							transition={{
								ease: "easeInOut",
								duration: 2,
							}}
						>
							You're
						</motion.h1>
					</div>
					<div className="h-[100px] overflow-hidden">
						<motion.h1
							variants={heroVariant}
							initial="initial"
							animate="open"
							className="title text-hhfs font-light font-krona bg-[#ff561d] table my-1 pb-3 pt-4"
						>
							Made for More
						</motion.h1>
					</div>
				</div>

				<div className="overflow-hidden">
					<motion.h3 className="sub-title font-poppins text-[1.5rem]">
						...all you need, is to know
					</motion.h3>
				</div>

				<div className="overflow-hidden">
					<motion.h3 className="sub-title font-poppins text-[1.5rem]">
						you are.
					</motion.h3>
				</div>
			</motion.div>
			<div className="button py-8 my-4">
				need help?
				<motion.button className="border border-six hover:border-one px-2 mx-2 font-roboto text-white hover:text-gray-300 font-light transition duration-300 ease-in-out">
					Get help
				</motion.button>
			</div>
		</div>
	</div>
);

export default HomeHero;

