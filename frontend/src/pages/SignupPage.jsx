import React, { useContext } from "react";
import Nav from "../components/Nav";
import { generalContext } from "../context/GeneralContext";
import AuthenticationHero from "../components/AuthenticationHero";
import SignupSections from "../components/SignupSections";
import Footer from "../components/Footer";

const SignupPage = () => {
	const { toggle } = useContext(generalContext);
	return (
		<div
			className={`bg-background-image ${
				toggle && "fixed"
			} sm:relative bg-center w-full bg-cover h-auto`}
		>
			<div className="text-shadow bg-black bg-opacity-[30%]">
				<div className=" max-w-mxw m-auto pt-[2rem]">
					<Nav />
					<AuthenticationHero authenticationTitle="Sign up" />
				</div>
				<SignupSections />
				<Footer />
			</div>
		</div>
	);
};

export default SignupPage;
