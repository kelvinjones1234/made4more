import React from "react";
import { navLinks } from "../constants/Links";
import Icons from "./Icons";
import { Link } from "react-router-dom";

const Footer = () => (
	<section className="flex text-white font-poppins pb-[2rem] pt-[3rem] justify-center text-[1rem] bg-footer-bg">
		<div className="footer-container flex gap-[4rem] ss:gap-[10rem] xs:gap-[8rem] px-4">
			<div className="links uppercase">
				<div className="link-heading text-[.8rem] sm:text-[1rem] border-b-2 inline border-six text-six sm:items-center">
					Quick Links
				</div>

				<ul className="sm:flex">
					{navLinks.map((links, index) => (
						<li
							key={links.id}
							className={`${
								index < 1 && "hidden"
							} my-2 text-sofs hover:text-six transition ease-in-out my-[1rem] duration-500 sm:mr-5`}
						>
							<Link to={`/${links.id}`}>{links.title}</Link>
						</li>
					))}
				</ul>
			</div>
			<div className="text-[.8rem]">
				<div className="">
					<Icons height="0" />
				</div>
				<p className="pt-5">
					&copy; 2024 PraiseMedia
					<br />
					All right reserved
				</p>
				<div className="logo font-bold">
					M <span className="text-six text-[1.5rem]">4</span> M
				</div>
			</div>
		</div>
	</section>
);

export default Footer;
