import React, { useState, useContext, useEffect } from "react";
import { navLinks } from "../constants/Links";
import { close, menu } from "../constants/images";
import DropDownHero from "./DropDownHero";
import { AnimatePresence, motion } from "framer-motion";
import Icons from "./Icons";
import { generalContext } from "../context/GeneralContext";
import { Link } from "react-router-dom";

const Nav = () => {
	const { toggle, setToggle } = useContext(generalContext);
	const [articleToggle, setArticleToggle] = useState(false);

	const menuVar = {
		initial: {
			scaleY: 0,
		},
		animate: {
			scaleY: 1,
			transition: {
				duration: 0.5,
				ease: [0.12, 0, 0.39, 0],
			},
		},
		exit: {
			scaleY: 0,
			transition: {
				delay: 0.5,
				duration: 0.5,
				ease: [0.22, 1, 0.36, 1],
			},
		},
	};

	const mobileVar = {
		initial: {
			y: "30vh",
			transition: {
				duration: 0.5,
			},
		},
		open: {
			y: 0,
			transition: {
				duration: 0.7,
			},
		},
	};

	const dropDownVar = {
		initial: {
			opacity: 0,
			transition: {
				duration: 0.5,
			},
		},
		open: {
			opacity: 1,
			transition: {
				duration: 0.7,
			},
		},
	};

	const containerVar = {
		initial: {
			transition: {
				staggerChildren: 0.09,
				ease: [0.37, 0, 0.63, 1],
				staggerDirection: -1,
			},
		},
		open: {
			delayChildren: 0.3,
			transition: {
				staggerChildren: 0.09,
				ease: [0, 0.55, 0.45, 1],
				staggerDirection: 1,
			},
		},
	};

	const articleVar = {
		initial: {
			y: "-3vh",
		},
		animate: {
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	};
	return (
		<nav className={`nav-container uppercase  text-white`}>
			<div className="nav-container flex justify-between ">
				<div className="logo font-bold font-poppins z-[100]">
					<Link to="/" onClick={() => setToggle(false)}>
						M <span className="text-six text-[1.5rem]">4</span> M
					</Link>
				</div>
				<div className="links hidden sm:flex items-center text-[.8rem] md:text-[1rem]">
					<ul className="list-none ml-[6rem] flex">
						{navLinks.map((link, index) => (
							<li
								key={link.id}
								className={`${navLinks.length - 1 === index ? "mr-0" : "mr-6"} 
                    font-bold cursor-pointer ${
											link.id === "account" && "hidden"
										}`}
							>
								{index === 0 ? (
									// For the first list element with index 0, add a dropdown
									<div className="relative group">
										<span className="cursor-pointer">
											<Link
												onMouseEnter={() => setArticleToggle(true)}
												onMouseLeave={() => setArticleToggle(false)}
												className="hover:text-six transition py-1 duration-200 ease-in-out"
											>
												{link.title}
											</Link>
										</span>
										{articleToggle && (
											<motion.div
												variants={articleVar}
												initial="initial"
												animate="animate"
												className="article-dropdown absolute top-4"
												onMouseEnter={() => setArticleToggle(true)}
												onMouseLeave={() => setArticleToggle(false)}
											>
												<ul className="flex flex-wrap w-[320px] gap-5 text-[.8rem] text-white py-[1rem]">
													{/* Add your dropdown items here */}
													<li className="">
														<Link
															to="/articles/addictions"
															className="hover:text-six py-1"
														>
															Addiction
														</Link>
													</li>
													<li className="">
														<Link
															to="/dropdown-item-1"
															className="hover:text-six py-1"
														>
															Spiritual
														</Link>
													</li>
													<li className="">
														<Link
															to="/dropdown-item-1"
															className="hover:text-six py-1"
														>
															Family
														</Link>
													</li>
													<li className="">
														<Link
															to="/dropdown-item-1"
															className="hover:text-six py-1"
														>
															Family
														</Link>
													</li>
													<li className="">
														<Link
															to="/dropdown-item-1"
															className="hover:text-six py-1"
														>
															Family
														</Link>
													</li>
													<li className="">
														<Link
															to="/dropdown-item-2"
															className="hover:text-six py-1"
														>
															Finances
														</Link>
													</li>
													<li className="">
														<Link
															to="/dropdown-item-1"
															className="hover:text-six py-1"
														>
															Spiritual
														</Link>
													</li>
													<li className="">
														<Link
															to="/dropdown-item-1"
															className="hover:text-six py-1"
														>
															Spiritual
														</Link>
													</li>
													{/* Add more dropdown items as needed */}
												</ul>
											</motion.div>
										)}
									</div>
								) : (
									// For other list elements without dropdown
									<Link
										to={`/${link.id}`}
										className="hover:text-six transition py-1 duration-200 ease-in-out"
									>
										{link.title}
									</Link>
								)}
							</li>
						))}
					</ul>
				</div>

				
				<div className="account flex hidden items-center sm:flex gap-4 md:gap-8 items-center text-[.8rem]">
					<div className="signup border-six hover:border-one border text-six font-normal px-2 md:px-3 md:py-[.2rem] py-[0.1rem] hover:text-one transition duration-400 ease-in-out cursor-pointer">
						<Link to="/signup">sign up</Link>
					</div>
					<div className="signin border-white hover:border-gray-300 border text-white font-normal hover:text-gray-300 px-2 md:px-3 md:py-[.2rem] py-[0.1rem] transition duration-400 ease-in-out cursor-pointer">
						<Link to="/signin">sign in</Link>
					</div>
				</div>
				<div className="links sm:hidden">
					<img
						src={toggle ? close : menu}
						alt=""
						onClick={() => setToggle((prev) => !prev)}
						className="h-[1.5rem] w-[1.5rem] relative z-[100] cursor-pointer"
					/>
					<AnimatePresence>
						{toggle && (
							<motion.div
								variants={menuVar}
								initial="initial"
								animate="animate"
								exit="exit"
								className={`right-0 top-0 fixed z-[99] h-screen bg-black-gradient w-full origin-top text-center`}
							>
								<motion.div
									variants={containerVar}
									initial="initial"
									animate="open"
									exit="initial"
								>
									<ul className="relative">
										{navLinks.map((link) => (
											<div className="overflow-hidden">
												<motion.li
													variants={mobileVar}
													key={link.id}
													className="my-2 font-poppins inline-block text-nfs font-bold cursor-pointer"
												>
													<Link
														onClick={() => setToggle(false)}
														to={`/${link.id}`}
													>
														{link.title}
													</Link>
												</motion.li>
											</div>
										))}
										<motion.div
											className="absolute w-full"
											variants={dropDownVar}
										>
											<DropDownHero />
										</motion.div>
										<motion.div
											className={` absolute top-[88vh] right-[25%] left-[25%]`}
											variants={dropDownVar}
										>
											<Icons height="100px" />
										</motion.div>
									</ul>
								</motion.div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
