import React, { useContext } from "react";
import Nav from "../components/Nav";
import { generalContext } from "../context/GeneralContext";
import Footer from "../components/Footer";
import ArticleReadMoreHero from "../components/ArticleReadMoreHero";
import ArticleReadMoreSections from "../components/ArticleReadMoreSections";

const ArticleReadMorePage = () => {
	const { toggle } = useContext(generalContext);
	return (
		<div
			className={`bg-background-image ${
				toggle && "fixed"
			} sm:relative bg-center w-full bg-cover h-[300px]`}
		>
			<div className="text-shadow h-[300px] bg-black bg-opacity-[50%]">
				<div className=" max-w-mxw m-auto pt-[2rem]">
					<Nav />
					<ArticleReadMoreHero title="understanding your appetite" />
				</div>
			</div>
			<ArticleReadMoreSections />
			<Footer />
		</div>
	);
};

export default ArticleReadMorePage;
