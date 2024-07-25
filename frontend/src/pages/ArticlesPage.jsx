import React from "react";
import Nav from "../components/Nav";
import { generalContext } from "../context/GeneralContext";
import { useContext } from "react";
import ArticleSections from "../components/ArticleSections";
import Footer from "../components/Footer";
import ArticleHero from "../components/ArticleHero";

const ArticlesPage = () => {
	const { toggle } = useContext(generalContext);
	return (
		<div
			className={`bg-background-image ${
				toggle && "fixed"
			} sm:relative bg-center w-full bg-cover h-[400px]`}
		>
			<div className="text-shadow h-[400px] bg-black bg-opacity-[50%]">
				<div className=" max-w-mxw m-auto pt-[2rem]">
					<Nav />
					<ArticleHero />
				</div>
			</div>
			<ArticleSections />
			<Footer />
		</div>
	);
};

export default ArticlesPage;
