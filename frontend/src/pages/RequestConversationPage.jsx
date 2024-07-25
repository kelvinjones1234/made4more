import React from "react";
import { useContext } from "react";
import { generalContext } from "../context/GeneralContext";
import Nav from "../components/Nav";
import RequestConversationHero from "../components/RequestConversationHero";
import RequestConversationSections from "../components/RequestConversationSections";
import Footer from "../components/Footer";

const RequestConversationPage = () => {
	const { toggle } = useContext(generalContext);
	return (
		<div
			className={`bg-background-image ${
				toggle && "fixed"
			} sm:relative bg-center w-full bg-cover`}
		>
			<div className="text-shadow bg-black bg-opacity-[30%]">
				<div className=" max-w-mxw m-auto pt-[2rem]">
					<Nav />
					<RequestConversationHero />
				</div>
				<RequestConversationSections />
				<Footer />
			</div>
		</div>
	);
};

export default RequestConversationPage;
