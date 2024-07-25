import React, { useContext } from "react";
import { facebook, whatsapp, twitter, instagram } from "../constants/images";
import { AnimatePresence, motion } from "framer-motion";
import { generalContext } from "../context/GeneralContext";

const Icons = ({ height }) => {
	return (
		<section className={`h-[${height}] flex items-center justify-center`}>
			<div className={`social-icons flex w-[180px] m-auto justify-between `}>
				<img src={facebook} alt="facebook" className="h-6 cursor-pointer" />
				<img src={whatsapp} alt="whatsapp" className="h-6 cursor-pointer" />
				<img src={instagram} alt="instagram" className="h-6 cursor-pointer" />
				<img src={twitter} alt="twitter" className="h-6 cursor-pointer" />
			</div>
		</section>
	);
};

export default Icons;
