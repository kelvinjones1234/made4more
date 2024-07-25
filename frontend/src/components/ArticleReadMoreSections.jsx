import React, { useContext, useRef, useEffect, useState } from "react";
import { generalContext } from "../context/GeneralContext";
import { story, read } from "../constants/images";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const ArticleReadMoreSections = () => {
	const recentcarousel = useRef();

	return (
		<section className={`relative section-container`}>
			<div className={`w-[100%] sm:relative`}>
				<div className="md:flex">
					<div className="article-content pt-[1rem] pb-[2rem] px-[1rem] shadow mt-[3rem] mb-[5rem] mx-[1rem]">
						<h1 className="uppercase font-poppins text-center text-atfs py-[1rem] font-normal border-[1px] px-2">
							Understanding craving and how it leads you to certain acts
						</h1>
						<div className="article-image pt-[1rem] pb-[1.5rem] sm:float-left sm:mr-[2rem]">
							<img src={story} alt="" className="sm:w-[400px]" />
						</div>
						<div className="article-body leading-[2rem] font-light text-[1rem] font-roboto">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
							officiis quaerat consequuntur iste aperiam minus molestiae ullam
							placeat dignissimos sunt dolor dolorum nobis qui nulla facere cum
							alias laudantium praesentium blanditiis, dolore nemo vel culpa.
							Cumque, quasi aperiam. Dolorem error rerum excepturi consectetur
							veniam earum temporibus nihil repellendus ex adipisci sequi,
							maiores quaerat officiis. Iusto deleniti modi officia, a assumenda
							Perspiciatis iusto debitis voluptatibus, laudantium iste similique
							reprehenderit corporis beatae vero expedita sed pariatur nemo
							magnam, atque odit doloribus alias adipisci! Ad illum nam quasi id
							quas amet, eveniet quae in explicabo ut fugit veniam eaque dolore.
							Ipsum suscipit quos, excepturi dolorum, aliquid deleniti adipisci
							dicta exercitationem laboriosam rerum quas. Quae maiores ratione
							cumque architecto reprehenderit tempora delectus itaque nesciunt,
							deserunt illo molestias natus sapiente! Ex, unde, optio mollitia
							adipisci qui dolor tempore rem ducimus ullam perferendis iure.
							Voluptate amet officiis eaque, qui ducimus sed corrupti vitae ad
							doloribus sequi exercitationem unde nulla dolores quia tempora
							similique inventore quas repudiandae perspiciatis, eius sapiente
							illum earum. Nesciunt quam quidem quo quisquam, nam iure deleniti
							eius, qui facere odit velit ea sunt provident, aperiam animi
							debitis pariatur accusamus? Rerum magni ullam maiores
							exercitationem eum repellendus, quae recusandae deleniti esse
							doloribus delectus earum, non vel libero nemo hic consectetur
							debitis unde excepturi vitae soluta ratione id! Aliquam,
							necessitatibus fugit temporibus tempore rerum nostrum accusamus.
							Deserunt, distinctio? Voluptas ad libero voluptatem. Soluta quos
							similique repellat. Sunt ducimus harum perspiciatis saepe
							laudantium consequuntur consequatur explicabo quo quae doloribus
							esse voluptatum minus officiis, odio ullam earum eos ad. At
							excepturi sint repellat unde, molestias consequatur labore ipsa
							commodi mollitia magni rem itaque cum aperiam, animi natus tempore
							modi repudiandae consectetur nam velit sit debitis. Consequuntur,
							nostrum? Modi ut dicta ad cum fuga expedita, iure et aliquid quos
							nobis inventore! Sapiente iure dolore deserunt vitae esse non.
							Dolorum dolorem, libero sunt architecto tenetur praesentium sint
							excepturi! Unde consequuntur nihil provident similique,
							accusantium beatae doloribus distinctio reiciendis pariatur animi
							vero quia illo non facilis molestias odit impedit libero deserunt
							amet. Possimus, repellendus fugit reiciendis dolorum dolor
							quaerat! Quod impedit inventore delectus, et vero architecto enim
							eaque cupiditate illum nisi dolor a atque harum dolorem minima
							consequuntur laboriosam consequatur quibusdam tempore mollitia.
							Labore impedit ipsa similique, obcaecati quidem perferendis illum
							accusamus? Consequuntur iusto quidem praesentium laudantium quia
							sint possimus, illo in doloribus nam quas animi sunt minima
							cumque? Obcaecati suscipit quos eos non voluptates provident
							dolorem sit maiores! Sed commodi eveniet autem quo aliquid
							officiis accusamus reiciendis fugiat excepturi impedit ratione vel
							repellat, placeat exercitationem repudiandae cumque ea quos
							deserunt recusandae natus, similique quod aut. Obcaecati, non ut.
							Quidem quia, consequuntur, veritatis alias sequi quae nisi sit
							porro est, assumenda id itaque dolor officiis deserunt. Veritatis
							sequi atque ut vero nihil enim asperiores explicabo rerum maxime
							vitae, sint reiciendis cupiditate nisi excepturi non minus.
							Consequuntur exercitationem eos architecto voluptas dolorum.
							Explicabo facere culpa tempora dicta possimus autem blanditiis
							delectus amet repudiandae, iusto ea dolor eligendi consequatur
							similique sunt repellat. Vel, voluptates impedit quae velit
							dolorum accusantium, excepturi sunt quisquam fuga nam facere ipsa,
							rerum adipisci! Earum, quas non doloremque cupiditate ad quidem
							vero quod, ipsum numquam sequi deserunt laborum eius aut sed.
						</div>
					</div>
					<aside className="my-[1rem] pb-[1rem] text-[.85rem] sm:mt-[2.7rem]">
						<div className="aside-container">
							<div className="recent-post">
								<div className="recent-post-container">
									<h1 className="heading font-krona uppercase text-[1.2rem] text-center pb-[1rem] sm:text-[.8rem] sm:px-3">
										most recent Post
									</h1>

									<motion.div className="">
										<motion.div className="grid ss:flex sm:grid">
											<div className="recent-post-content uppercase shadow p-[1rem]  mx-[1rem]">
												<img src={story} alt="" />
												<div className="pt-[1rem]">
													<div className="title">
														<h3 className="font-bold sm:text-[.7rem]">
															Post craving
														</h3>
													</div>
													<div className="post-detail pt-3">
														<p className="">
															by{" "}
															<span className="underline sm:text-[.7rem]">
																Apst. Femi Lazarus
															</span>{" "}
														</p>
														<p className="text-[.7rem] sm:text-[.6rem]">
															PUBLISHED ON MAY 10, 2023
														</p>
														<div className="button py-3">
															<button className="border border-six py-[.1rem] hover:text-one hover:border-one transition duration ease-in-out text-six px-5 text-[.8rem] sm:text-[.7rem] sm:px-3">
																Read
															</button>
														</div>
													</div>
												</div>
											</div>
											<div className="recent-post-content uppercase shadow p-[1rem] mt-4  mx-[1rem]">
												<img src={story} alt="" />
												<div className="pt-[1rem]">
													<div className="title">
														<h3 className="font-bold sm:text-[.7rem]">
															Post craving
														</h3>
													</div>
													<div className="post-detail pt-3">
														<p className="">
															by{" "}
															<span className="underline sm:text-[.7rem]">
																Apst. Femi Lazarus
															</span>{" "}
														</p>
														<p className="text-[.7rem] sm:text-[.6rem]">
															PUBLISHED ON MAY 10, 2023
														</p>
														<div className="button py-3">
															<button className="border border-six py-[.1rem] hover:text-one hover:border-one transition duration ease-in-out text-six px-5 text-[.8rem] sm:text-[.7rem] sm:px-3">
																Read
															</button>
														</div>
													</div>
												</div>
											</div>
										</motion.div>
									</motion.div>
								</div>
							</div>
							<div className="related-post mt-[4rem]">
								<div className="recent-post-container ">
									<h1 className="heading font-krona uppercase text-[1.2rem] text-center py-[1rem] sm:text-[.8rem]">
										related Post
									</h1>
									<div className="grid ss:flex sm:grid">
										<div className="related-post-content uppercase shadow p-[1rem]  mx-[1rem]">
											<img src={story} alt="" />
											<div className="pt-[1rem]">
												<div className="title">
													<h3 className="font-bold">Post craving</h3>
												</div>
												<div className="post-detail pt-3">
													<p className="">
														by{" "}
														<span className="underline text-[.7rem]">
															Apst. Femi Lazarus
														</span>{" "}
													</p>
													<p className="text-[.7rem] sm:text-[.6rem]">
														PUBLISHED ON MAY 10, 2023
													</p>
													<div className="button py-3">
														<button className="border border-six py-[.1rem] hover:text-one hover:border-one transition duration-300 ease-in-out text-six px-5 text-[.8rem] sm:text-[.7rem] sm:px-3">
															Read
														</button>
													</div>
												</div>
											</div>
										</div>
										<div className="related-post-content uppercase shadow p-[1rem]  mx-[1rem]">
											<img src={story} alt="" />
											<div className="pt-[1rem]">
												<div className="title">
													<h3 className="font-bold">Post craving</h3>
												</div>
												<div className="post-detail pt-3">
													<p className="">
														by{" "}
														<span className="underline text-[.7rem]">
															Apst. Femi Lazarus
														</span>{" "}
													</p>
													<p className="text-[.7rem] sm:text-[.6rem]">
														PUBLISHED ON MAY 10, 2023
													</p>
													<div className="button py-3">
														<button className="border border-six py-[.1rem] hover:text-one hover:border-one transition duration-300 ease-in-out text-six px-5 text-[.8rem] sm:text-[.7rem] sm:px-3">
															Read
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</aside>
				</div>
			</div>
		</section>
	);
};

export default ArticleReadMoreSections;
