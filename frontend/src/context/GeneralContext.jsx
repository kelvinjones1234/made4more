import { createContext, useState, useEffect } from "react";

export const generalContext = createContext();



const GeneralContext = ({ children }) => {
	const [toggle, setToggle] = useState(false)
	const [screenSize, setScreenSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	const updateScreenSize = () => {
		setScreenSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	};

	useEffect(() => {
		updateScreenSize();

		window.addEventListener("resize", updateScreenSize);

		return () => {
			window.removeEventListener("resize", updateScreenSize);
		};
	}, []);

	const contextDict = {
		setScreenSize: setScreenSize,
		screenSize: screenSize,
		toggle: toggle,
		setToggle: setToggle,
	};

	return (
		<generalContext.Provider value={contextDict}>
			{children}
		</generalContext.Provider>
	);
};

export default GeneralContext;
