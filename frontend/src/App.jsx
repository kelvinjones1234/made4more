import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import React, { useContext, useEffect, useState } from "react";
import AboutPage from "./pages/AboutPage";
import GeneralContext from "./context/GeneralContext";
import ArticlesPage from "./pages/ArticlesPage";
import RequestConversationPage from "./pages/RequestConversationPage";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import ArticleReadMorePage from "./pages/ArticleReadMorePage";

function App() {
	const [toggle, setToggle] = useState(false);

	return (
		<BrowserRouter>
			<GeneralContext>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/articles/addictions" element={<ArticlesPage />} />
					<Route path="/request-a-conversation" element={<RequestConversationPage />} />
					<Route path="/signup" element={<SignupPage />} />
					<Route path="/signin" element={<SigninPage />} />
					<Route
						path="/articles/addictions/article-topic"
						element={<ArticleReadMorePage />}
					/>
				</Routes>
			</GeneralContext>
		</BrowserRouter>
	);
}

export default App;
