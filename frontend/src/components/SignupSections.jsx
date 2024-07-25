import React from "react";
import { Link } from "react-router-dom";

const SignupSections = () => {
	return (
		<section className="text-white pb-[3rem] md:pb-[5rem]">
			<div className="content">
				<div className="post-box grid justify-center">
					<div className="pb-3">
						<input
							type="text"
							placeholder="First Name"
							className="p-1 bg-opacity-0 placeholder-white border text-white bg-white w-[18rem] m-auto"
						/>
					</div>
					<div className="pb-3">
						<input
							type="text"
							placeholder="Last Name"
							className="p-1 bg-opacity-0 border placeholder-white text-white bg-white w-[18rem] m-auto"
						/>
					</div>
					<div className="pb-3">
						<input
							type="text"
							placeholder="Email"
							className="p-1 bg-opacity-0 border text-white placeholder-white bg-white w-[18rem] m-auto"
						/>
					</div>
					<div className="pb-3">
						<input
							type="text"
							placeholder="Password"
							className="p-1 bg-opacity-0 border placeholder-white text-white bg-white w-[18rem] m-auto"
						/>
					</div>
					<div className="text-center">
						<button className="border border-white w-full py-[.2rem] hover:border-one transition duration-400 ease-in-out">
							Sign up
						</button>
						<div className="py-5">
							<p>
								Already have an account?{" "}
								<Link
									to="/signin"
									className="hover:text-six duration-400 transition ease-in-out"
								>
									Sign in
								</Link>{" "}
							</p>
						</div>
					</div>
				</div>
				<div className="terms-and-conditions text-center pt-[2rem]"></div>
			</div>
		</section>
	);
};

export default SignupSections;
