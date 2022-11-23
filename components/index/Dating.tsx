/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../recoil";

function Content1() {
	const [isOpen, setIsOpen] = useRecoilState(modalState);

	return (
		<div className="w-full flex flex-col mt-5 md:mt-0">
			<h1 className="text-[47px] leading-[47px] lg1:text-[64px] lg1:leading-[64px] xl:text-[68px] xl:leading-[68px] xl1:text-[72px] xl1:leading-[72px] 2xl:text-[97px] 2xl:leading-[92px] font-anton text-black w-full">
				Champagne - a dating and <br />
				friendship app for college
				<br /> students
			</h1>
			<div className="w-full flex flex-col space-y-5 lg1:flex-row gap-x-5 items-start justify-between relative">
				<div className="absolute right-0 -top-[150px] lg1:right-20 2xl:-top-[180px] 2xl:right-[130px]">
					<img
						alt="Champagne app mockup"
						src="/images/content/arrow.png"
						className="w-[48px] h-[48px] xl:w-[93px] xl:h-[77px]"
					/>
				</div>
				<div
					onClick={() => setIsOpen(true)}
					className="bg-champagne-pink rounded-full rotate-[357deg] my-auto flex items-center justify-center py-4 px-12 text-white text-[18px] lg1:text-[21px] xl:text-[22px] xl1-[24px] 2xl:text-[32px] font-black"
				>
					<p className="my-auto">Join Waitlist</p>
				</div>
				<div className="flex flex-row -space-x-16 md:-space-x-10 self-end">
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
	const [isOpen, setIsOpen] = useRecoilState(modalState);

	return (
		<div className="w-full flex flex-col">
			<h1 className="text-[47px] leading-[47px] lg1:text-[64px] lg1:leading-[64px] xl:text-[68px] xl:leading-[68px] xl1:text-[72px] xl1:leading-[72px] 2xl:text-[97px] 2xl:leading-[92px] font-anton text-black w-full">
				Find new date recommended
				<br /> to you by your friends and
				<br /> develop it into something <br />
				meaningful
			</h1>
			<div className="w-full flex flex-col space-y-5 lg1:flex-row gap-x-5 items-start justify-between relative">
				<div className="absolute right-0 -top-[150px] lg1:right-20 2xl:-top-[180px] 2xl:right-[130px]">
					<img
						alt="Champagne app mockup"
						src="/images/content/arrow.png"
						className="w-[48px] h-[48px] xl:w-[93px] xl:h-[77px]"
					/>
				</div>
				<div
					onClick={() => setIsOpen(true)}
					className="bg-champagne-pink rounded-full rotate-[357deg] my-auto flex items-center justify-center py-4 px-12 text-white text-[18px] lg1:text-[21px] xl1:text-[23px] font-black"
				>
					<p className="my-auto">Join Waitlist</p>
				</div>
				<div className="relative">
					<img
						alt="Champagne app mockup"
						src="/images/content/woman-5.png"
						// className="rotate-[1deg]"
						className="xl1:w-[522px] xl1:h-[271px] lg:w-[477px] lg:h-[302px] w-[289px] h-[229px] lg1:w-[463px] lg1:h-[242px] xl:w-[522px] xl:h-[273px] "
					/>

					<div className="absolute p-5 bg-white rounded-[18px] flex flex-col bottom-5 right-5 space-y-2 rotate-[1deg]">
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

	const switchContent = () =>
		setInterval(() => {
			setSelectedContent((prev) => (prev === 1 ? 2 : 1));
		}, 6000);

	useEffect(() => {
		switchContent();

		return () => {
			// @ts-ignore
			clearInterval(switchContent);
		};
	}, []);

	return (
		<div className="w-full bg-white flex px-4 relative pb-32">
			<div className="w-full max-w-5xl lg1:max-w-[985px] xl:max-w-[1066px] xl1:max-w-[1107px] 2xl:max-w-screen-2xl mx-auto flex items-center justify-center">
				<div className="mx-auto w-full flex flex-col space-y-32">
					<div className="relative w-full">
						<div className="bg-white z-10 absolute rotate-[355deg] border-[3px] border-black left-2 2xl:-left-[30px] 2xl:top-5">
							<div className="relative px-5 py-0.5 xl:py-5 xl:px-10">
								<p className="text-[18px] xl:text-[34px] uppercase leading-[34px] text-champagne-pink font-black">
									dating
								</p>
							</div>
						</div>
						<div className="bg-white z-[5] absolute rotate-[355deg] border-[3px] border-black left-0 top-2 2xl:-left-[36px] 2xl:top-7">
							<div className="relative px-5 py-0.5 xl:py-5 xl:px-10">
								<p className="text-[18px] xl:text-[34px] uppercase leading-[34px] text-champagne-pink font-black">
									dating
								</p>
							</div>
						</div>
						<div className="w-full border-[4px] xl:border-[7px] border-black rounded-[36px] xl:rounded-[52px] 2xl:rounded-[73px] flex flex-col p-5 md:p-10 xl:p-16">
							<div className="w-full flex flex-row-reverse gap-x-5">
								<p
									className={`text-[31px] leading-[31px] xl:text-[60px] font-anton xl:leading-[60px] ${
										selectedContent === 2
											? "text-black"
											: "text-champagne-light-gray"
									} cursor-pointer`}
									onClick={() => setSelectedContent(2)}
								>
									2
								</p>
								<p
									className={`text-[31px] leading-[31px] xl:text-[60px] font-anton xl:leading-[60px] ${
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
						<div className="bg-white z-10 absolute rotate-[355deg] border-[3px] border-black right-0 2xl:-right-[25px] -top-8">
							<div className="relative px-5 py-0.5 xl:py-5 xl:px-10">
								<p className="text-[18px] xl:text-[34px] uppercase leading-[34px] text-champagne-light-blue font-black">
									friendz
								</p>
							</div>
						</div>
						<div className="bg-white z-[5] absolute rotate-[355deg] border-[3px] border-black right-[0.6rem] 2xl:-right-[19px] -top-6">
							<div className="relative px-5 py-0.5 xl:py-5 xl:px-10">
								<p className="text-[18px] xl:text-[34px] uppercase leading-[34px] text-champagne-light-blue font-black">
									friendz
								</p>
							</div>
						</div>
						<div className="w-full border-[4px] xl:border-[7px] border-black rounded-[36px] xl:rounded-[52px] 2xl:rounded-[73px] flex flex-row p-5 md:p-10 xl:p-16">
							<div className="w-full flex flex-col-reverse lg:flex-row space-y-5 xl:space-y-0 lg:space-x-24 items-start justify-between relative">
								<div className="flex flex-col w-full lg:w-1/2 space-y-8">
									<div className="relative self-end">
										<div
											style={{
												backgroundImage: `url("/images/content/guy-4.png")`,
												backgroundSize: "cover",
												backgroundPosition: "center",
											}}
											className="w-[223px] h-[175px] lg1:w-[242px] lg1:h-[189px] xl:w-[252px] xl:h-[202px] xl1:w-[272px] xl1:h-[213px] 2xl:w-[363px] 2xl:h-[284px] relative"
										>
											<div className="absolute p-5 bg-white rounded-[18px] flex flex-col bottom-5 right-5 space-y-2">
												<p className="text-[13px] leading-[13px] xl:text-[27px] font-anton xl:leading-[27px] text-black">
													Freshman
												</p>
												<p className="text-[14px] leading-[14px] text-black font-black">
													Stanford University
												</p>
											</div>
										</div>
									</div>
									<div className="relative">
										<div
											style={{
												backgroundImage: `url("/images/content/woman-4.png")`,
												backgroundSize: "cover",
												backgroundPosition: "center",
											}}
											// src="/images/content/woman-4.png"
											className="w-[223px] h-[175px] lg1:w-[242px] lg1:h-[189px] xl:w-[252px] xl:h-[202px] xl1:w-[272px] xl1:h-[213px] 2xl:w-[363px] 2xl:h-[284px] relative"
										>
											<div className="absolute p-5 bg-white rounded-[18px] flex flex-col bottom-5 left-5 space-y-2">
												<p className="text-[13px] leading-[13px] xl:text-[27px] font-anton xl:leading-[27px] text-black">
													Junior
												</p>
												<p className="text-[14px] leading-[14px] text-black font-black">
													Stanford University
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="w-full lg:w-1/2 flex flex-col h-full items-center xl:pt-10">
									<div className="flex flex-col items-start my-auto">
										<h1 className="text-[47px] leading-[47px] lg1:text-[64px] lg1:leading-[64px] xl:text-[68px] xl:leading-[68px] xl1:text-[72px] xl1:leading-[72px] 2xl:text-[97px] 2xl:leading-[92px] font-anton text-black w-full">
											Make and connect with new friends at
											your college
										</h1>
										<Link href="/leaderboard">
											{/* <div className="bg-champagne-light-blue rounded-full rotate-[-356deg] xl:my-auto flex items-center justify-center py-4 px-12 my-5 xl:mt-14 text-black text-[18px] xl:text-[32px] font-black">
												<p className="my-auto">
													Activate your campus
												</p>
											</div> */}

											<div className="bg-champagne-light-blue rounded-full rotate-[-355deg] flex items-center justify-center py-4 px-12 my-10 text-black text-[18px] lg1:text-[21px] xl1:text-[23px] font-black">
												<p className="my-auto">
													Activate your campus
												</p>
											</div>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="relative w-full flex flex-col -space-y-5">
						{/* <div className="bg-white z-20 absolute rotate-[-355deg] border-[3px] border-black -left-[10px] -top-10 xl:-left-[30px] xl:top-5">
							<div className="relative px-2 xl:py-5 xl:px-10">
								<p className="text-[18px] xl:text-[34px] uppercase leading-[34px] text-champagne-pink font-black">
									games
								</p>
							</div>
						</div>
						<div className="bg-white z-[19] absolute rotate-[-355deg] border-[3px] border-black -left-[15px] -top-7 xl:-left-[36px] xl:top-7">
							<div className="relative px-2 xl:py-5 xl:px-10">
								<p className="text-[18px] xl:text-[34px] uppercase leading-[34px] text-champagne-pink font-black">
									games
								</p>
							</div>
						</div> */}
						<div className="bg-white z-20 absolute rotate-[-355deg] border-[3px] border-black left-2 -top-10 2xl:-left-[30px] 2xl:top-5">
							<div className="relative px-5 py-0.5 xl:py-5 xl:px-10">
								<p className="text-[18px] xl:text-[34px] uppercase leading-[34px] text-champagne-pink font-black">
									games
								</p>
							</div>
						</div>
						<div className="bg-white z-[19] absolute rotate-[-355deg] border-[3px] border-black left-0 -top-3 2xl:-left-[36px] 2xl:top-7">
							<div className="relative px-5 py-0.5 xl:py-5 xl:px-10">
								<p className="text-[18px] xl:text-[34px] uppercase leading-[34px] text-champagne-pink font-black">
									games
								</p>
							</div>
						</div>
						<div className="w-full border-[4px] xl:border-[7px] border-black rounded-[36px] xl:rounded-[52px] 2xl:rounded-[73px] flex flex-col lg:flex-row p-5 md:p-10 xl:p-16 z-[15] bg-white">
							<div className="w-full lg:w-2/3 flex flex-col items-start xl:gap-y-10 mt-5 xl:mt-0">
								<h1 className="text-[47px] leading-[47px] lg1:text-[64px] lg1:leading-[64px] xl:text-[68px] xl:leading-[68px] xl1:text-[72px] xl1:leading-[72px] 2xl:text-[97px] 2xl:leading-[92px] font-anton text-black w-full xl:pt-20">
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
								<div className="bg-black rounded-full xl:my-auto flex items-center justify-center py-4 px-12 my-5 lg:mt-14 text-white text-[18px] lg1:text-[21px] xl1:text-[23px] font-black">
									<p className="my-auto">Join Waitlist</p>
								</div>
							</div>
							<div className="w-full lg:w-1/3 flex flex-col -space-y-2 lg1:-space-y-2 xl:space-y-5 items-start justify-between relative">
								<img
									alt="Champagne app mockup"
									src="/images/content/cards.png"
									className="w-full"
								/>
							</div>
						</div>

						<div className="grid grid-cols-1 lg1:grid-cols-2 w-full">
							<div className="w-full border-[4px] xl:border-[7px] border-black rounded-[36px] xl:rounded-[52px] 2xl:rounded-[73px] flex flex-row py-8 px-8 lg1:py-8 lg1:px-10 xl:py-10 xl:px-12 bg-white z-[25]">
								<div className="w-full flex flex-col justify-between items-start space-y-8">
									<img
										alt="Champagne app mockup"
										src="/images/content/card.png"
										// className="rotate-[1deg]"
										className="w-full lg:w-[247px] lg:h-[175px] xl:w-[264px] xl:h-[186px] xl1:w-[278px] xl1:h-[196px] 2xl:w-[371px] 2xl:h-[262px]"
									/>
									<h1 className="text-[30px] xl:text-[36px] xl:leading-[36px] xl1:text-[38px] font-anton leading-[30px] xl1:leading-[38px] text-black w-full">
										Boost your friends up by sending
										positive messages
									</h1>
								</div>
							</div>

							<div className="grid grid-rows-2 -space-y-3 relative items-stretch">
								<div className="w-full border-[4px] xl:border-[7px] border-black rounded-[36px] xl:rounded-[52px] 2xl:rounded-[73px] flex flex-row bg-white z-20 relative py-8 px-8 -top-5 lg1:-top-0 lg1:py-10 lg1:px-16 lg1:-left-[0.3rem] xl:-left-[1.5rem]">
									<div className="w-full flex flex-col items-start">
										<h1 className="text-[30px] xl:text-[36px] xl:leading-[36px] xl1:text-[38px] font-anton leading-[30px] xl1:leading-[38px] text-black w-full">
											Play games with
											<br /> your friends and school
											<br /> mates
										</h1>

										<div className="absolute right-10 bottom-10">
											<img
												width={100}
												height={100}
												alt="Champagne app mockup"
												src="/images/emojis/gamepad.png"
												className="lg1:w-[59px] lg1:h-[59px] w-[32px] h-[32px] 2xl:w-[100px] 2xl:h-[100px]"
											/>
										</div>
									</div>
								</div>

								<div className="w-full border-[4px] xl:border-[7px] border-black rounded-[36px] xl:rounded-[52px] 2xl:rounded-[73px] flex flex-row bg-white z-1 relative py-8 px-8 -top-5 lg1:-top-0 lg1:py-10 lg1:px-16 lg1:-left-[0.3rem] xl:-left-[1.5rem] lg1:-top-0">
									<div className="w-full flex flex-row items-start justify-between relative">
										<h1 className="text-[30px] xl:text-[36px] xl:leading-[36px] xl1:text-[38px] font-anton leading-[30px] xl1:leading-[38px] text-black w-full">
											You may get
											<br /> Champagne delivered
											<br /> to you for each date
										</h1>

										<div className="absolute right-0 bottom-0">
											<img
												width={100}
												height={100}
												alt="Champagne app mockup"
												src="/images/emojis/bottle.png"
												className="lg1:w-[59px] lg1:h-[59px] w-[32px] h-[32px] 2xl:w-[100px] 2xl:h-[100px]"
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
