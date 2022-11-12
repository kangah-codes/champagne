/* eslint-disable @next/next/no-img-element */
import { Transition, Dialog } from "@headlessui/react";
import { LinkIcon } from "@heroicons/react/24/outline";
import { Fragment, useEffect } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../recoil";

const DataForm = () => {
	return (
		<div
			className={`w-full p-10 grid grid-cols-2 mx-auto max-w-7xl gap-10 items-center`}
		>
			<div className="flex flex-col justify-between">
				<img
					className="w-[252px] cursor-pointer"
					src="/images/logo.svg"
					alt="Champagne Logo"
				/>

				<h1 className="text-[47px] 2xl:text-[52px] font-anton leading-[47px] 2xl:leading-[52px] text-white">
					Where your <br />
					friend <br />
					recommends
					<br /> your next date
				</h1>

				<p className="text-white font-bold text-[23px] leading-[23px] mt-5">
					The platform where dating and friendship happen for college
					students
				</p>
			</div>

			<div className="flex flex-col items-center relative space-y-3 max-w-[404px] text-black">
				<input
					type="text"
					className="rounded-[14px] bg-white placeholder-champagne-light-gray text-[14px] leading-[14px] 2xl:text-[20px] leading-[202xl:px] font-bold focus:outline-none py-[22px] px-[32.8px] w-full"
					placeholder="Type your name"
				/>
				<input
					type="email"
					className="rounded-[14px] bg-white placeholder-champagne-light-gray text-[14px] leading-[14px] 2xl:text-[20px] leading-[202xl:px] font-bold focus:outline-none py-[22px] px-[32.8px] w-full"
					placeholder="Email"
				/>
				<div className="flex flex-row space-x-3 w-full">
					<select
						className={`rounded-[14px] bg-white text-black text-[14px] leading-[14px] 2xl:text-[20px] leading-[202xl:px] font-bold focus:outline-none py-[22px] px-[32.8px] col-span-1 w-[112px]`}
					>
						<option>+1</option>
						<option>+2</option>
					</select>
					<input
						type="number"
						className="rounded-[14px] bg-white placeholder-champagne-light-gray text-[14px] leading-[14px] 2xl:text-[20px] leading-[202xl:px] font-bold focus:outline-none py-[22px] px-[32.8px] w-[280px]"
						placeholder="Phone Number"
					/>
				</div>
				<select
					className={`rounded-[14px] bg-white text-black text-[14px] leading-[14px] 2xl:text-[20px] leading-[202xl:px] font-bold focus:outline-none py-[22px] px-[32.8px] col-span-1 w-full`}
					placeholder="Pick your college"
				>
					<option className="text-champagne-light-gray">
						Pick your college
					</option>
					<option>+1</option>
					<option>+2</option>
				</select>
				<select
					className={`rounded-[14px] bg-white text-black text-[14px] leading-[14px] 2xl:text-[20px] leading-[202xl:px] font-bold focus:outline-none py-[22px] px-[32.8px] col-span-1 w-full`}
					placeholder="Pick your year"
				>
					<option>Pick your year</option>
					<option>+1</option>
					<option>+2</option>
				</select>

				<div className="pt-3 w-full">
					<button className="bg-black text-white  rounded-full w-full flex flex-row space-x-2 items-center justify-center py-3 px-6 text-base font-black text-[14px] leading-[14px] 2xl:text-[20px] font-anton 2xl:leading-[20px]">
						Done
					</button>
				</div>
			</div>
		</div>
	);
};

const SuccessForm = () => {
	return (
		<div className="flex flex-col 2xl:flex-row p-5 2xl:p-14 w-full">
			<div className="flex flex-col w-full">
				<img
					className="w-[142px] 2xl:w-[252px] cursor-pointer mx-auto 2xl:mx-0"
					src="/images/logo.svg"
					alt="Champagne Logo"
				/>

				<h1 className="text-[47px] 2xl:text-[52px] font-anton leading-[47px] 2xl:leading-[52px] text-white text-center 2xl:text-left">
					Congratulations
					<br /> for joining the
					<br /> Champagne waitlist.
					<br /> We will keep you
					<br /> abreast of progress!
				</h1>

				<p className="text-white font-bold text-[12px] 2xl:text-[23px] leading-[12px] 2xl:leading-[23px] mt-5 text-center 2xl:text-left">
					Invite your friends to win a bottle of Champagne. The more
					of your friends join, the better your chances
				</p>
			</div>

			<div className="flex flex-col items-center relative space-y-5 mt-8 2xl:my-0">
				<div className="w-[90%] 2xl:w-[386px] h-[278px] 2x:h-[409px] p-5 rounded-[14px] bg-champagne-yellow absolute -top-0.5 2xl:-top-2 z-1" />
				<div className="w-full 2xl:w-[404px] h-[278px] 2xl:h-[409px] p-5 rounded-[14px] bg-white flex flex-col justify-between z-10">
					<div className="flex flex-row justify-between w-full">
						<div className="flex flex-row space-x-2">
							<div className="bg-champagne-lighter-gray rounded-full flex flex-row items-center justify-center py-2 px-5 text-base font-black">
								<LinkIcon className="text-champagne-light-gray w-5 h-5" />
								<p className="text-black text-[10px] leading-[10px] 2xl:text-[16px] font-anton 2xl:leading-[16px]">
									Copy Card Link
								</p>
							</div>
							<div className="bg-champagne-lighter-gray rounded-full flex flex-row items-center justify-center py-2 px-5 text-base font-black">
								<img
									className="w-[15px] h-[15px] 2xl:w-[28px] 2xl:h-[28px] cursor-pointer"
									src="/images/emojis/dice.png"
									alt="Champagne Logo"
								/>
							</div>
						</div>

						<img
							className="w-[80px] 2xl:w-[103px] cursor-pointer"
							src="/images/logo.svg"
							alt="Champagne Logo"
						/>
					</div>

					<div>
						<h1 className="text-[29px] leading-[29px] 2xl:text-[44px] font-anton 2xl:leading-[44px] text-black">
							Checkout the most eligible{" "}
							<span className="text-champagne-light-blue">
								bachelors
							</span>{" "}
							&{" "}
							<span className="text-champagne-pink">
								bachelorettes
							</span>{" "}
							in Stanford University
						</h1>
					</div>
				</div>

				<div className="max-w-sm">
					<p className="text-white font-bold text-[14px] leading-[14px] text-center">
						Share our this card on your social or send this card to
						a friend In your contact. You may win a bottle of
						BeSocial Champagne
					</p>
				</div>

				<div className="flex flex-row space-x-3">
					<div className="bg-black text-white rounded-full flex flex-row space-x-2 items-center justify-center py-3 px-6 text-base font-black">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18.725"
							height="17.604"
							viewBox="0 0 18.725 17.604"
						>
							<path
								id="Icon_awesome-snapchat-ghost"
								data-name="Icon awesome-snapchat-ghost"
								d="M18.682,14.878c-.191.445-1,.771-2.463,1a6.859,6.859,0,0,0-.238.876.423.423,0,0,1-.444.324h-.011c-.344,0-.7-.158-1.421-.158a2.894,2.894,0,0,0-2.057.753,4.119,4.119,0,0,1-2.707,1,4.2,4.2,0,0,1-2.665-1,2.891,2.891,0,0,0-2.057-.753,13.813,13.813,0,0,0-1.421.173.434.434,0,0,1-.454-.331,6.774,6.774,0,0,0-.239-.882C1.749,15.761.044,15.464,0,14.7a.389.389,0,0,1,.325-.4,5.5,5.5,0,0,0,3.739-3.143l.009-.019a.831.831,0,0,0,.09-.686c-.185-.435-.983-.591-1.318-.724-.867-.343-.988-.736-.937-1.006a.941.941,0,0,1,1.207-.565,2.093,2.093,0,0,0,.861.23.746.746,0,0,0,.364-.079c-.075-1.314-.26-3.192.208-4.241A4.982,4.982,0,0,1,9.173,1.081l.37,0a4.948,4.948,0,0,1,4.634,2.986c.467,1.048.283,2.918.208,4.243a.717.717,0,0,0,.314.078,2.185,2.185,0,0,0,.807-.229.99.99,0,0,1,.749,0h0a.76.76,0,0,1,.57.654c.007.356-.312.664-.946.915-.077.031-.172.061-.272.092-.358.114-.9.285-1.047.632a.831.831,0,0,0,.09.686l.009.019A5.5,5.5,0,0,0,18.4,14.3.4.4,0,0,1,18.682,14.878Z"
								transform="translate(0 -1.078)"
								fill="#fff"
							/>
						</svg>

						<p className="text-[14px] leading-[14px] 2xl:text-[20px] font-anton 2xl:leading-[20px]">
							Share
						</p>
					</div>

					<div className="bg-black text-white rounded-full flex flex-row space-x-2 items-center justify-center py-3 px-6 text-base font-black">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="17.145"
							height="17.139"
							viewBox="0 0 17.145 17.139"
						>
							<path
								id="Icon_awesome-instagram"
								data-name="Icon awesome-instagram"
								d="M8.568,6.413a4.394,4.394,0,1,0,4.394,4.394A4.387,4.387,0,0,0,8.568,6.413Zm0,7.251a2.857,2.857,0,1,1,2.857-2.857A2.862,2.862,0,0,1,8.568,13.664Zm5.6-7.431a1.025,1.025,0,1,1-1.025-1.025A1.023,1.023,0,0,1,14.167,6.233Zm2.91,1.04a5.072,5.072,0,0,0-1.384-3.591A5.106,5.106,0,0,0,12.1,2.3c-1.415-.08-5.656-.08-7.071,0A5.1,5.1,0,0,0,1.439,3.679,5.089,5.089,0,0,0,.055,7.27c-.08,1.415-.08,5.656,0,7.071a5.072,5.072,0,0,0,1.384,3.591,5.112,5.112,0,0,0,3.591,1.384c1.415.08,5.656.08,7.071,0a5.072,5.072,0,0,0,3.591-1.384,5.106,5.106,0,0,0,1.384-3.591c.08-1.415.08-5.653,0-7.068ZM15.25,15.86a2.892,2.892,0,0,1-1.629,1.629c-1.128.447-3.805.344-5.052.344s-3.928.1-5.052-.344A2.892,2.892,0,0,1,1.887,15.86c-.447-1.128-.344-3.805-.344-5.052s-.1-3.928.344-5.052A2.892,2.892,0,0,1,3.516,4.126c1.128-.447,3.805-.344,5.052-.344s3.928-.1,5.052.344A2.892,2.892,0,0,1,15.25,5.755c.447,1.128.344,3.805.344,5.052S15.7,14.735,15.25,15.86Z"
								transform="translate(0.006 -2.238)"
								fill="#fff"
							/>
						</svg>

						<p className="text-[14px] leading-[14px] 2xl:text-[20px] font-anton 2xl:leading-[20px]">
							Share
						</p>
					</div>

					<div className="bg-black text-white rounded-full flex flex-row space-x-2 items-center justify-center py-3 px-6 text-base font-black">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="17.145"
							height="17.139"
							viewBox="0 0 17.145 17.139"
						>
							<path
								id="Icon_awesome-instagram"
								data-name="Icon awesome-instagram"
								d="M8.568,6.413a4.394,4.394,0,1,0,4.394,4.394A4.387,4.387,0,0,0,8.568,6.413Zm0,7.251a2.857,2.857,0,1,1,2.857-2.857A2.862,2.862,0,0,1,8.568,13.664Zm5.6-7.431a1.025,1.025,0,1,1-1.025-1.025A1.023,1.023,0,0,1,14.167,6.233Zm2.91,1.04a5.072,5.072,0,0,0-1.384-3.591A5.106,5.106,0,0,0,12.1,2.3c-1.415-.08-5.656-.08-7.071,0A5.1,5.1,0,0,0,1.439,3.679,5.089,5.089,0,0,0,.055,7.27c-.08,1.415-.08,5.656,0,7.071a5.072,5.072,0,0,0,1.384,3.591,5.112,5.112,0,0,0,3.591,1.384c1.415.08,5.656.08,7.071,0a5.072,5.072,0,0,0,3.591-1.384,5.106,5.106,0,0,0,1.384-3.591c.08-1.415.08-5.653,0-7.068ZM15.25,15.86a2.892,2.892,0,0,1-1.629,1.629c-1.128.447-3.805.344-5.052.344s-3.928.1-5.052-.344A2.892,2.892,0,0,1,1.887,15.86c-.447-1.128-.344-3.805-.344-5.052s-.1-3.928.344-5.052A2.892,2.892,0,0,1,3.516,4.126c1.128-.447,3.805-.344,5.052-.344s3.928-.1,5.052.344A2.892,2.892,0,0,1,15.25,5.755c.447,1.128.344,3.805.344,5.052S15.7,14.735,15.25,15.86Z"
								transform="translate(0.006 -2.238)"
								fill="#fff"
							/>
						</svg>

						<p className="text-[14px] leading-[14px] 2xl:text-[20px] font-anton 2xl:leading-[20px]">
							Share
						</p>
					</div>

					<div className="bg-black text-white rounded-full flex flex-row space-x-2 items-center justify-center py-3 px-6 text-base font-black">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="21.203"
							height="21.203"
							viewBox="0 0 21.203 21.203"
						>
							<path
								id="Icon_feather-message-square"
								data-name="Icon feather-message-square"
								d="M22.7,16.635a2.023,2.023,0,0,1-2.023,2.023H8.545L4.5,22.7V6.523A2.023,2.023,0,0,1,6.523,4.5H20.68A2.023,2.023,0,0,1,22.7,6.523Z"
								transform="translate(-3 -3)"
								fill="none"
								stroke="#fff"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="3"
							/>
						</svg>

						<p className="text-[14px] leading-[14px] 2xl:text-[20px] font-anton 2xl:leading-[20px] truncate">
							Share with friends
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default function Modal() {
	const [isOpen, setIsOpen] = useRecoilState(modalState);

	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog
				as="div"
				className="fixed inset-0 z-50 overflow-y-auto"
				onClose={() => setIsOpen(false)}
			>
				<div className="min-h-screen px-4 text-center">
					<Dialog.Overlay className="fixed inset-0 backdrop-brightness-50 backdrop-filter" />

					{/* This element is to trick the browser into centering the modal contents. */}
					<span
						className="inline-block h-screen align-middle"
						aria-hidden="true"
					>
						&#8203;
					</span>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<div
							className={`
									my-8 inline-block w-full max-w-[85rem] transform overflow-hidden 
									rounded-[29px] 2xl:rounded-[53px] bg-gradient-to-br from-champagne-pink via-champagne-light-blue to-champagne-green 
									text-left align-middle shadow-xl transition-all relative
								`}
						>
							<span
								className="rounded-full bg-white flex items-center w-[42px] h-[42px] absolute right-6 top-6 cursor-pointer"
								onClick={() => setIsOpen(false)}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="42"
									height="42"
									viewBox="0 0 42 42"
								>
									<path
										id="Path_14562"
										data-name="Path 14562"
										d="M21,0A21,21,0,1,1,0,21,21,21,0,0,1,21,0Z"
										fill="#fff"
									/>
									<line
										id="Line_50"
										data-name="Line 50"
										x2="13.413"
										y2="13.413"
										transform="translate(14.381 14.48)"
										fill="none"
										stroke="#000"
										stroke-linecap="round"
										stroke-width="5"
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
										stroke-width="5"
									/>
								</svg>
							</span>
							<SuccessForm />
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	);
}
