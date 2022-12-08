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
					<div className="flex flex-col gap-[25px] lg1:max-w-[482px] xl:max-w-[512px] xl1:max-w-[533px] 2xl:max-w-[711px] w-full">
						<div className="col-span-2 flex flex-row gap-[25px] overflow-x-scroll hide-scrollbar lg1:hidden desktop-scroll">
							<div className="shrink-0 w-[310px] h-[276px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-champagne-pink rounded-[29px]"></div>
							<div className="shrink-0 w-[310px] h-[276px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-champagne-pink rounded-[29px]"></div>
							<div className="shrink-0 w-[310px] h-[276px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-champagne-pink rounded-[29px]"></div>
							<div className="shrink-0 w-[310px] h-[276px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-champagne-pink rounded-[29px]"></div>
						</div>
						<div
							className={`
								desktop-scroll scroll-smooth col-span-2 flex-row overflow-x-scroll hide-scrollbar 
								hidden lg1:flex space-x-[25px] lg1:max-w-[483px] xl:max-w-[513px] 
								xl1:max-w-[533px] 2xl:max-w-[711px] 
								
							`}
						>
							<div className="flex flex-col space-y-[25px]">
								<div className="shrink-0 w-[276px] h-[301px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-champagne-pink rounded-[29px]"></div>
								<div className="shrink-0 w-[276px] h-[301px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-champagne-pink rounded-[29px]"></div>
							</div>
							<div className="flex flex-col space-y-[25px]">
								<div className="shrink-0 w-[276px] h-[301px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-champagne-pink rounded-[29px]"></div>
								<div className="shrink-0 w-[276px] h-[301px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-champagne-pink rounded-[29px]"></div>
							</div>
							<div className="flex flex-col space-y-[25px]">
								<div className="shrink-0 w-[276px] h-[301px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-champagne-pink rounded-[29px]"></div>
								<div className="shrink-0 w-[276px] h-[301px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-champagne-pink rounded-[29px]"></div>
							</div>
							<div className="flex flex-col space-y-[25px]">
								<div className="shrink-0 w-[276px] h-[301px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-champagne-pink rounded-[29px]"></div>
								<div className="shrink-0 w-[276px] h-[301px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-champagne-pink rounded-[29px]"></div>
							</div>
						</div>
						<div className="col-span-2 flex flex-row items-center justify-center lg1:justify-end">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="25.146"
								height="38.54"
								viewBox="0 0 25.146 38.54"
								className="cursor-pointer"
								onClick={() => {
									// check if the screen size is mobile
									if (window.innerWidth < 768) {
										// scroll the desktop-scroll div to the left
										// @ts-ignore
										document
											.querySelector(".desktop-scroll")
											.scrollBy({
												left: -335,
												behavior: "smooth",
											});
										return;
									}

									// scroll the desktop-scroll div to the left
									// @ts-ignore
									document
										.querySelector(".desktop-scroll")
										.scrollBy({
											left: -desktopScrollWidth,
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
								className="ml-[24px]"
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
								className="ml-[17px]"
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
								className="ml-[25px] cursor-pointer"
								onClick={() => {
									// check if the screen size is mobile
									if (window.innerWidth < 768) {
										// scroll the desktop-scroll div to the left
										// @ts-ignore
										document
											.querySelector(".desktop-scroll")
											.scrollBy({
												left: 335,
												behavior: "smooth",
											});
										return;
									}

									// scroll the desktop-scroll div to the left
									// @ts-ignore
									document
										.querySelector(".desktop-scroll")
										.scrollBy({
											left: desktopScrollWidth,
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
						<h1 className="max-w-[414px] text-[47px] leading-[47px] text-black xl:text-[51px] xl:leading-[51px] lg1:text-[48px] lg1:leading-[48px] xl1:text-[52px] xl1:leading-[52px] 2xl:text-[71px] 2xl:leading-[71px] font-anton">
							What are your benefits as a Champion
						</h1>

						<div className="bg-white rounded-full xl:my-auto flex items-center lg1:mt-0 justify-center py-[20px] px-[59px] my-5 lg:mt-14 text-black text-[18px] leading-[18px] lg1:leading-[21px] lg1:text-[21px] xl1:text-[23px] font-black">
							<p className="my-auto">Apply Today</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
