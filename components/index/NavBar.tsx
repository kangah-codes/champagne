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
					<nav className="items-center flex justify-between w-full max-w-5xl xl:max-w-7xl 2xl:max-w-screen-xl mx-auto lg:justify-start lg:space-x-10">
						<div className="flex">
							{/* justify-start lg:w-0 lg:flex-1 */}
							<Link href="/">
								<img
									className="w-[252px] cursor-pointer"
									src="/images/logo.svg"
									alt="Champagne Logo"
								/>
							</Link>
						</div>
						<div className="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0 flex-row space-x-2 cursor-pointer">
							<button
								className="bg-champagne-pink rounded-full flex items-center justify-center py-4 px-12 text-white text-base font-black"
								onClick={() => setIsOpen(true)}
							>
								Join Wailist
							</button>
							<Link href="/leaderboard">
								<div className="bg-champagne-pink rounded-full flex items-center justify-center py-4 px-12 text-white text-base font-black">
									<p className="my-auto">
										Activate your campus
									</p>
								</div>
							</Link>
						</div>
					</nav>
				</div>
			</div>
		</>
	);
};

export default NavBar;
