import React from "react";

const RequestConversationSections = () => {
	return (
		<section className="text-white">
			<div className="content pt-[5rem] pb-[1rem]">
				<div className="post-box flex justify-center pb-[4rem]">
					<div>
						<textarea
							name=""
							placeholder="Give a brief description of what you want to talk about. This will be posted and taken up by a verified counselor."
							id=""
							cols="30"
							rows="10"
							className="p-1 text-black placeholder-white bg-opacity-0 border text-white bg-white"
						></textarea>
						<div className="button pt-1">
							<button className="w-[326px] border border-white hover:border-one transition duration-400 ease-in-out text-white">
								Post
							</button>
						</div>
					</div>
				</div>
				<div className="terms-and-conditions text-center pt-[2rem]">
					<a href="#" className="underline text-[.8rem] hover:text-one transition duration-500 ease-in-out">
						Terms & Conditions
					</a>
				</div>
			</div>
		</section>
	);
};

export default RequestConversationSections;
