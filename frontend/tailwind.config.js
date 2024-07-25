/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				krona: ['"Krona One"'],
				poppins: ['"Poppins"'],
				abhaya: ['"Abhaya Libre"'],
				roboto: ['"Roboto"'],
			},
			screens: {
				xs: "480px",
				ss: "620px",
				sm: "768px",
				md: "1060px",
				lg: "1200px",
				xl: "1700px",
			},

			fontSize: {
				// nav font size
				nfs: "calc(.6rem + .3vw)",
				// home hero font size
				hhfs: "calc(2rem + 3vw)",
				// section one font size
				sofs: "max(.7rem, min(calc(.7rem + .3vw), 1rem))",
				// article title
				atfs: "calc(.9rem + .7vw)",
			},
			maxWidth: {
				mxw: "calc(90% + .5vw)",
			},

			colors: {
				one: "#f0825d",
				two: "#f7f7f7",
				three: "#95A1F9",
				four: "#907163",
				five: "#379683",
				six: "#f75b23",
			},
			backgroundImage: {
				"background-image": "url('/src/assets/images/1.jpg')",
				"footer-bg": "url('/src/assets/images/footer-bg-2.jpg')",
			},
		},
	},
	plugins: [],
};
