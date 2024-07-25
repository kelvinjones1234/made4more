import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { generalContext } from "../context/GeneralContext";

const DropDownHero = () => {
	return (
		<motion.div className={`p-6`}>
			<div className="heading leading-[3rem] pt-[1rem] border-t-2">
				<div className="overflow-hidden flex justify-start">
					<h1 className="title text-hhfs font-light font-krona py-1">You're</h1>
				</div>

				<div className="">
					<h1 className="title text-hhfs font-light font-krona bg-[#ff561d] table py-1 my-1">
						Made
					</h1>
				</div>
				<div className="">
					<h1 className="title text-hhfs font-light font-krona bg-[#ff561d] table py-1 my-1">
						for
					</h1>
				</div>
				<div className="">
					<h1 className="title text-hhfs font-light font-krona bg-[#ff561d] table py-1 my-1">
						More
					</h1>
				</div>
			</div>
			<div className="text-start lowercase">
				<div className="overflow-hidden">
					<h3 className="sub-title font-poppins text-[1.5rem]">
						...all you need, is to know
					</h3>
				</div>

				<div className="overflow-hidden">
					<h3 className="sub-title font-poppins text-[1.5rem]">you are.</h3>
				</div>
				<div className="button py-8 my-4">
					Need help?
					<button className="border border-six px-2 mx-2 font-roboto font-light">
						{" "}
						Get help
					</button>
				</div>
			</div>
		</motion.div>
	);
};

export default DropDownHero;
