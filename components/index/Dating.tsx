import Image from "next/image";
import { useState } from "react";

function Content1() {
	return (
		<div className="w-full flex flex-col">
			<h1 className="text-[97px] font-anton leading-[92px] text-black w-full">
				Champagne - a dating and <br />
				friendship app for college
				<br /> students
			</h1>
			<div className="w-full flex flex-row gap-x-5 items-start justify-between relative">
				<div className="absolute -top-[130px] right-[130px]">
					<Image
						width={93}
						height={77}
						alt="Champagne app mockup"
						src="/images/content/arrow.png"
					/>
				</div>
				<div className="bg-champagne-pink rounded-full rotate-[357deg] my-auto flex items-center justify-center py-4 px-12 text-white text-[32px] font-black">
					<p className="my-auto">Get Early Access</p>
				</div>
				<div className="flex flex-row -space-x-10">
					<Image
						width={324}
						height={412}
						alt="Champagne app mockup"
						src="/images/content/guy-3.png"
					/>
					<Image
						width={324}
						height={412}
						alt="Champagne app mockup"
						src="/images/content/woman-3.png"
					/>
				</div>
			</div>
		</div>
	);
}

function Content2() {
	return (
		<div className="w-full flex flex-col">
			<h1 className="text-[97px] font-anton leading-[92px] text-black w-full">
				Find new date recommended
				<br /> to you by your friends and
				<br /> develop it into something <br />
				meaningful
			</h1>
			<div className="w-full flex flex-row gap-x-5 items-start justify-between relative">
				<div className="absolute -top-[180px] right-[130px]">
					<Image
						width={93}
						height={77}
						alt="Champagne app mockup"
						src="/images/content/arrow.png"
					/>
				</div>
				<div className="bg-champagne-pink rounded-full rotate-[357deg] my-auto flex items-center justify-center py-4 px-12 text-white text-[32px] font-black">
					<p className="my-auto">Join Waitlist</p>
				</div>
				<div className="relative">
					<Image
						width={699}
						height={366}
						alt="Champagne app mockup"
						src="/images/content/woman-5.png"
						// className="rotate-[1deg]"
					/>

					<div className="absolute p-5 bg-white rounded-[18px] flex flex-col bottom-5 right-5 space-y-2">
						<p className="text-[14px] leading-[16px] text-black font-black">
							Jade thinks you guys will
							<br /> be great together 😘
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function Dating() {
	const [selectedContent, setSelectedContent] = useState(1);

	return (
		<div className="w-full bg-white flex px-4 relative pb-32">
			<div className="w-full max-w-screen-2xl mx-auto flex items-center justify-center">
				<div className="mx-auto w-full flex flex-col space-y-32">
					<div className="relative w-full">
						<div className="bg-white z-10 absolute rotate-[355deg] border-[3px] border-black -left-[30px] top-5">
							<div className="relative py-5 px-10">
								<p className="text-[34px] uppercase leading-[34px] text-champagne-pink font-black">
									dating
								</p>
							</div>
						</div>
						<div className="bg-white z-[5] absolute rotate-[355deg] border-[3px] border-black -left-[36px] top-7">
							<div className="relative py-5 px-10">
								<p className="text-[34px] uppercase leading-[34px] text-champagne-pink font-black">
									dating
								</p>
							</div>
						</div>
						<div className="w-full border-[7px] border-black rounded-[73px] flex flex-col p-16">
							<div className="w-full flex flex-row-reverse gap-x-5 rotate-[1deg]">
								<p
									className={`text-[60px] font-anton leading-[60px] ${
										selectedContent === 2
											? "text-black"
											: "text-champagne-light-gray"
									} cursor-pointer`}
									onClick={() => setSelectedContent(2)}
								>
									2
								</p>
								<p
									className={`text-[60px] font-anton leading-[60px] ${
										selectedContent === 1
											? "text-black"
											: "text-champagne-light-gray"
									} cursor-pointer`}
									onClick={() => setSelectedContent(1)}
								>
									1
								</p>
							</div>

							{selectedContent === 1 ? (
								<Content1 />
							) : (
								<Content2 />
							)}
						</div>
					</div>

					<div className="relative w-full">
						<div className="bg-white z-10 absolute rotate-[355deg] border-[3px] border-black -right-[25px] -top-8">
							<div className="relative py-5 px-10">
								<p className="text-[34px] uppercase leading-[34px] text-champagne-light-blue font-black">
									friendz
								</p>
							</div>
						</div>
						<div className="bg-white z-[5] absolute rotate-[355deg] border-[3px] border-black -right-[19px] -top-6">
							<div className="relative py-5 px-10">
								<p className="text-[34px] uppercase leading-[34px] text-champagne-light-blue font-black">
									friendz
								</p>
							</div>
						</div>
						<div className="w-full border-[7px] border-black rounded-[73px] flex flex-row p-16">
							<div className="w-full flex flex-row space-x-24 items-start justify-between relative">
								<div className="flex flex-col w-1/3 space-y-8">
									<div className="relative self-end">
										<Image
											width={363}
											height={284}
											alt="Champagne app mockup"
											src="/images/content/guy-4.png"
										/>

										<div className="absolute p-5 bg-white rounded-[18px] flex flex-col bottom-5 right-5 space-y-2">
											<p className="text-[27px] font-anton leading-[27px] text-black">
												Freshman
											</p>
											<p className="text-[14px] leading-[14px] text-black font-black">
												Stanford University
											</p>
										</div>
									</div>
									<div className="relative">
										<Image
											width={363}
											height={284}
											alt="Champagne app mockup"
											src="/images/content/woman-4.png"
										/>

										<div className="absolute p-5 bg-white rounded-[18px] flex flex-col bottom-5 left-5 space-y-2">
											<p className="text-[27px] font-anton leading-[27px] text-black">
												Junior
											</p>
											<p className="text-[14px] leading-[14px] text-black font-black">
												Stanford University
											</p>
										</div>
									</div>
								</div>
								<div className="w-2/3 flex flex-col h-full items-center">
									<div className="flex flex-col items-start my-auto">
										<h1 className="text-[97px] font-anton leading-[92px] text-black">
											Make and connect with new friends at
											your college
										</h1>
										<div className="bg-champagne-light-blue rounded-full rotate-[-356deg] my-auto flex items-center justify-center py-4 px-12 mt-14 text-black text-[32px] font-black">
											<p className="my-auto">
												Active your campus
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="relative w-full flex flex-col -space-y-5">
						<div className="bg-white z-20 absolute rotate-[-357deg] border-[3px] border-black -left-[30px] -top-4">
							<div className="relative py-5 px-10">
								<p className="text-[34px] uppercase leading-[34px] text-champagne-pink font-black">
									games
								</p>
							</div>
						</div>
						<div className="bg-white z-[20] absolute rotate-[-357deg] border-[3px] border-black -left-[20px] -top-1">
							<div className="relative py-5 px-10">
								<p className="text-[34px] uppercase leading-[34px] text-champagne-pink font-black">
									games
								</p>
							</div>
						</div>
						<div className="w-full border-[7px] border-black rounded-[73px] flex flex-rpw p-16 rotate-[-1deg] z-[12] bg-white">
							<div className="w-2/3 flex flex-col items-start gap-y-10">
								<h1 className="text-[97px] font-anton leading-[92px] text-black w-full pt-20 rotate-[-1deg]">
									Checkout the most eligible{" "}
									<span className="text-champagne-light-blue">
										bachelors
									</span>{" "}
									&{" "}
									<span className="text-champagne-pink">
										bachelorettes
									</span>{" "}
									on your campus
								</h1>
								<div className="bg-black rounded-full rotate-[-2deg] my-auto flex items-center justify-center py-4 px-20 text-white text-[32px] font-black">
									<p className="my-auto">Join Waitlist</p>
								</div>
							</div>
							<div className="w-1/3 flex flex-col items-start justify-between relative">
								<div className="p-5 w-[230px] rounded-[18px] bg-champagne-pink flex flex-col h-[195px] justify-between rotate-[-1deg]">
									<div className="flex flex-col space-y-2">
										<p className="text-[35px] font-anton leading-[35px] text-white">
											Claire Mary
										</p>
										<p className="text-[18px] leading-[18px] text-white font-black">
											UCLA
										</p>
									</div>
									<p className="text-[27px] font-anton leading-[27px] text-white self-end">
										1st
									</p>
								</div>
								<div className="p-5 w-[230px] rounded-[18px] bg-champagne-light-blue flex flex-col h-[195px] justify-between self-end rotate-[-1deg]">
									<div className="flex flex-col space-y-2">
										<p className="text-[35px] font-anton leading-[35px] text-white">
											Paul Nowe
										</p>
										<p className="text-[18px] leading-[18px] text-white font-black">
											Berkeley
										</p>
									</div>
									<p className="text-[27px] font-anton leading-[27px] text-white self-end">
										1st
									</p>
								</div>
								<div className="p-5 w-[230px] rounded-[18px] bg-champagne-lighter-gray flex flex-col h-[130px] justify-between rotate-[-1deg]">
									<div className="flex flex-col space-y-2">
										<span className="h-3.5 w-full rounded-full bg-white" />
										<span className="h-3.5 w-1/2 rounded-full bg-white" />
									</div>
									<p className="text-[27px] font-anton leading-[27px] text-white self-end">
										1st
									</p>
								</div>
							</div>
						</div>

						<div className="grid grid-cols-2 gap-x-10 w-full">
							<div className="w-full border-[7px] border-black rounded-[73px] flex flex-row p-16 rotate-[-1deg] bg-white z-5">
								<div className="w-full flex flex-col justify-between items-start">
									<div className="p-5 w-[371px] rounded-[18px] bg-champagne-light-blue flex flex-col items-start justify-between rotate-[-1deg] space-y-10">
										<div className="flex flex-row justify-between space-x-2 items-center">
											<p className="text-[28px] font-anton leading-[28px] text-white">
												Most love person <br />
												On in class
											</p>

											<Image
												width={59}
												height={59}
												alt="Heart eyes"
												src="/images/emojis/heart-eyes.png"
												className=""
											/>
										</div>
										<div className="flex flex-col space-y-2 self-end">
											<p className="text-[14px] font-black leading-[14px] text-champagne-light-gray">
												Picked
											</p>
											<div className="p-5 h-[85px] bg-white rounded-[18px] flex flex-col-reverse bottom-5 left-5 space-y-2 self-end">
												<p className="text-[14px] leading-[14px] text-black font-black">
													Stanford University
												</p>
												<p className="text-[27px] font-anton leading-[27px] text-black">
													Mike Lawse
												</p>
											</div>
										</div>
									</div>
									<h1 className="text-[51px] font-anton leading-[51px] text-black w-full pt-10 rotate-[-1deg]">
										Boost your friends
										<br /> up by sending positive
										<br /> messages
									</h1>
								</div>
							</div>

							<div className="grid grid-rows-2 -space-y-5 relative">
								<div className="w-full border-[7px] h-[339px] border-black rounded-[73px] flex flex-row p-20 rotate-[-1deg] bg-white z-10">
									<div className="w-full flex flex-col items-start">
										<h1 className="text-[51px] font-anton leading-[51px] text-black w-full rotate-[359deg]">
											Play games with
											<br /> your friends and school
											<br /> mates
										</h1>

										<div className="absolute right-10 bottom-10 ">
											<Image
												width={100}
												height={100}
												alt="Champagne app mockup"
												src="/images/emojis/gamepad.png"
											/>
										</div>
									</div>
								</div>

								<div className="w-full border-[7px] h-[310px] border-black rounded-[73px] flex flex-row p-20 rotate-[-1deg] bg-white z-5 absolute bottom-14 -left-10">
									<div className="w-full flex flex-row items-start justify-between">
										<h1 className="text-[51px] font-anton leading-[51px] text-black w-full rotate-[359deg]">
											You may get
											<br /> Champagne delivered
											<br /> to you for each date
										</h1>

										<div className="absolute right-10 bottom-10">
											<Image
												width={100}
												height={100}
												alt="Champagne app mockup"
												src="/images/emojis/bottle.png"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
