/* eslint-disable @next/next/no-img-element */
import { Transition, Dialog, Listbox, Combobox } from "@headlessui/react";
import { LinkIcon } from "@heroicons/react/24/outline";
import { Fragment, useEffect, useState, useRef } from "react";
import { useRecoilState } from "recoil";
import { formDataState, modalState, reqSuccessfulState } from "../recoil";
import { colleges } from "../utils/data";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import { useVirtualizer } from "@tanstack/react-virtual";
import Link from "next/link";

const people = [
	{ name: "Wade Cooper" },
	{ name: "Arlene Mccoy" },
	{ name: "Devon Webb" },
	{ name: "Tom Cook" },
	{ name: "Tanya Fox" },
	{ name: "Hellen Schmidt" },
];

type Props = {
	name?: string;
	items?: string[];
	label?: string;
	onChange?: (event: { target: any; type?: any }) => Promise<void | boolean>;
	children?: never;
	className: string;
};

function Select({ name, label, items, className, onChange }: Props) {
	const [selected, setSelected] = useState<string>();
	const [query, setQuery] = useState("");
	const btnRef = useRef<HTMLButtonElement>(null);

	const filteredItems =
		query === ""
			? items
			: items?.filter((item: string) =>
					(item ?? "")
						.toLowerCase()
						.replace(/\s+/g, "")
						.includes(query.toLowerCase().replace(/\s+/g, ""))
			  ) ?? [];

	var classes = classNames(
		// "relative w-full cursor-default overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300",
		// "mt-1 block w-full h-9 bg-background-grey border rounded text-base text-dark-grey shadow-sm placeholder-light-grey focus:bg-white focus:outline-none focus:border-accent-purple focus:ring-2 focus:ring-accent-light disabled:bg-light-grey disabled:text-light-grey disabled:border-light-grey disabled:shadow-none invalid:border-red-100 invalid:text-light-grey focus:invalid:border-red-100 focus:invalid:ring-red-100 leading-none border-light-grey",
		className
	);

	return (
		<Combobox
			value={selected}
			onChange={(v) => {
				setSelected(v);
				onChange?.({ target: { name, value: v } });
			}}
		>
			<div className={classes}>
				<Combobox.Input
					onFocus={(e: any) => {
						e.target.select();
						if (!e.relatedTarget) {
							btnRef?.current?.click();
						}
					}}
					className="w-full border-none text-sm leading-5 text-gray-900 focus:outline-none"
					displayValue={(item: string) => item ?? ""}
					onChange={(event) => setQuery(event.target.value)}
				/>
				<Combobox.Button
					ref={btnRef}
					className="absolute inset-y-0 right-0 flex items-center pr-2"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="14.541"
						height="8.314"
						viewBox="0 0 14.541 8.314"
					>
						<path
							id="Icon_ionic-ios-arrow-down"
							data-name="Icon ionic-ios-arrow-down"
							d="M13.461,17.054l5.5-5.5a1.035,1.035,0,0,1,1.468,0,1.048,1.048,0,0,1,0,1.472L14.2,19.258a1.037,1.037,0,0,1-1.433.03l-6.273-6.26a1.039,1.039,0,0,1,1.468-1.472Z"
							transform="translate(-6.188 -11.246)"
						/>
					</svg>
				</Combobox.Button>
			</div>

			<Combobox.Options className="relative">
				{filteredItems?.length === 0 && query !== "" ? (
					<div className="relative cursor-default select-none py-2 px-4 text-gray-700">
						Nothing found.
					</div>
				) : (
					<VirtualizedList items={filteredItems ?? []} />
				)}
			</Combobox.Options>
		</Combobox>
	);
}

function VirtualizedList({ items }: { items: string[] }) {
	const parentRef = useRef<HTMLDivElement>(null);

	const rowVirtualizer = useVirtualizer({
		count: items?.length,
		getScrollElement: () => parentRef.current,
		estimateSize: () => 35,
		overscan: 5,
	});

	return (
		<div
			ref={parentRef}
			className="absolute inset-0 z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
		>
			<div
				style={{
					height: `${rowVirtualizer.getTotalSize()}px`,
					width: "100%",
					position: "relative",
				}}
			>
				{rowVirtualizer.getVirtualItems().map((virtualRow: any) => (
					<Combobox.Option
						key={virtualRow.index}
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							width: "100%",
							height: `${virtualRow.size}px`,
							transform: `translateY(${virtualRow.start}px)`,
						}}
						className={({ active }) =>
							`relative cursor-default select-none py-2 pl-2 pr-4 ${
								active
									? "bg-dark-grey text-white"
									: "text-gray-900"
							}`
						}
						value={items?.[virtualRow.index]}
					>
						{({ selected, active }) => (
							<span
								className={`block truncate ${
									selected ? "font-medium" : "font-normal"
								}`}
							>
								{items?.[virtualRow.index]}
							</span>
						)}
					</Combobox.Option>
				))}
			</div>
		</div>
	);
}

const DataForm = () => {
	const [formData, setFormData] = useRecoilState(formDataState);
	const [reqSuccessful, setReqSuccessful] =
		useRecoilState(reqSuccessfulState);
	const [loading, setLoading] = useState(false);
	const [selected, setSelected] = useState(people[0]);
	const parentRef = useRef<HTMLDivElement>(null);

	const rowVirtualizer = useVirtualizer({
		count: colleges.length,
		getScrollElement: () => parentRef.current,
		estimateSize: () => 35,
		overscan: 5,
	});

	const onSubmit = () => {
		setLoading(true);
		fetch("/api/create-record", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((res) => res.json())
			.then((data) => {
				setReqSuccessful(true);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<div
			className={`w-full p-5 xl:p-10 grid grid-cols-1 md:grid-cols-2 mx-auto max-w-7xl gap-10 items-center`}
		>
			<div className="flex flex-col justify-between">
				<img
					className="w-[142px] xl:w-[252px] cursor-pointer mx-auto lg1:mx-0"
					src="/images/logo.png"
					alt="Champagne Logo"
				/>

				<h1 className="text-[47px] text-center lg1:text-left xl:text-[52px] font-anton leading-[47px] xl:leading-[52px] text-white">
					Where your <br />
					friend <br />
					recommends
					<br /> your next date
				</h1>

				<p className="text-white font-bold text-center xl:text-left text-[12px] xl:text-[23px] leading-[12px] xl:leading-[23px] mt-5">
					The platform where dating and friendship happen for college
					students
				</p>
			</div>

			<div className="flex flex-col items-center relative space-y-3 max-w-[404px] text-black mx-auto md:py-16 lg:py-10">
				<input
					type="text"
					className="rounded-[14px] bg-white placeholder-champagne-light-gray text-[14px] leading-[14px] xl:text-[20px] leading-[20xl:px] font-bold focus:outline-none py-[22px] px-[32.8px] w-full"
					placeholder="Type your name"
					value={formData.Name}
					onChange={(e) =>
						setFormData({ ...formData, Name: e.target.value })
					}
				/>
				<input
					type="email"
					className="rounded-[14px] bg-white placeholder-champagne-light-gray text-[14px] leading-[14px] xl:text-[20px] leading-[20xl:px] font-bold focus:outline-none py-[22px] px-[32.8px] w-full"
					placeholder="Email"
					value={formData.Email}
					onChange={(e) =>
						setFormData({ ...formData, Email: e.target.value })
					}
				/>
				<div className="flex flex-row space-x-3 w-full">
					<select
						className={`rounded-[14px] bg-white text-black text-[14px] leading-[14px] xl:text-[20px] leading-[20xl:px] font-bold focus:outline-none py-[22px] px-[20px] col-span-1`}
					>
						<option>+1</option>
					</select>
					<input
						type="text"
						className="rounded-[14px] bg-white placeholder-champagne-light-gray text-[14px] leading-[14px] xl:text-[20px] leading-[20xl:px] font-bold focus:outline-none py-[22px] px-[32.8px] w-full"
						placeholder="Phone Number"
						value={formData["Phone Number"]}
						onChange={(e) =>
							setFormData({
								...formData,
								"Phone Number": e.target.value,
							})
						}
					/>
				</div>
				<select
					className={`rounded-[14px] bg-white text-black text-[14px] leading-[14px] xl:text-[20px] leading-[20xl:px] font-bold focus:outline-none py-[22px] px-[32.8px] col-span-1 w-full`}
					placeholder="Pick your college"
					value={formData["College Name"]}
					onChange={(e) =>
						setFormData({
							...formData,
							"College Name": e.target.value,
						})
					}
				>
					<option className="text-champagne-light-gray">
						Pick your college
					</option>

					{colleges.map((college, index) => (
						<option key={index} value={college}>
							{college}
						</option>
					))}
				</select>

				{/* <Select
					name="LOL"
					label="LOL"
					items={colleges}
					className="relative flex flex-row items-center justify-between rounded-[14px] bg-white text-black text-[14px] leading-[14px] xl:text-[20px] xl:leading-[20px] font-bold focus:outline-none py-[22px] px-[32.8px] col-span-1 w-full"
				/> */}
				<select
					className={`rounded-[14px] bg-white text-black text-[14px] leading-[14px] xl:text-[20px] leading-[20xl:px] font-bold focus:outline-none py-[22px] px-[32.8px] col-span-1 w-full`}
					placeholder="Pick your year"
					value={formData.Year}
					onChange={(e) =>
						setFormData({ ...formData, Year: e.target.value })
					}
				>
					<option>Pick your year</option>
					<option value="Freshman Year">Freshman Year</option>
					<option value="Sophomore Year">Sophomore Year</option>
					<option value="Junior Year">Junior Year</option>
					<option value="Senior Year">Senior Year</option>
				</select>

				<div className="pt-3 w-full">
					<button
						onClick={onSubmit}
						className="bg-black text-white  rounded-full w-full flex flex-row space-x-2 items-center justify-center py-5 px-6 text-base font-black text-[14px] leading-[14px] xl:text-[20px] font-anton xl:leading-[20px]"
					>
						{loading ? "Loading..." : "Done"}
					</button>
				</div>
			</div>
		</div>
	);
};

const SuccessForm = () => {
	const [formData, setFormData] = useRecoilState(formDataState);
	const [diceIndex, setDiceIndex] = useState(0);

	const diceOptions = [
		`Sign up for the newest and fun dating experience in ${formData["College Name"]}`,
		`Check how your campus is ranking on champagne app`,
		`Come and boost SJUS on Champagne leaderboard. Attached to link`,
		`Checkout the most eligible bachelors & bachelorettes on your campus in Champagne app. Attached to link`,
		`Wanna be the prom queen or prom king at ${formData["College Name"]}? Join the Champagne app - the new dating and fun friendship experience on campus! Attached to link`,
		`Come and follow all the gists on ${formData["College Name"]} Campus. Sign up for Champagne App. Attached to link`,
		`Champagne - dating, friendship, games, social and banking app at ${formData["College Name"]}. Join the fun! Attached to link`,
		`I just joined the waitlist for the Champagne App. Join me and let's activate this fun dating and friendship app at ${formData["College Name"]}. Attached to link`,
	];

	return (
		<div className="flex flex-col lg1:flex-row p-5 lg1:p-14 w-full space-x-10">
			<div className="flex flex-col w-full lg1:w-1/2 my-auto">
				<img
					className="w-[142px] xl:w-[252px] cursor-pointer mx-auto xl:mx-0"
					src="/images/logo.png"
					alt="Champagne Logo"
				/>

				<h1 className="text-[47px] xl:text-[52px] font-anton leading-[47px] xl:leading-[52px] text-white text-center xl:text-left">
					Congratulations
					<br /> for joining the
					<br /> Champagne waitlist.
					<br /> We will keep you
					<br /> abreast of progress!
				</h1>

				<p className="text-white font-bold text-[12px] xl:text-[23px] leading-[12px] xl:leading-[23px] mt-5 text-center xl:text-left">
					Invite your friends to win a bottle of Champagne. The more
					of your friends join, the better your chances
				</p>
			</div>

			<div className="flex flex-col items-center relative space-y-5 mt-8 xl:my-0">
				<div className="w-[90%] md:w-[60%] xl:w-[386px] h-[278px] 2x:h-[409px] p-5 rounded-[14px] bg-champagne-yellow absolute -top-0.5 xl:-top-2 z-1" />
				<div className="w-full md:w-[70%] xl:w-[404px] h-[278px] xl:h-[409px] p-5 rounded-[14px] bg-white flex flex-col justify-between z-10">
					<div className="flex flex-row justify-between w-full">
						<div className="flex flex-row space-x-2">
							<button
								onClick={() => {
									navigator.clipboard.writeText(
										`https://champagne-topaz.vercel.app/share/${formData[
											"College Name"
										]?.replace(/ /g, "+")}`
									);
								}}
								className="bg-champagne-lighter-gray rounded-full flex flex-row items-center justify-center py-2 px-5 text-base font-black"
							>
								<LinkIcon className="text-champagne-light-gray w-5 h-5" />
								<p className="text-black text-[10px] leading-[10px] xl:text-[16px] font-anton xl:leading-[16px]">
									Copy Card Link
								</p>
							</button>
							<div
								onClick={() => {
									if (diceIndex > diceOptions.length - 2) {
										setDiceIndex(0);
									} else {
										setDiceIndex(diceIndex + 1);
									}
								}}
								className="cursor-pointer bg-champagne-lighter-gray rounded-full flex flex-row items-center justify-center py-2 px-5 text-base font-black"
							>
								<img
									className="w-[15px] h-[15px] xl:w-[28px] xl:h-[28px] cursor-pointer"
									src="/images/emojis/dice.png"
									alt="Champagne Logo"
								/>
							</div>
						</div>

						<img
							className="w-[80px] xl:w-[103px] cursor-pointer"
							src="/images/logo.png"
							alt="Champagne Logo"
						/>
					</div>

					<div>
						<h1 className="text-[29px] leading-[29px] xl:text-[44px] font-anton xl:leading-[44px] text-black line-clamp-5">
							{diceOptions[diceIndex]}
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

				<div className="flex flex-row gap-x-2 w-full xl:max-w-[90%] 2xl:max-w-[97%] justify-between lg:gap-x-3">
					<div
						onClick={() => {
							navigator.clipboard.writeText(
								`https://champagne-topaz.vercel.app/share/${formData[
									"College Name"
								]
									?.replace(/ /g, "+")
									?.replace(/ /g, "+")}`
							);
						}}
						className=" cursor-pointer bg-black text-white rounded-full flex flex-row space-x-2 items-center justify-center py-1 px-2 lg:py-3 lg:px-6 text-base font-black"
					>
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

						<p className="text-[8px] leading-[8px] lg:text-[14px] lg:leading-[14px] xl:text-[20px] font-anton xl:leading-[20px]">
							Share
						</p>
					</div>
					<div
						onClick={() => {
							navigator.clipboard.writeText(
								`https://champagne-topaz.vercel.app/share/${formData[
									"College Name"
								]
									?.replace(/ /g, "+")
									?.replace(/ /g, "+")}`
							);
						}}
						className="cursor-pointer bg-black text-white rounded-full flex flex-row space-x-2 items-center justify-center py-1 px-2 lg:py-3 lg:px-6 text-base font-black"
					>
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

						<p className="text-[8px] leading-[8px] lg:text-[14px] lg:leading-[14px] xl:text-[20px] font-anton xl:leading-[20px]">
							Share
						</p>
					</div>
					<Link
						href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
							`https://champagne-topaz.vercel.app/share/${formData[
								"College Name"
							]
								?.replace(/ /g, "+")
								?.replace(" ", "+")}`
						)}&text=${encodeURIComponent(diceOptions[diceIndex])}`}
					>
						<div className="bg-black text-white rounded-full flex flex-row space-x-2 items-center justify-center py-1 px-2 lg:py-3 lg:px-6 text-base font-black">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="15.013"
								height="12.194"
								viewBox="0 0 15.013 12.194"
							>
								<path
									id="Icon_awesome-twitter"
									data-name="Icon awesome-twitter"
									d="M13.47,6.42c.01.133.01.267.01.4a8.7,8.7,0,0,1-8.755,8.755A8.7,8.7,0,0,1,0,14.193a6.365,6.365,0,0,0,.743.038,6.162,6.162,0,0,0,3.82-1.315,3.082,3.082,0,0,1-2.877-2.134,3.88,3.88,0,0,0,.581.048,3.254,3.254,0,0,0,.81-.1A3.077,3.077,0,0,1,.61,7.706V7.668A3.1,3.1,0,0,0,2,8.058a3.082,3.082,0,0,1-.953-4.115,8.746,8.746,0,0,0,6.344,3.22,3.473,3.473,0,0,1-.076-.7,3.08,3.08,0,0,1,5.325-2.105,6.058,6.058,0,0,0,1.953-.743,3.069,3.069,0,0,1-1.353,1.7,6.168,6.168,0,0,0,1.772-.476A6.614,6.614,0,0,1,13.47,6.42Z"
									transform="translate(0 -3.381)"
									fill="#fff"
								/>
							</svg>

							<p className="text-[8px] leading-[8px] lg:text-[14px] lg:leading-[14px] xl:text-[20px] font-anton xl:leading-[20px]">
								Share
							</p>
						</div>
					</Link>
					<Link
						href={`sms:&body=${
							diceOptions[diceIndex]
						}+${encodeURIComponent(
							`https://champagne-topaz.vercel.app/share/${formData[
								"College Name"
							]
								?.replace(/ /g, "+")
								?.replace(" ", "+")}`
						)}`}
						className="bg-black text-white rounded-full flex flex-row space-x-2 items-center justify-center py-1 px-2 lg:py-3 lg:px-6 text-base font-black"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="21.203"
							height="21.203"
							viewBox="0 0 21.203 21.203"
							className="w-[15px] h-[15px] lg:w-[21px] lg:h-[21px]"
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
								strokeWidth="3"
							/>
						</svg>

						<p className="text-[8px] leading-[8px] lg:text-[14px] lg:leading-[14px] xl:text-[20px] font-anton xl:leading-[20px]">
							Share with friends
						</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default function Modal() {
	const [isOpen, setIsOpen] = useRecoilState(modalState);
	const [reqSuccessful, setReqSuccessful] =
		useRecoilState(reqSuccessfulState);
	const [, setFormData] = useRecoilState(formDataState);

	useEffect(() => {
		return () => {
			setReqSuccessful(false);
			setFormData({
				Name: undefined,
				Email: undefined,
				"Phone Number": undefined,
				"College Name": undefined,
				Year: undefined,
			});
		};
	}, []);

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
									py-5 my-8 inline-block w-full max-w-[866px] lg1:max-w-[80%] xl:max-w-[923px] xl1:max-w-[975px] 2xl:max-w-screen-xl transform overflow-hidden 
									rounded-[29px] xl:rounded-[53px] bg-gradient-to-br from-champagne-pink via-champagne-light-blue to-champagne-green 
									text-left align-middle shadow-xl transition-all relative
								`}
						>
							<span
								className="rounded-full bg-white flex items-center w-[30px] h-[30px] lg1:w-[42px] lg1:h-[42px] absolute right-6 top-6 cursor-pointer"
								onClick={() => setIsOpen(false)}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
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

							{reqSuccessful ? <SuccessForm /> : <DataForm />}
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	);
}
