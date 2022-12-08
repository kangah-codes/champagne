import { useEffect, useState } from "react";

export default function Champions() {
	return (
		<div className="w-full flex bg-white px-4">
			<div className="w-full max-w-5xl lg1:max-w-[1044px] xl:max-w-[1110px] xl1:max-w-[1154px] 2xl:max-w-screen-2xl mx-auto flex items-center justify-center py-[105px]">
				<div className="mx-auto w-full space-y-[42px] max-w-[1538px] bg-champagne-lightest-blue rounded-[40px] px-[24px] py-[52px] lg1:px-[86px] lg1:py-[44px] xl:px-[92px] xl:py-[47px] xl1:px-[95px] xl1:py-[48px] 2xl:px-[127px] 2xl:py-[89px] flex flex-col lg1:flex-row justify-between">
					<div className="space-y-[11px] flex flex-col relative lg1:max-w-[289px] xl:max-w-[307px] xl1:max-w-[319px] 2xl:max-w-[333px]">
						<h1 className=" text-[47px] leading-[47px] text-black xl:text-[51px] xl:leading-[51px] lg1:text-[48px] lg1:leading-[48px] xl1:text-[52px] xl1:leading-[52px] 2xl:text-[71px] 2xl:leading-[71px] font-anton">
							Who are Champagne Champion
						</h1>

						<p className="max-w-[426px] text-[20px] font-bold text-[#6F6F6F]">
							Champions are Champagne&apos;s Campus Ambassadors
							who are working with the team to promote, market and
							evangelize the app at their respective
							colleges.Champions are the main go to person on
							campus and make the campus come alive in the
							Champagne app.
						</p>
					</div>

					<div className="grid grid-cols-2 gap-[25px] overflow-hidden">
						<div className="col-span-2 flex flex-row gap-[25px] overflow-x-scroll hide-scrollbar lg1:hidden">
							<div className="shrink-0 w-[276px] h-[301px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-[#C1FDFE] rounded-[29px]"></div>
							<div className="shrink-0 w-[276px] h-[301px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-[#C1FDFE] rounded-[29px]"></div>
							<div className="shrink-0 w-[276px] h-[301px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-[#C1FDFE] rounded-[29px]"></div>
							<div className="shrink-0 w-[276px] h-[301px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-[#C1FDFE] rounded-[29px]"></div>
						</div>
						<div
							className={`
								desktop-scroll scroll-smooth col-span-2 flex-row overflow-x-scroll hide-scrollbar 
								hidden lg1:flex space-x-[25px] lg1:max-w-[483px] xl:max-w-[513px] 
								xl1:max-w-[533px] 2xl:max-w-[711px] transform duration-500 ease-in-out
								
							`}
						>
							<div className="flex flex-col space-y-[25px]">
								<div className="shrink-0 w-[276px] h-[301px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-[#C1FDFE] rounded-[29px]"></div>
								<div className="shrink-0 w-[276px] h-[301px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-[#C1FDFE] rounded-[29px]"></div>
							</div>
							<div className="flex flex-col space-y-[25px]">
								<div className="shrink-0 w-[276px] h-[301px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-[#C1FDFE] rounded-[29px]"></div>
								<div className="shrink-0 w-[276px] h-[301px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-[#C1FDFE] rounded-[29px]"></div>
							</div>
							<div className="flex flex-col space-y-[25px]">
								<div className="shrink-0 w-[276px] h-[301px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-[#C1FDFE] rounded-[29px]"></div>
								<div className="shrink-0 w-[276px] h-[301px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-[#C1FDFE] rounded-[29px]"></div>
							</div>
							<div className="flex flex-col space-y-[25px]">
								<div className="shrink-0 w-[276px] h-[301px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-[#C1FDFE] rounded-[29px]"></div>
								<div className="shrink-0 w-[276px] h-[301px] lg1:w-[233px] lg1:h-[213px] xl:w-[247px] xl:h-[227px] xl1:w-[257px] xl1:h-[236px] 2xl:w-[343px] 2xl:h-[315px] bg-[#C1FDFE] rounded-[29px]"></div>
							</div>
						</div>
						<div className="col-span-2 flex flex-row items-center justify-end">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="21.277"
								height="31.737"
								viewBox="0 0 21.277 31.737"
								className="cursor-pointer"
								onClick={() => {
									// get width of desktop-scroll div
									const desktopScrollWidth =
										// @ts-ignore
										document.querySelector(
											".desktop-scroll"
										).scrollWidth;

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
									// get width of desktop-scroll div
									const desktopScrollWidth =
										// @ts-ignore
										document.querySelector(
											".desktop-scroll"
										).scrollWidth;

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
