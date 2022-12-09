import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function Champions() {
	const targetRef = useRef();
	const [desktopScrollWidth, setDesktopScrollWidth] = useState(0);

	useLayoutEffect(() => {
		if (targetRef.current) {
			// @ts-ignore
			setDesktopScrollWidth(targetRef.current.offsetWidth);
		}
	}, []);

	return (
		<div className="w-full flex bg-white px-4">
			<div className="w-full max-w-5xl lg1:max-w-[1044px] xl:max-w-[1110px] xl1:max-w-[1154px] 2xl:max-w-screen-2xl mx-auto flex items-center justify-center py-[105px]">
				<div className="mx-auto w-full space-y-[42px] max-w-[1538px] bg-champagne-lightest-blue rounded-[40px] px-[24px] py-[52px] lg1:px-[86px] lg1:py-[44px] xl:px-[92px] xl:py-[47px] xl1:px-[95px] xl1:py-[48px] 2xl:px-[127px] 2xl:py-[89px] flex flex-col lg1:flex-row justify-between">
					<div className="space-y-[19px] flex flex-col relative lg1:max-w-[289px] xl:max-w-[307px] xl1:max-w-[319px] 2xl:max-w-[333px]">
						<h1 className=" text-[47px] leading-[47px] text-black xl:text-[51px] xl:leading-[51px] lg1:text-[48px] lg1:leading-[48px] xl1:text-[52px] xl1:leading-[52px] 2xl:text-[71px] 2xl:leading-[71px] font-anton">
							Who are Champagne Champion
						</h1>

						<p className="max-w-[426px] text-[20px] leading-[20px] font-medium text-[#6F6F6F]">
							Champions are Champagne’s Campus Ambassadors who are
							working with the team to promote, market and
							evangelize the app at their respective colleges.
							Champions are the main go to person on campus and
							make the campus come alive in the Champagne app.
						</p>
					</div>

					<div className="grid grid-cols-2 gap-[25px] overflow-hidden">
						<div
							className="col-span-2 flex flex-row gap-[25px] overflow-x-scroll hide-scrollbar lg1:hidden desktop-scroll"
							ref={targetRef as any}
							id="desktop-scroll-mobile-1"
						>
							<div className="shrink-0 justify-end pl-[34px] pr-[46px] pb-[33px] flex flex-col w-[310px] h-[276px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-[#C1FDFE] rounded-[29px] relative">
								<h1 className="text-[30px] leading-[30px] font-anton">
									Rainmakers
								</h1>
								<p className="text-[13px] leading-[13px] font-medium mt-[5px]">
									You are an irate connector who likes to
									socialize, hobnob and pitch ideas and
									products to potential users.
								</p>
								<Image
									alt="Heart eyes"
									src="/images/emojis/shades.png"
									width="47"
									height="47"
									className="top-2 right-2 absolute"
								/>
							</div>
							<div className="shrink-0 justify-end pl-[34px] pr-[46px] pb-[33px] flex flex-col w-[310px] h-[276px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-[#C1FDFE] rounded-[29px] relative">
								<h1 className="text-[30px] leading-[30px] font-anton">
									Event Organizers & Hosts
								</h1>
								<p className="text-[13px] leading-[13px] font-medium mt-[5px]">
									You find bringing people together enjoyable.
									You are able to come up with ideas for
									classy events, organize and host it and
									minimal budget.
								</p>
								<Image
									alt="Heart eyes"
									src="/images/emojis/mask-mic.png"
									width="76"
									height="47"
									className="top-2 right-2 absolute"
								/>
							</div>
							<div className="shrink-0 justify-end pl-[34px] pr-[46px] pb-[33px] flex flex-col w-[310px] h-[276px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-[#C1FDFE] rounded-[29px] relative">
								<h1 className="text-[30px] leading-[30px] font-anton">
									Content Creators
								</h1>
								<p className="text-[13px] leading-[13px] font-medium mt-[5px]">
									You enjoy creating contents especially video
									contents and posting them on social media
									platforms like TikTok, SnapChat,Instagram
									and TikTok.
								</p>
								<Image
									alt="Heart eyes"
									src="/images/emojis/camera.png"
									width="47"
									height="47"
									className="top-2 right-2 absolute"
								/>
							</div>
							<div className="shrink-0 justify-end pl-[34px] pr-[46px] pb-[33px] flex flex-col w-[310px] h-[276px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-[#C1FDFE] rounded-[29px] relative">
								<h1 className="text-[30px] leading-[30px] font-anton">
									App Promoters & Marketers
								</h1>
								<p className="text-[13px] leading-[13px] font-medium mt-[5px]">
									You are an early adopter of softwares
									especially social apps and can speak to
									their unique features. You like posting and
									marketing apps on social media platforms. It
									is even better if you have some digital
									marketing or social media management
									experience
								</p>
								<Image
									alt="Heart eyes"
									src="/images/emojis/phone.png"
									width="47"
									height="47"
									className="top-2 right-2 absolute"
								/>
							</div>
							<div className="shrink-0 justify-end pl-[34px] pr-[46px] pb-[33px] flex flex-col w-[310px] h-[276px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-[#C1FDFE] rounded-[29px] relative">
								<h1 className="text-[30px] leading-[30px] font-anton">
									Community Builders
								</h1>
								<p className="text-[13px] leading-[13px] font-medium mt-[5px]">
									You must be someone who is excited about
									building, managing and leading communities
									of people to perform specific tasks. Growing
									an engaged community brings you joy and
									happiness.You have what it takes to start
									such a community from scratch with little or
									no supervision
								</p>
								<Image
									alt="Heart eyes"
									src="/images/emojis/camera.png"
									width="47"
									height="47"
									className="top-2 right-2 absolute"
								/>
							</div>
							<div className="shrink-0 justify-end pl-[34px] pr-[46px] pb-[33px] flex flex-col w-[310px] h-[276px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-[#C1FDFE] rounded-[29px] relative">
								<h1 className="text-[30px] leading-[30px] font-anton">
									Product Evangelists
								</h1>
								<p className="text-[13px] leading-[13px] font-medium mt-[5px]">
									Are you excited about pitching and promoting
									new products to new users? If yes, then this
									program is for you! How would feel to have
									100% of your college mates on Champagne app
									because of YOU?
								</p>
								<Image
									alt="Heart eyes"
									src="/images/emojis/phone.png"
									width="47"
									height="47"
									className="top-2 right-2 absolute"
								/>
							</div>
						</div>
						<div
							className={`
							scroll-smooth col-span-2 flex-row overflow-x-scroll hide-scrollbar 
							hidden lg1:flex space-x-[25px] lg1:max-w-[491px] xl:max-w-[519px] 
							xl1:max-w-[539px] 2xl:max-w-[711px] transform duration-500 ease-in-out
							
							`}
							ref={targetRef as any}
							id="desktop-scroll-desktop"
						>
							<div className="flex flex-col space-y-[25px]">
								<div className="justify-end pl-[34px] pr-[46px] pb-[33px] flex flex-col shrink-0 w-[276px] h-[301px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-[#C1FDFE] rounded-[29px] relative">
									<h1 className="lg1:text-[23px] lg1:leading-[23px] xl:text-[25px] xl:leading-[25px] 2xl:text-[35px] 2xl:leading-[35px] font-anton">
										Rainmakers
									</h1>
									<p className="text-[10px] leading-[10px] font-medium mt-[5px]">
										You are an irate connector who likes to
										socialize, hobnob and pitch ideas and
										products to potential users.
									</p>
									<Image
										alt="Heart eyes"
										src="/images/emojis/shades.png"
										width="47"
										height="47"
										className="top-2 right-2 absolute"
									/>
								</div>
								<div className="justify-end pl-[34px] pr-[46px] pb-[33px] flex flex-col shrink-0 w-[276px] h-[301px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-[#C1FDFE] rounded-[29px] relative">
									<h1 className="lg1:text-[23px] lg1:leading-[23px] xl:text-[25px] xl:leading-[25px] 2xl:text-[35px] 2xl:leading-[35px] font-anton">
										Event Organizers & Hosts
									</h1>
									<p className="text-[10px] leading-[10px] font-medium mt-[5px]">
										You find bringing people together
										enjoyable. You are able to come up with
										ideas for classy events, organize and
										host it and minimal budget.
									</p>
									<Image
										alt="Heart eyes"
										src="/images/emojis/mask-mic.png"
										width="76"
										height="47"
										className="top-2 right-2 absolute"
									/>
								</div>{" "}
							</div>
							<div className="flex flex-col space-y-[25px]">
								<div className="justify-end pl-[34px] pr-[46px] pb-[33px] flex flex-col shrink-0 w-[276px] h-[301px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-[#C1FDFE] rounded-[29px] relative">
									<h1 className="lg1:text-[23px] lg1:leading-[23px] xl:text-[25px] xl:leading-[25px] 2xl:text-[35px] 2xl:leading-[35px] font-anton">
										Content Creators
									</h1>
									<p className="text-[10px] leading-[10px] font-medium mt-[5px]">
										You enjoy creating contents especially
										video contents and posting them on
										social media platforms like TikTok,
										SnapChat,Instagram and TikTok.
									</p>
									<Image
										alt="Heart eyes"
										src="/images/emojis/camera.png"
										width="47"
										height="47"
										className="top-2 right-2 absolute"
									/>
								</div>{" "}
								<div className="justify-end pl-[34px] pr-[46px] pb-[33px] flex flex-col shrink-0 w-[276px] h-[301px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-[#C1FDFE] rounded-[29px] relative">
									<h1 className="lg1:text-[23px] lg1:leading-[23px] xl:text-[25px] xl:leading-[25px] 2xl:text-[35px] 2xl:leading-[35px] font-anton">
										App Promoters & Marketers
									</h1>
									<p className="text-[10px] leading-[10px] font-medium mt-[5px]">
										You are an early adopter of softwares
										especially social apps and can speak to
										their unique features. You like posting
										and marketing apps on social media
										platforms. It is even better if you have
										some digital marketing or social media
										management experience
									</p>
									<Image
										alt="Heart eyes"
										src="/images/emojis/phone.png"
										width="47"
										height="47"
										className="top-2 right-2 absolute"
									/>
								</div>{" "}
							</div>
							<div className="flex flex-col space-y-[25px]">
								<div className="justify-end pl-[34px] pr-[46px] pb-[33px] flex flex-col shrink-0 w-[276px] h-[301px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-[#C1FDFE] rounded-[29px] relative">
									<h1 className="lg1:text-[23px] lg1:leading-[23px] xl:text-[25px] xl:leading-[25px] 2xl:text-[35px] 2xl:leading-[35px] font-anton">
										Community Builders
									</h1>
									<p className="text-[10px] leading-[10px] font-medium mt-[5px]">
										You must be someone who is excited about
										building, managing and leading
										communities of people to perform
										specific tasks. Growing an engaged
										community brings you joy and
										happiness.You have what it takes to
										start such a community from scratch with
										little or no supervision
									</p>
									<Image
										alt="Heart eyes"
										src="/images/emojis/camera.png"
										width="47"
										height="47"
										className="top-2 right-2 absolute"
									/>
								</div>{" "}
								<div className="justify-end pl-[34px] pr-[46px] pb-[33px] flex flex-col shrink-0 w-[276px] h-[301px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-[#C1FDFE] rounded-[29px] relative">
									<h1 className="lg1:text-[23px] lg1:leading-[23px] xl:text-[25px] xl:leading-[25px] 2xl:text-[35px] 2xl:leading-[35px] font-anton">
										Product Evangelists
									</h1>
									<p className="text-[10px] leading-[10px] font-medium mt-[5px]">
										Are you excited about pitching and
										promoting new products to new users? If
										yes, then this program is for you! How
										would feel to have 100% of your college
										mates on Champagne app because of YOU?
									</p>
									<Image
										alt="Heart eyes"
										src="/images/emojis/phone.png"
										width="47"
										height="47"
										className="top-2 right-2 absolute"
									/>
								</div>{" "}
							</div>
						</div>
						<div className="col-span-2 flex flex-row items-center justify-center lg1:justify-end">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="21.277"
								height="31.737"
								viewBox="0 0 21.277 31.737"
								className="cursor-pointer"
								onClick={() => {
									// check if the screen size is mobile
									if (window.innerWidth < 768) {
										// scroll the desktop-scroll div to the left
										// @ts-ignore
										document
											.getElementById(
												"desktop-scroll-mobile-1"
											)
											.scrollBy({
												left: -335,
												behavior: "smooth",
											});
										return;
									}

									console.log(
										document.getElementById(
											"desktop-scroll"
										)
									);

									// scroll the desktop-scroll div to the left
									// @ts-ignore
									document
										.getElementById(
											"desktop-scroll-desktop"
										)
										.scrollBy({
											left:
												-(targetRef.current! as any)
													.offsetWidth - 25,
											behavior: "smooth",
										});
								}}
							>
								<path
									id="Path_14570"
									data-name="Path 14570"
									d="M0,0S11.644,9.424,11.644,10.115,0,20.478,0,20.478"
									transform="translate(15.644 26.111) rotate(180)"
									fill="none"
									stroke="#c1fdfe"
									stroke-linecap="round"
									stroke-width="8"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="38.998"
								height="8"
								viewBox="0 0 38.998 8"
								className="ml-[19px]"
							>
								<path
									id="Path_14571"
									data-name="Path 14571"
									d="M-3660.068,907.839h31"
									transform="translate(3664.068 -903.839)"
									fill="#c1fdfe"
									stroke="#0deef7"
									stroke-linecap="round"
									stroke-width="8"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="6.005"
								height="6.005"
								viewBox="0 0 6.005 6.005"
								className="ml-[13px]"
							>
								<g
									id="Ellipse_1318"
									data-name="Ellipse 1318"
									fill="#d5d5d5"
									stroke="#d5d5d5"
									stroke-width="1"
								>
									<circle
										cx="3.003"
										cy="3.003"
										r="3.003"
										stroke="none"
									/>
									<circle
										cx="3.003"
										cy="3.003"
										r="2.503"
										fill="none"
									/>
								</g>
							</svg>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="21.277"
								height="31.737"
								viewBox="0 0 21.277 31.737"
								className="ml-[19px] cursor-pointer"
								onClick={() => {
									// check if the screen size is mobile
									if (window.innerWidth < 768) {
										// scroll the desktop-scroll div to the left
										// @ts-ignore
										document
											.getElementById(
												"desktop-scroll-mobile-1"
											)
											.scrollBy({
												left: 335,
												behavior: "smooth",
											});
										return;
									}

									// scroll the desktop-scroll div to the left
									// @ts-ignore
									document
										.getElementById(
											"desktop-scroll-desktop"
										)
										.scrollBy({
											left:
												(targetRef.current! as any)
													.offsetWidth + 25,
											behavior: "smooth",
										});

									// set the desktopScrollWidth to the current scroll width
									setDesktopScrollWidth(
										// @ts-ignore
										document.querySelector(
											".desktop-scroll"
										).scrollWidth
									);
								}}
							>
								<path
									id="Path_14569"
									data-name="Path 14569"
									d="M-3597.4,888.2s11.645,9.424,11.645,10.115-11.645,10.363-11.645,10.363"
									transform="translate(3603.032 -882.572)"
									fill="none"
									stroke="#c1fdfe"
									stroke-linecap="round"
									stroke-width="8"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
