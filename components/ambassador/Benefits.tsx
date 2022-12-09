import { useRef, useState, useLayoutEffect } from "react";

export default function Benefits() {
	const targetRef = useRef();
	const [desktopScrollWidth, setDesktopScrollWidth] = useState(0);

	useLayoutEffect(() => {
		if (targetRef.current) {
			// @ts-ignore
			setDesktopScrollWidth(targetRef.current.offsetWidth);
		}
	}, []);

	return (
		<div className="w-full flex bg-[#FFDDF2] px-4">
			<div className="w-full max-w-5xl lg1:max-w-[1044px] xl:max-w-[1110px] xl1:max-w-[1154px] 2xl:max-w-screen-2xl mx-auto flex items-center justify-center py-[82px]">
				<div className="mx-auto w-full flex flex-col lg1:flex-row lg1:px-[86px] xl:px-[92px] xl1:px-[95px] 2xl:px-[127px] justify-betwween items-center px-[24px]">
					<div className="flex flex-col gap-[25px] lg1:max-w-[491px] xl:max-w-[519px] xl1:max-w-[539px] 2xl:max-w-[711px] w-full">
						<div
							className="col-span-2 flex flex-row gap-[25px] overflow-x-scroll hide-scrollbar lg1:hidden desktop-scroll-mobile-2"
							ref={targetRef as any}
							id="desktop-scroll-mobile-2"
						>
							<div className="shrink-0 justify-end pl-[34px] pr-[46px] pb-[33px] flex flex-col w-[310px] h-[276px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-champagne-pink rounded-[29px] text-white">
								<h1 className="text-[30px] leading-[30px] text-white font-anton">
									Souvenirs & swags
								</h1>
								<p className="text-[13px] leading-[13px] font-medium mt-[5px]">
									All Champions will receive Champagne
									Souvenirs and Swags including Tee Shirts,
									Cups, Banners, bags, books, water bottles
									etc.
								</p>
							</div>
							<div className="shrink-0 justify-end pl-[34px] pr-[46px] pb-[33px] flex flex-col w-[310px] h-[276px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-champagne-pink rounded-[29px] text-white">
								<h1 className="text-[30px] leading-[30px] text-white font-anton">
									Account Promotion
								</h1>
								<p className="text-[13px] leading-[13px] font-medium mt-[5px]">
									As an ambassador, your profile in Champagne
									will be promoted to get more views and
									matches. Be on your way to becoming popular
									in your school.
								</p>
							</div>
							<div className="shrink-0 justify-end pl-[34px] pr-[46px] pb-[33px] flex flex-col w-[310px] h-[276px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-champagne-pink rounded-[29px] text-white">
								<h1 className="text-[30px] leading-[30px] text-white font-anton">
									Shares
								</h1>
								<p className="text-[13px] leading-[13px] font-medium mt-[5px]">
									The top 1000 Champions will receive stock
									options in the Champagne app. Imagine
									receiving an average of $50K when the value
									of Champagne increases to $1B
								</p>
							</div>
							<div className="shrink-0 justify-end pl-[34px] pr-[46px] pb-[33px] flex flex-col w-[310px] h-[276px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-champagne-pink rounded-[29px] text-white">
								<h1 className="text-[30px] leading-[30px] text-white font-anton">
									Resume Credits
								</h1>
								<p className="text-[13px] leading-[13px] font-medium mt-[5px]">
									You can include your role as a Champion on
									your resume. We will provide feedback and
									support whenever needed. We may also offer
									you internship and FT work depending on your
									performance and role availability
								</p>
							</div>
							<div className="shrink-0 justify-end pl-[34px] pr-[46px] pb-[33px] flex flex-col w-[310px] h-[276px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-champagne-pink rounded-[29px] text-white">
								<h1 className="text-[30px] leading-[30px] text-white font-anton">
									Meet other Champions
								</h1>
								<p className="text-[13px] leading-[13px] font-medium mt-[5px]">
									We will organize meetups either in person or
									virtual meetups for all Champions. You get
									the opportunity to meet others ambassadors
									at other campuses
								</p>
							</div>
							<div className="shrink-0 justify-end pl-[34px] pr-[46px] pb-[33px] flex flex-col w-[310px] h-[276px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-champagne-pink rounded-[29px] text-white">
								<h1 className="text-[30px] leading-[30px] text-white font-anton">
									One month subscription credit
								</h1>
								<p className="text-[13px] leading-[13px] font-medium mt-[5px]">
									We will give you one month free credit that
									you can use to activate the premium version
									of the Champagne app
								</p>
							</div>
							<div className="shrink-0 justify-end pl-[34px] pr-[46px] pb-[33px] flex flex-col w-[310px] h-[276px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-champagne-pink rounded-[29px] text-white">
								<h1 className="text-[30px] leading-[30px] text-white font-anton">
									Free access to Champagne events
								</h1>
								<p className="text-[13px] leading-[13px] font-medium mt-[5px]">
									Champagne team will work with our Champions
									to organize events on your campus, each
									ambassador will be given free access to all
									such events
								</p>
							</div>
							<div className="shrink-0 justify-end pl-[34px] pr-[46px] pb-[33px] flex flex-col w-[310px] h-[276px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-champagne-pink rounded-[29px] text-white">
								<h1 className="text-[30px] leading-[30px] text-white font-anton">
									Bragging rights
								</h1>
								<p className="text-[13px] leading-[13px] font-medium mt-[5px]">
									Be the toast of your campus as you hold the
									bragging rights as an ambassador of the
									Champagne app
								</p>
							</div>
						</div>
						<div
							ref={targetRef as any}
							className={`
								scroll-smooth col-span-2 flex-row overflow-x-scroll hide-scrollbar 
								hidden lg1:flex lg1:max-w-[491px] xl:max-w-[519px] 
								xl1:max-w-[539px] 2xl:max-w-[711px] space-x-[25px]
								
							`}
							id="desktop-scroll-desktop-2"
						>
							<div className="flex flex-col space-y-[25px]">
								<div className="lg1:px-[26px] xl:px-[28px] xl1:px-[29px] 2xl:px-[39px] lg1:pb-[27px] xl:pb-[33px] xl1:pb-[38px] 2xl:pb-[53px] space-y-[5px] flex flex-col-reverse shrink-0 w-[276px] h-[301px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-champagne-pink rounded-[29px] text-white">
									<p className="lg1:text-[10px] lg1:leading-[10px] 2xl:text-[15px] 2xl:leading-[15px] font-medium">
										All Champions will receive Champagne
										Souvenirs and Swags including Tee
										Shirts, Cups, Banners, bags, books,
										water bottles etc.
									</p>
									<h1 className=" max-w-[174px] lg1:text-[23px] xl:text-[25px] 2xl:text-[35px] lg1:leading-[23px] xl:leading-[25px] 2xl:leading-[35px] text-white font-anton">
										Souvenirs & swags
									</h1>
								</div>
								<div className="lg1:px-[26px] xl:px-[28px] xl1:px-[29px] 2xl:px-[39px] lg1:pb-[27px] xl:pb-[33px] xl1:pb-[38px] 2xl:pb-[53px] space-y-[5px] flex flex-col-reverse shrink-0 w-[276px] h-[301px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-champagne-pink rounded-[29px] text-white">
									<p className="text-[15px] leading-[15px] font-medium">
										As an ambassador, your profile in
										Champagne will be promoted to get more
										views and matches. Be on your way to
										becoming popular in your school.
									</p>
									<h1 className=" max-w-[174px] lg1:text-[23px] xl:text-[25px] 2xl:text-[35px] lg1:leading-[23px] xl:leading-[25px] 2xl:leading-[35px] text-white font-anton">
										Account Promotion
									</h1>
								</div>
							</div>
							<div className="flex flex-col space-y-[25px]">
								<div className="lg1:px-[26px] xl:px-[28px] xl1:px-[29px] 2xl:px-[39px] lg1:pb-[27px] xl:pb-[33px] xl1:pb-[38px] 2xl:pb-[53px] space-y-[5px] flex flex-col-reverse shrink-0 w-[276px] h-[301px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-champagne-pink rounded-[29px] text-white">
									<p className="lg1:text-[10px] lg1:leading-[10px] 2xl:text-[15px] 2xl:leading-[15px] font-medium">
										The top 1000 Champions will receive
										stock options in the Champagne app.
										Imagine receiving an average of $50K
										when the value of Champagne increases to
										$1B
									</p>
									<h1 className=" max-w-[174px] lg1:text-[23px] xl:text-[25px] 2xl:text-[35px] lg1:leading-[23px] xl:leading-[25px] 2xl:leading-[35px] text-white font-anton">
										Shares
									</h1>
								</div>
								<div className="lg1:px-[26px] xl:px-[28px] xl1:px-[29px] 2xl:px-[39px] lg1:pb-[27px] xl:pb-[33px] xl1:pb-[38px] 2xl:pb-[53px] space-y-[5px] flex flex-col-reverse shrink-0 w-[276px] h-[301px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-champagne-pink rounded-[29px] text-white">
									<p className="lg1:text-[10px] lg1:leading-[10px] 2xl:text-[15px] 2xl:leading-[15px] font-medium">
										You can include your role as a Champion
										on your resume. We will provide feedback
										and support whenever needed. We may also
										offer you internship and FT work
										depending on your performance and role
										availability
									</p>
									<h1 className=" max-w-[174px] lg1:text-[23px] xl:text-[25px] 2xl:text-[35px] lg1:leading-[23px] xl:leading-[25px] 2xl:leading-[35px] text-white font-anton">
										Resume Credits
									</h1>
								</div>
							</div>

							<div className="flex flex-col space-y-[25px]">
								<div className="lg1:px-[26px] xl:px-[28px] xl1:px-[29px] 2xl:px-[39px] lg1:pb-[27px] xl:pb-[33px] xl1:pb-[38px] 2xl:pb-[53px] space-y-[5px] flex flex-col-reverse shrink-0 w-[276px] h-[301px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-champagne-pink rounded-[29px] text-white">
									<p className="lg1:text-[10px] lg1:leading-[10px] 2xl:text-[15px] 2xl:leading-[15px] font-medium">
										We will organize meetups either in
										person or virtual meetups for all
										Champions. You get the opportunity to
										meet others ambassadors at other
										campuses
									</p>
									<h1 className=" max-w-[174px] lg1:text-[23px] xl:text-[25px] 2xl:text-[35px] lg1:leading-[23px] xl:leading-[25px] 2xl:leading-[35px] text-white font-anton">
										Meet Other Champions
									</h1>
								</div>
								<div className="pl-[39px] pr-[27px] lg1:pb-[27px] xl:pb-[33px] xl1:pb-[38px] 2xl:pb-[53px] space-y-[5px] flex flex-col-reverse shrink-0 w-[276px] h-[301px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-champagne-pink rounded-[29px] text-white">
									<p className="lg1:text-[10px] lg1:leading-[10px] 2xl:text-[15px] 2xl:leading-[15px] font-medium">
										We will give you one month free credit
										that you can use to activate the premium
										version of the Champagne app
									</p>
									<h1 className=" max-w-[174px] lg1:text-[23px] xl:text-[25px] 2xl:text-[35px] lg1:leading-[23px] xl:leading-[25px] 2xl:leading-[35px] text-white font-anton">
										One month subscription credit
									</h1>
								</div>
							</div>
							<div className="flex flex-col space-y-[25px]">
								<div className="lg1:px-[26px] xl:px-[28px] xl1:px-[29px] 2xl:px-[39px] lg1:pb-[27px] xl:pb-[33px] xl1:pb-[38px] 2xl:pb-[53px] space-y-[5px] flex flex-col-reverse shrink-0 w-[276px] h-[301px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-champagne-pink rounded-[29px] text-white">
									<p className="lg1:text-[10px] lg1:leading-[10px] 2xl:text-[15px] 2xl:leading-[15px] font-medium">
										Champagne team will work with our
										Champions to organize events on your
										campus, each ambassador will be given
										free access to all such events
									</p>
									<h1 className="w-full lg1:text-[23px] xl:text-[25px] 2xl:text-[35px] lg1:leading-[23px] xl:leading-[25px] 2xl:leading-[35px] text-white font-anton">
										Free access <br />
										to Champagne events
									</h1>
								</div>
								<div className="lg1:px-[26px] xl:px-[28px] xl1:px-[29px] 2xl:px-[39px] lg1:pb-[27px] xl:pb-[33px] xl1:pb-[38px] 2xl:pb-[53px] space-y-[5px] flex flex-col-reverse shrink-0 w-[276px] h-[301px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-champagne-pink rounded-[29px] text-white">
									<p className="lg1:text-[10px] lg1:leading-[10px] 2xl:text-[15px] 2xl:leading-[15px] font-medium">
										Be the toast of your campus as you hold
										the bragging rights as an ambassador of
										the Champagne app
									</p>
									<h1 className=" max-w-[174px] lg1:text-[23px] xl:text-[25px] 2xl:text-[35px] lg1:leading-[23px] xl:leading-[25px] 2xl:leading-[35px] text-white font-anton">
										Bragging rights
									</h1>
								</div>
							</div>
						</div>
						<div className="col-span-2 flex flex-row items-center justify-center lg1:justify-end">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="25.146"
								height="38.54"
								viewBox="0 0 25.146 38.54"
								className="cursor-pointer w-[13px] h-[23px] lg1:w-[25px] lg1:h-[38px]"
								onClick={() => {
									// check if the screen size is mobile
									if (window.innerWidth < 768) {
										// scroll the desktop-scroll-mobile-2 div to the left
										// @ts-ignore
										document
											.getElementById(
												"desktop-scroll-mobile-2"
											)
											.scrollBy({
												left: -335,
												behavior: "smooth",
											});
										return;
									}

									// scroll the desktop-scroll-mobile-2 div to the left
									// @ts-ignore
									document
										.getElementById(
											"desktop-scroll-desktop-2"
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
									id="Path_14576"
									data-name="Path 14576"
									d="M-3597.4,888.2s15.513,12.554,15.513,13.476-15.513,13.806-15.513,13.806"
									transform="translate(-3577.886 921.112) rotate(180)"
									fill="none"
									stroke="#f646b2"
									stroke-linecap="round"
									stroke-width="8"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="49.296"
								height="8"
								viewBox="0 0 49.296 8"
								className="ml-[13px] lg1:ml-[15px] w-[35px] lg1:w-[49px]"
							>
								<path
									id="Path_14577"
									data-name="Path 14577"
									d="M-3660.068,907.839h41.3"
									transform="translate(3664.068 -903.839)"
									fill="#c1fdfe"
									stroke="#f646b2"
									stroke-linecap="round"
									stroke-width="8"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="8"
								height="8"
								viewBox="0 0 8 8"
								className="ml-[13px] lg1:ml-[15px] w-[6px] h-[6px] lg1:w-[8px] lg1:h-[8px]"
							>
								<g
									id="Ellipse_1324"
									data-name="Ellipse 1324"
									fill="#791d56"
									stroke="#7c1d57"
									stroke-width="1"
								>
									<circle cx="4" cy="4" r="4" stroke="none" />
									<circle cx="4" cy="4" r="3.5" fill="none" />
								</g>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="25.146"
								height="38.54"
								viewBox="0 0 25.146 38.54"
								className="ml-[13px] lg1:ml-[15px] cursor-pointer w-[13px] h-[23px] lg1:w-[25px] lg1:h-[38px]"
								onClick={() => {
									// check if the screen size is mobile
									if (window.innerWidth < 768) {
										// scroll the desktop-scroll-mobile-2 div to the left
										// @ts-ignore
										document
											.getElementById(
												"desktop-scroll-mobile-2"
											)
											.scrollBy({
												left: 335,
												behavior: "smooth",
											});
										return;
									}

									console.log(
										"desktopScrollWidth",
										desktopScrollWidth
									);

									// scroll the desktop-scroll-mobile-2 div to the left
									// @ts-ignore
									document
										.getElementById(
											"desktop-scroll-desktop-2"
										)
										.scrollBy({
											left:
												(targetRef.current! as any)
													.offsetWidth + 25,
											behavior: "smooth",
										});
								}}
							>
								<path
									id="Path_14575"
									data-name="Path 14575"
									d="M-3597.4,888.2s15.513,12.554,15.513,13.476-15.513,13.806-15.513,13.806"
									transform="translate(3603.032 -882.572)"
									fill="none"
									stroke="#f646b2"
									stroke-linecap="round"
									stroke-width="8"
								/>
							</svg>
						</div>
					</div>
					<div className="my-auto itens-center space-y-[20px] lg1:space-y-[11px] flex flex-col relative items-start lg1:ml-[82px] xl:ml-[87px] xl1:ml-[90px] 2xl:ml-[120px] order-first lg1:order-last mb-[34px] lg1:my-auto">
						<h1 className=" max-w-[414px] text-[47px] leading-[47px] text-black xl:text-[51px] xl:leading-[51px] lg1:text-[48px] lg1:leading-[48px] xl1:text-[52px] xl1:leading-[52px] 2xl:text-[71px] 2xl:leading-[71px] font-anton">
							What are your benefits as a Champion
						</h1>

						<div className="bg-white rounded-full xl:my-auto flex items-center justify-center py-[20px] px-[59px] my-5 lg1:mt-14 text-black text-[18px] leading-[18px] lg1:leading-[21px] lg1:text-[21px] xl1:text-[23px] font-black">
							<p className="my-auto">Apply Today</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
