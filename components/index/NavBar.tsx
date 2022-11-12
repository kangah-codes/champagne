/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from "next/link";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { LinkIcon } from "@heroicons/react/24/outline";
import { useRecoilState } from "recoil";
import { modalState } from "../../recoil";

const NavBar = () => {
	const [isOpen, setIsOpen] = useRecoilState(modalState);

	return (
		<>
			<div
				className={`relative navbar border-b bg-white transition duration-500`}
				style={{ zIndex: 9999999999 }}
			>
				<div
					style={{ maxWidth: "100rem" }}
					className="mx-auto px-4 relative"
				>
					<nav className="items-center flex justify-between w-full max-w-5xl xl:max-w-7xl xl:max-w-screen-xl mx-auto lg:justify-start lg:space-x-10">
						<div className="flex">
							{/* justify-start lg:w-0 lg:flex-1 */}
							<Link href="/">
								<img
									className="w-[152px] xl:w-[252px] cursor-pointer"
									src="/images/logo.svg"
									alt="Champagne Logo"
								/>
							</Link>
						</div>
						<div className="flex items-center justify-end lg:flex-1 lg:w-0 flex-row space-x-2 cursor-pointer">
							<button
								className="bg-champagne-pink rounded-full flex items-center justify-center py-2 px-4 xl:py-4 xl:px-12 text-white text-base font-black text-[10px] xl:text-[20px]"
								onClick={() => setIsOpen(true)}
							>
								Join Wailist
							</button>
							<Link href="/leaderboard">
								<div className="bg-champagne-pink rounded-full items-center justify-center py-4 px-12 text-white text-base font-black hidden xl:flex">
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
								className="block xl:hidden"
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
										stroke-width="3"
									/>
									<path
										id="Path_3351"
										data-name="Path 3351"
										d="M12561.943,1221.888h22.075"
										transform="translate(-12227.019 -1133.388)"
										fill="none"
										stroke="#000"
										stroke-linecap="round"
										stroke-width="3"
									/>
									<path
										id="Path_3352"
										data-name="Path 3352"
										d="M12561.943,1221.888h22.075"
										transform="translate(-12227.019 -1124.299)"
										fill="none"
										stroke="#000"
										stroke-linecap="round"
										stroke-width="3"
									/>
								</g>
							</svg>
						</div>
					</nav>
				</div>
			</div>
		</>
	);
};

export default NavBar;
