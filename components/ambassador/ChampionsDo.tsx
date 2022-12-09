import Image from "next/image";
import { useRef, useState, useLayoutEffect, useEffect } from "react";

export default function ChampionsDo() {
	const targetRef = useRef();
	const [desktopScrollWidth, setDesktopScrollWidth] = useState(0);

	useLayoutEffect(() => {
		if (targetRef.current) {
			// @ts-ignore
			setDesktopScrollWidth(targetRef.current.offsetWidth);
		}

		// set the middle element to the middle of the scrollbar for the images-slider
		// @ts-ignore
		document.querySelector("#images-slider").scrollLeft =
			// @ts-ignore
			document.querySelector("#images-slider").scrollWidth / 2 -
			// @ts-ignore
			document.querySelector("#images-slider").offsetWidth / 2;
	}, []);

	return (
		<div className="w-full bg-white flex relative pb-[64.3px] lg1:pb-32">
			<div className="w-full mx-auto flex flex-col items-center justify-center">
				<div className="mb-[30px] lg1:mb-[39px] xl1:mb-[49px] 2xl:mb-[55px] flex items-center">
					<h1 className="text-center lg1:text-left max-w-[290px] lg1:max-w-full text-[47px] leading-[47px] text-black xl:text-[51px] xl:leading-[51px] lg1:text-[48px] lg1:leading-[48px] xl1:text-[52px] xl1:leading-[52px] 2xl:text-[71px] 2xl:leading-[71px] font-anton">
						What Do Champions Do?
					</h1>
				</div>
				<div className="flex flex-col">
					<div className="w-screen max-w-[screen]">
						<div
							ref={targetRef as any}
							className="mx-auto w-full flex flex-row space-x-[16px] lg1:space-x-[80px] items-center overflow-x-scroll hide-scrollbar "
							id="images-slider"
						>
							<div className="w-[311px] h-[381px] lg1:w-[1104px] lg1:h-[682px] shrink-0 relative rounded-[24px] lg1:rounded-[32px] overflow-hidden">
								<Image
									className="object-cover"
									fill
									src="/images/content/champions-do.png"
									alt="img"
								/>
							</div>
							<div className="w-[311px] h-[381px] lg1:w-[1104px] lg1:h-[682px] shrink-0 relative rounded-[24px] lg1:rounded-[32px] overflow-hidden">
								<Image
									className="object-cover"
									fill
									src="/images/content/champions-do.png"
									alt="img"
								/>
							</div>
							<div className="w-[311px] h-[381px] lg1:w-[1104px] lg1:h-[682px] shrink-0 relative rounded-[24px] lg1:rounded-[32px] overflow-hidden">
								<Image
									className="object-cover"
									fill
									src="/images/content/champions-do.png"
									alt="img"
								/>
							</div>
						</div>
					</div>

					<div className="flex flex-row items-center mx-auto max-w-[458px] space-x-[11px] lg1:space-x-[28px] mt-[50px] lg1:mt-[62px]">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="51.766"
							height="78.251"
							viewBox="0 0 51.766 78.251"
							className="w-[13px] h-[23px] lg1:w-[51px] lg1:h-[78px] cursor-pointer"
							onClick={() => {
								// check if the screen size is mobile
								if (window.innerWidth <= 768) {
									// scroll the desktop-scroll div to the left
									// @ts-ignore
									document
										.getElementById("images-slider")
										.scrollBy({
											left: -335 - 16,
											behavior: "smooth",
										});
									return;
								}

								if (
									window.innerWidth <= 1024 &&
									window.innerWidth >= 768
								) {
									// scroll the desktop-scroll div to the left
									// @ts-ignore
									document
										.getElementById("images-slider")
										.scrollBy({
											left: -335,
											behavior: "smooth",
										});
									return;
								} else if (window.innerWidth >= 1280) {
									// scroll the desktop-scroll div to the left
									// @ts-ignore
									document
										.getElementById("images-slider")
										.scrollBy({
											left: -1104 - 80,
											behavior: "smooth",
										});
									return;
								}
							}}
						>
							<path
								id="Path_14573"
								data-name="Path 14573"
								d="M0,0S30.092,24.352,30.092,26.139c0,.67-4.232,4.6-9.722,9.435C11.755,43.156,0,52.919,0,52.919"
								transform="translate(39.092 65.593) rotate(180)"
								fill="none"
								stroke="#000"
								stroke-linecap="round"
								stroke-width="18"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="102.062"
							height="13"
							viewBox="0 0 102.062 13"
							className="w-[35px] lg1:w-[102px] h-[5px] lg1:h-[13px]"
						>
							<path
								id="Path_14574"
								data-name="Path 14574"
								d="M-3660.068,907.839h89.062"
								transform="translate(3666.568 -901.339)"
								fill="#c1fdfe"
								stroke="#000"
								stroke-linecap="round"
								stroke-width="13"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="17.253"
							height="17.254"
							viewBox="0 0 17.253 17.254"
							className="w-[6.7px] h-[6.7px] lg1:w-[17px] lg1:h-[17px]"
						>
							<g
								id="Ellipse_1323"
								data-name="Ellipse 1323"
								fill="#d5d5d5"
								stroke="#d5d5d5"
								stroke-width="1"
							>
								<ellipse
									cx="8.627"
									cy="8.627"
									rx="8.627"
									ry="8.627"
									stroke="none"
								/>
								<ellipse
									cx="8.627"
									cy="8.627"
									rx="8.127"
									ry="8.127"
									fill="none"
								/>
							</g>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="17.253"
							height="17.254"
							viewBox="0 0 17.253 17.254"
							className="hidden lg1:block"
						>
							<g
								id="Ellipse_1323"
								data-name="Ellipse 1323"
								fill="#d5d5d5"
								stroke="#d5d5d5"
								stroke-width="1"
							>
								<ellipse
									cx="8.627"
									cy="8.627"
									rx="8.627"
									ry="8.627"
									stroke="none"
								/>
								<ellipse
									cx="8.627"
									cy="8.627"
									rx="8.127"
									ry="8.127"
									fill="none"
								/>
							</g>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="17.253"
							height="17.254"
							viewBox="0 0 17.253 17.254"
							className="hidden lg1:block"
						>
							<g
								id="Ellipse_1323"
								data-name="Ellipse 1323"
								fill="#d5d5d5"
								stroke="#d5d5d5"
								stroke-width="1"
							>
								<ellipse
									cx="8.627"
									cy="8.627"
									rx="8.627"
									ry="8.627"
									stroke="none"
								/>
								<ellipse
									cx="8.627"
									cy="8.627"
									rx="8.127"
									ry="8.127"
									fill="none"
								/>
							</g>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="17.253"
							height="17.254"
							viewBox="0 0 17.253 17.254"
							className="hidden lg1:block"
						>
							<g
								id="Ellipse_1323"
								data-name="Ellipse 1323"
								fill="#d5d5d5"
								stroke="#d5d5d5"
								stroke-width="1"
							>
								<ellipse
									cx="8.627"
									cy="8.627"
									rx="8.627"
									ry="8.627"
									stroke="none"
								/>
								<ellipse
									cx="8.627"
									cy="8.627"
									rx="8.127"
									ry="8.127"
									fill="none"
								/>
							</g>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="17.253"
							height="17.254"
							viewBox="0 0 17.253 17.254"
							className="hidden lg1:block"
						>
							<g
								id="Ellipse_1323"
								data-name="Ellipse 1323"
								fill="#d5d5d5"
								stroke="#d5d5d5"
								stroke-width="1"
							>
								<ellipse
									cx="8.627"
									cy="8.627"
									rx="8.627"
									ry="8.627"
									stroke="none"
								/>
								<ellipse
									cx="8.627"
									cy="8.627"
									rx="8.127"
									ry="8.127"
									fill="none"
								/>
							</g>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="51.765"
							height="78.251"
							viewBox="0 0 51.765 78.251"
							className="w-[13px] h-[23px] lg1:w-[51px] lg1:h-[78px] cursor-pointer"
							onClick={() => {
								// check if the screen size is mobile
								if (window.innerWidth <= 1024) {
									// scroll the desktop-scroll div to the left
									// @ts-ignore
									document
										.getElementById("images-slider")
										.scrollBy({
											left: 335,
											behavior: "smooth",
										});
									return;
								}

								if (window.innerWidth >= 1280) {
									// scroll the desktop-scroll div to the left
									// @ts-ignore
									document
										.getElementById("images-slider")
										.scrollBy({
											left: 1104 + 80,
											behavior: "smooth",
										});
									return;
								}
							}}
						>
							<path
								id="Path_14572"
								data-name="Path 14572"
								d="M-3597.4,888.2s30.092,24.352,30.092,26.139-30.092,26.78-30.092,26.78"
								transform="translate(3610.073 -875.54)"
								fill="none"
								stroke="#000"
								stroke-linecap="round"
								stroke-width="18"
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
}
