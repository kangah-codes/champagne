/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { LinkIcon } from "@heroicons/react/24/outline";
import { useRecoilState } from "recoil";
import { modalState } from "../../recoil";
import useOutsideClickRef from "@rooks/use-outside-click-ref";

const NavBar = () => {
	const [isOpen, setIsOpen] = useRecoilState(modalState);
	const [path, setPath] = useState("");

	const [menu1, setMenu1] = useState(false);

	const closeMenu1 = () => {
		setMenu1(false);
	};

	const [ref1] = useOutsideClickRef(closeMenu1);

	useEffect(() => {
		// get current path
		setPath(window.location.pathname);
		console.log(path);
	}, []);

	return (
		<div className="relative">
			<div
				className={`relative navbar border-b bg-white transition duration-500`}
				style={{ zIndex: 99999999 }}
			>
				<div
					style={{ maxWidth: "100rem" }}
					className={`mx-auto px-4 relative ${menu1 && "hidden"}`}
				>
					<nav className="items-center flex justify-between w-full max-w-[866px] xl:max-w-[923px] xl1:max-w-[975px] 2xl:max-w-screen-2xl mx-auto lg:justify-start lg:space-x-10">
						<div className="flex">
							<Link href="/">
								<img
									className="w-[152px] lg1:w-[186px] 2xl:w-[252px] cursor-pointer"
									src="/images/logo.png"
									alt="Champagne Logo"
								/>
							</Link>
						</div>
						<div className="flex items-center justify-end lg:flex-1 lg:w-0 flex-row space-x-2 cursor-pointer">
							<button
								className={`
									border border-champagne-pink rounded-full flex items-center justify-center py-2 px-4 2xl:py-4 2xl:px-12
									text-champagne-pink text-base font-black text-[10px] lg1:text-[13px] 2xl:text-[20px]
									${path === "/leaderboard" ? "hidden lg1:block" : "hidden"}
								`}
								onClick={() => setIsOpen(true)}
							>
								Share
							</button>
							<button
								className={`bg-champagne-pink rounded-full flex items-center justify-center py-2 px-4 2xl:py-4 2xl:px-12 text-white text-base font-black text-[10px] lg1:text-[13px] 2xl:text-[20px]`}
								onClick={() => setIsOpen(true)}
							>
								Join Waitlist
							</button>
							<Link href="/leaderboard">
								<div
									className={`
										bg-champagne-pink rounded-full items-center justify-center py-2 px-4 2xl:py-4 2xl:px-12 text-white text-base font-black text-[10px] lg1:text-[13px] 2xl:text-[20px]\
										${path === "/leaderboard" ? "hidden" : "hidden lg1:block"}
									`}
								>
									<p className="my-auto">
										Activate your campus
									</p>
								</div>
							</Link>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="25.075"
								height="21.178"
								viewBox="0 0 25.075 21.178"
								className="block lg1:hidden"
								onClick={() => setMenu1(!menu1)}
							>
								<g
									id="Group_3655"
									data-name="Group 3655"
									transform="translate(-333.425 -77.911)"
								>
									<path
										id="Path_3350"
										data-name="Path 3350"
										d="M12561.943,1221.888h22.075"
										transform="translate(-12227.019 -1142.477)"
										fill="none"
										stroke="#000"
										stroke-linecap="round"
										strokeWidth="3"
									/>
									<path
										id="Path_3351"
										data-name="Path 3351"
										d="M12561.943,1221.888h22.075"
										transform="translate(-12227.019 -1133.388)"
										fill="none"
										stroke="#000"
										stroke-linecap="round"
										strokeWidth="3"
									/>
									<path
										id="Path_3352"
										data-name="Path 3352"
										d="M12561.943,1221.888h22.075"
										transform="translate(-12227.019 -1124.299)"
										fill="none"
										stroke="#000"
										stroke-linecap="round"
										strokeWidth="3"
									/>
								</g>
							</svg>
						</div>
					</nav>
				</div>
			</div>

			{menu1 && (
				<div className="fixed inset-0 backdrop-brightness-50 backdrop-filter" />
			)}
			<Transition
				show={menu1}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0"
				enterTo="transform opacity-100"
				leave="transition ease-in duration-100"
				leaveFrom="transform opacity-100"
				leaveTo="transform opacity-0"
			>
				<div
					ref={ref1}
					onMouseEnter={() => setMenu1(true)}
					onMouseLeave={() => setMenu1(false)}
					className="absolute left-0 -top-0 bg-white pb-[20px] sm:py-[33px] transform px-2 xs:px-0 w-full"
					style={{ zIndex: 99999999999999 }}
				>
					<span
						className="rounded-full bg-champagne-yellow flex items-center w-[42px] h-[42px] absolute right-6 top-6 cursor-pointer"
						onClick={() => setMenu1(false)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="42"
							height="42"
							viewBox="0 0 42 42"
						>
							{/* <path
								id="Path_14562"
								data-name="Path 14562"
								d="M21,0A21,21,0,1,1,0,21,21,21,0,0,1,21,0Z"
								fill="#fff"
							/> */}
							<line
								id="Line_50"
								data-name="Line 50"
								x2="13.413"
								y2="13.413"
								transform="translate(14.381 14.48)"
								fill="none"
								stroke="#000"
								stroke-linecap="round"
								strokeWidth="5"
							/>
							<line
								id="Line_51"
								data-name="Line 51"
								x1="13.586"
								y2="13.785"
								transform="translate(14.207 14.107)"
								fill="none"
								stroke="#000"
								stroke-linecap="round"
								strokeWidth="5"
							/>
						</svg>
					</span>
					<div className="overflow-hidden">
						<div className="relative flex flex-col items-center space-y-[33px] mt-[32.4px]">
							<div className="flex flex-row-reverse"></div>
							<div className="flex flex-col items-center">
								<img
									className="w-[152px] xl:w-[252px] cursor-pointer"
									src="/images/logo.png"
									alt="Champagne Logo"
								/>

								<h1 className="text-[40px] leading-[40px] sm:text-[52px] sm:leading-[52px] font-anton text-center text-black w-full px-[35px]">
									Where your <br />
									friends
									<br /> recommend{" "}
									<br className="block sm:hidden" /> your next
									date{" "}
								</h1>
								<p className="text-black font-bold text-[14px] leading-[14px] mt-5 text-center max-w-xs">
									The platform where dating and friendship
									happen for college students
								</p>
							</div>
							<div className="flex flex-col space-y-[11px] w-full px-4">
								<button
									className="bg-champagne-pink rounded-full flex items-center justify-center py-4 w-full text-white text-base font-black text-[15px]"
									onClick={() => setIsOpen(true)}
								>
									Join Waitlist
								</button>
								<Link href="/leaderboard">
									<div className="bg-champagne-pink rounded-full items-center justify-center py-4 w-full text-white text-base font-black flex text-[15px]">
										<p className="my-auto">
											Activate your campus
										</p>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</Transition>
		</div>
	);
};

export default NavBar;
