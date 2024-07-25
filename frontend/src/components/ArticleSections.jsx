import React, { useState, useEffect } from "react";
import { story, read } from "../constants/images";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useContext } from "react";
import { generalContext } from "../context/GeneralContext";
import { Link } from "react-router-dom";

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
		title: "Your Story Matters",
		image: story,
		content:
			"Every individual possesses a unique narrative, from its inception to the present moment. Remarkably, these stories hold significance, and there are individuals in the world genuinely interested and caring about them.",
		break: "Interested in engaging in a conversation?",
		// buttonText: "Request a conversation",
	},
	{
		id: 2,
		title: "A book might change your mind",
		image: read,
		content:
			"While the world may seem harsh, it's not as brutal as you might have been led to believe. It's only just and compassionate to grant life another opportunity. Remember, within challenges lie the seeds of resilience and growth.",
		break: "You might need a book.",
		// buttonText: "Read a book",
	},
	{
		id: 3,
		title: "Need guide to a fresh start?",
		image: read,
		content:
			"You are alive? You have a chance to embrace a new beginning. Why not commence this journey now? Change may not unfold effortlessly, yet with persistent effort, unwavering determination, and the support of the right people, transformation becomes not only conceivable but achievable.",
		// buttonText: "Start now",
	},
	{
		id: 4,
		title: "Want to help others?",
		image: read,
		content:
			"Ready to make a positive impact? Your unique experiences can inspire and guide others through challenges. Click the contact button to start your journey of helping and bringing hope today. Your story has the power to be a beacon of light for someone in need.",
		// buttonText: "Get started",
	},
];

const ArticleSections = () => {
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
				<div className="cards mb-[5rem]">
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
								<div className="sm:flex-[80rem]">
									<h1 className="text-[1.7rem] pb-[1rem] sm:hidden font-normal leading-[2rem] font-roboto px-[1rem] uppercase">
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
									<p className="text-sofs">
										{dataItems.content} <br /> {dataItems.break}
									</p>
									<motion.div className="button pt-[1rem]">
										<motion.button className="py-1 text-[.8rem] hover:border-one hover:text-one font-roboto font-normal px-2 text-six border border-six transition ease-in-out duration-300">
											<Link to="/articles/addictions/article-topic">
												Read more
											</Link>
										</motion.button>
									</motion.div>
								</div>
							</motion.div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ArticleSections;
