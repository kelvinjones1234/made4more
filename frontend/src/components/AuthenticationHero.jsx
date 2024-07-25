import React from "react";

const AuthenticationHero = ({ authenticationTitle }) => {
	return (
		<div className="section-container">
			<div className="text-container">
				<div className="heading text-white font-krona uppercase text-center pt-[6.7rem] lg:pb-[8rem] pb-[7rem]">
					<h1 className="text-[3rem] sm:text-[5rem] sm:leading-[3.5rem] lg:text-[5rem]">
						{authenticationTitle}
					</h1>
					<h1 className="pt-[.5rem] text-[.9rem] sm:text-[1rem] sm:pt-[1.5rem] md:pt-[2rem]">
						Create an account with us and discover more
					</h1>
				</div>
			</div>
		</div>
	);
};

export default AuthenticationHero;
