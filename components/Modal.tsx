/* eslint-disable @next/next/no-img-element */
import { Transition, Dialog, Listbox, Combobox } from "@headlessui/react";
import { LinkIcon } from "@heroicons/react/24/outline";
import { Fragment, useEffect, useState, useRef } from "react";
import { useRecoilState } from "recoil";
import {
	formDataState,
	instaModalState,
	modalState,
	reqSuccessfulState,
	shareModalSchoolState,
} from "../recoil";
import { colleges } from "../utils/data";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import classNames from "classnames";
import { useVirtualizer } from "@tanstack/react-virtual";

type Props = {
	name?: string;
	items?: string[];
	label?: string;
	onSelect: (val: any) => void;
	children?: never;
	className?: string;
	placeholder?: string;
};

export function Select({
	name,
	label,
	items,
	className,
	onSelect,
	placeholder,
}: Props) {
	const [selected, setSelected] = useState<string>();
	const [query, setQuery] = useState("");
	const btnRef = useRef<HTMLButtonElement>(null);
	const [formData, setFormData] = useRecoilState(formDataState);

	const filteredItems =
		query === ""
			? items
			: items?.filter((item: string) =>
					item
						.toLowerCase()
						.replace(/\s+/g, "")
						.includes(query.toLowerCase().replace(/\s+/g, ""))
			  ) ?? [];

	var classes = classNames(
		"relative w-full cursor-default overflow-hidden text-left focus:outline-none",
		"block w-full placeholder-light-grey",
		className
	);

	return (
		<div className={`block w-full h-full ${className}`}>
			<div className="relative h-full">
				<Combobox
					value={selected}
					onChange={(v) => {
						setSelected(v);
						onSelect(v);
					}}
				>
					<div className="relative h-full">
						<div
							className={`relative flex flex-row items-center justify-between rounded-[14px] bg-white text-black text-[14px] leading-[14px] xl:text-[20px] xl:leading-[20px] font-bold focus:outline-none py-[22px] 3xl:py-[36px] px-[32.8px] ${className}`}
						>
							<Combobox.Input
								onFocus={(e: any) => {
									e.target.select();
									if (!e.relatedTarget) {
										btnRef?.current?.click();
									}
								}}
								className="w-full border-none text-sm text-gray-900 focus:outline-none text-[14px] leading-[14px] xl:text-[20px] xl:leading-[20px]"
								value={formData["College Name"]}
								onChange={(e) => {
									setQuery(e.target.value);
								}}
								placeholder={placeholder}
							/>
							<Combobox.Button
								ref={btnRef}
								className="flex items-center"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="14.541"
									height="8.314"
									viewBox="0 0 14.541 8.314"
									className="w-[11px] h-[6px] lg1:w-[14px] lg1:h-[8px]"
								>
									<path
										id="Icon_ionic-ios-arrow-down"
										data-name="Icon ionic-ios-arrow-down"
										d="M13.461,17.054l5.5-5.5a1.035,1.035,0,0,1,1.468,0,1.048,1.048,0,0,1,0,1.472l-3.2,3.205L14.2,19.258a1.037,1.037,0,0,1-1.433.03l-6.273-6.26a1.039,1.039,0,0,1,1.468-1.472Z"
										transform="translate(-6.188 -11.246)"
									/>
								</svg>
							</Combobox.Button>
						</div>

						<Combobox.Options>
							{filteredItems?.length === 0 && query !== "" ? (
								<div className="relative cursor-default select-none py-2 px-4 text-gray-700">
									Nothing found.
								</div>
							) : (
								<VirtualizedList
									items={filteredItems ?? []}
									onSelect={onSelect}
								/>
							)}
						</Combobox.Options>
					</div>
				</Combobox>
			</div>
		</div>
	);
}

function VirtualizedList({
	items,
	onSelect,
}: {
	items: string[];
	onSelect: (val: any) => void;
}) {
	const parentRef = useRef<HTMLDivElement>(null);
	const [formData, setFormData] = useRecoilState(formDataState);

	const rowVirtualizer = useVirtualizer({
		count: items?.length,
		getScrollElement: () => parentRef.current,
		estimateSize: () => 35,
		overscan: 5,
	});

	return (
		<div
			ref={parentRef}
			className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none xs:text-sm"
		>
			<div
				className="h-[120px] lg1:h-[180px] max-h-[500px]"
				style={{
					// height: `${rowVirtualizer.getTotalSize()}px`,
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
							`relative cursor-default select-none py-2 pl-2 pr-4`
						}
						value={items?.[virtualRow.index]}
						onClick={() => {
							onSelect(items?.[virtualRow.index]);
						}}
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
	const parentRef = useRef<HTMLDivElement>(null);

	const rowVirtualizer = useVirtualizer({
		count: colleges.length,
		getScrollElement: () => parentRef.current,
		estimateSize: () => 35,
		overscan: 5,
	});

	const onSubmit = () => {
		console.log(formData);
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
			className={`w-full py-5 xl:py-10 grid grid-cols-1 md:grid-cols-2 mx-auto items-center gap-y-5 gap-x-[100px]`}
		>
			<div className="flex flex-col justify-between">
				<img
					className="w-[142px] xl:w-[175px] 2xl:w-[254px] 3xl:w-[336px] cursor-pointer mx-auto lg1:mx-0"
					src="/images/logo.png"
					alt="Champagne Logo"
				/>

				<h1 className="text-[38px] leading-[38px] text-center lg1:text-left lg1:text-[56px] lg1:leading-[56px] xl1:text-[56px] xl1:leading-[56px] 2xl:text-[79px] 2xl:leading-[79px] 3xl:text-[105px] 3xl:leading-[105px] font-anton text-white">
					Where your <br />
					friends <br />
					recommend
					<br /> your next date
				</h1>

				<p className="text-white font-bold text-[15px] leading-[15px] xl:text-[16px] xl:leading-[16px] 2xl:text-[23px] 2xl:leading-[23px] 3xl:text-[30px] 3xl:leading-[30px] mt-5 text-center lg1:text-left">
					The platform where dating and friendship{" "}
					<br className="hidden 3xl:block" /> happen for college
					students
				</p>
			</div>

			<div className="flex flex-col items-center relative space-y-3 max-w-full 2xl:max-w-[404px] 3xl:max-w-[539px] text-black mx-auto md:py-16 lg:py-10 2xl:py-[103px] 3xl:py-[138px]">
				<input
					type="text"
					className="rounded-[14px] bg-white placeholder-champagne-light-gray text-[14px] leading-[14px] xl:text-[20px] leading-[20xl:px] font-bold focus:outline-none py-[22px] 3xl:py-[36px] px-[32.8px] w-full"
					placeholder="Type your name"
					value={formData.Name}
					onChange={(e) =>
						setFormData({ ...formData, Name: e.target.value })
					}
				/>
				<input
					type="email"
					className="rounded-[14px] bg-white placeholder-champagne-light-gray text-[14px] leading-[14px] xl:text-[20px] leading-[20xl:px] font-bold focus:outline-none py-[22px] 3xl:py-[36px] px-[32.8px] w-full"
					placeholder="Email"
					value={formData.Email}
					onChange={(e) =>
						setFormData({ ...formData, Email: e.target.value })
					}
				/>
				<div className="w-full grid grid-cols-6 gap-3">
					{/* <Select
						items={["+1"]}
						placeholder="+1"
						onSelect={
							(e) => {}
							// setFormData({
							// 	...formData,
							// 	Year: e.target.value,
							// })
						}
						className="col-span-2 w-full h-full"
					/> */}
					{/* <select
						disabled
						className={`rounded-[14px] col-span-2 bg-white text-black text-[14px] leading-[14px] xl:text-[20px] leading-[20xl:px] font-bold focus:outline-none py-[22px] 3xl:py-[36px] pl-[32.8px]`}
					>
						<option>+1</option>
					</select> */}
					<input
						type="text"
						className="rounded-[14px] bg-white col-span-2 placeholder-champagne-light-gray text-[14px] leading-[14px] xl:text-[20px] xl:leading-[20px] font-bold focus:outline-none py-[22px] 3xl:py-[36px] px-[32.8px] w-full flex text-center"
						placeholder="Country Code"
						value={"+1"}
						disabled
					/>
					<input
						type="text"
						className="rounded-[14px] bg-white col-span-4 placeholder-champagne-light-gray text-[14px] leading-[14px] xl:text-[20px] xl:leading-[20px] font-bold focus:outline-none py-[22px] 3xl:py-[36px] px-[32.8px] w-full"
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

				<Select
					items={colleges}
					placeholder="Pick your College"
					onSelect={(e) => {
						console.log(e);
						setFormData({
							...formData,
							"College Name": e,
						});
					}}
				/>
				<Select
					items={[
						"Freshman Year",
						"Sophomore Year",
						"Junior Year",
						"Senior Year",
					]}
					placeholder="Pick your Year"
					onSelect={(e) =>
						setFormData({
							...formData,
							Year: e,
						})
					}
				/>

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
	const [instaModal, setInstaModal] = useRecoilState(instaModalState);
	const [shareSchool, setShareSchool] = useRecoilState(shareModalSchoolState);
	const [linkCopied, setLinkCopied] = useState(false);

	const diceOptions = [
		`Sign up for the newest and fun dating experience in ${formData["College Name"]}`,
		`Check how your campus is ranking on champagne app`,
		`Come and boost ${formData["College Name"]} on Champagne leaderboard.`,
		`Checkout the most eligible bachelors & bachelorettes on your campus in Champagne app.`,
		`Wanna be the prom queen or prom king at ${formData["College Name"]}? Join the Champagne app - the new dating and fun friendship experience on campus!`,
		`Come and follow all the gists on ${formData["College Name"]} Campus. Sign up for Champagne App.`,
		`Champagne - dating, friendship, games, social and banking app at ${formData["College Name"]}. Join the fun!`,
		`I just joined the waitlist for the Champagne App. Join me and let's activate this fun dating and friendship app at ${formData["College Name"]}.`,
	];

	return (
		<div
			className={`w-full py-[34px] grid grid-cols-1 md:grid-cols-2 mx-auto items-center lg1:gap-x-[55px] gap-x-[100px]`}
		>
			<div className="flex flex-col w-full my-auto pb-[16px]">
				<img
					className="w-[142px] xl:w-[175px] 2xl:w-[254px] 3xl:w-[336px] cursor-pointer mx-auto lg1:mx-0"
					src="/images/logo.png"
					alt="Champagne Logo"
				/>

				<h1 className="text-[38px] leading-[38px] text-center lg1:text-left xl:text-[41px] xl:leading-[41px] 2xl:text-[58px] 2xl:leading-[58px] 3xl:text-[77px] 3xl:leading-[77px] font-anton text-white">
					Congratulations
					<br /> for joining the
					<br /> Champagne waitlist.
					<br /> We will keep you abreast of progress!
				</h1>

				<p className="text-white font-bold text-[15px] leading-[15px] xl:text-[16px] xl:leading-[16px] 2xl:text-[23px] 2xl:leading-[23px] 3xl:text-[30px] 3xl:leading-[30px] mt-5 text-center lg1:text-left">
					Invite your friends to win a bottle of Champagne. The more
					of your friends join, the better your chances
				</p>
			</div>

			<div className="flex flex-col items-center relative space-y-5 xl:my-0">
				<div className="w-[264px] md:w-[60%] h-[238px] lg1:w-[257px] lg1:h-[275px] 2xl:w-[386px] 3xl:w-[515px] 3xl:h-[551px] rounded-[14px] bg-champagne-yellow absolute top-2 xl:-top-1 z-1" />
				<div className="p-[19px] md:w-[70%] w-[275px] h-[230px] lg1:w-[269px] lg1:h-[273px] 2xl:h-[409px] 2xl:w-[404px] 3xl:w-[539px] 3xl:h-[546px] 2xl:p-[26px] 3xl:p-[34px] rounded-[14px] bg-white flex flex-col justify-between z-10">
					<div className="flex flex-row justify-between w-full">
						<div className="flex flex-row space-x-2">
							<button
								onClick={() => {
									setLinkCopied(true);
									navigator.clipboard.writeText(
										`https://joinchampagne.com?shared=${encodeURIComponent(
											formData["College Name"] || ""
										)}`
									);
								}}
								className="bg-champagne-lighter-gray rounded-full flex flex-row items-center justify-center py-2 pl-[12px] pr-[17px] text-base font-black"
							>
								<p className="text-black text-[10px] leading-[10px] 2xl:text-[16px] 2xl:leading-[16px] font-anton">
									{linkCopied
										? "Link Copied"
										: "🔗 Copy Card Link"}
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
								className="cursor-pointer bg-champagne-lighter-gray rounded-full flex flex-row items-center justify-center py-2 px-[5px] 2xl:px-[12px] text-base font-black"
							>
								<img
									className="w-[15px] h-[15px] 2xl:w-[28px] 2xl:h-[28px] cursor-pointer"
									src="/images/emojis/dice.png"
									alt="Champagne Logo"
								/>
							</div>
						</div>

						<img
							className="lg1:w-[68px] w-[80px] xl:w-[68px] 2xl:w-[104px] cursor-pointer"
							src="/images/logo.png"
							alt="Champagne Logo"
						/>
					</div>

					<div>
						<h1 className="text-[29px] leading-[29px] xl:text-[31px] xl:leading-[31px] 2xl:text-[44px] 2xl:leading-[44px] font-anton text-black line-clamp-4 3xl:line-clamp-[7] mt-10 lg1:mt-0">
							{diceOptions[diceIndex]}
						</h1>
					</div>
				</div>

				<div className="max-w-sm">
					<p className="text-black font-bold text-[9px] leading-[9px] xl:text-[14px] xl:leading-[14px] 3xl:text-[18px] 3xl:leading-[18px] text-center">
						Share this card on your socials or send this card to a
						friend In your contacts. You may win a bottle of
						BeSocial Champagne
					</p>
				</div>

				<div className="grid grid-cols-7 gap-2 max-w-[327px] lg1:max-w-[80%]  w-full justify-between lg:gap-x-3 items-stretch">
					<div
						onClick={() => {
							setInstaModal(true);
						}}
						className="cursor-pointer col-span-2 bg-black text-white rounded-full flex flex-row space-x-2 items-center justify-center py-[10px] px-2 lg:py-[11px] xl:py-[12px] lg:px-[15px] 2xl:py-[17px] text-base font-black"
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

						<p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-[14px] xl:text-[16px] font-anton xl:leading-[16px]">
							Share
						</p>
					</div>
					<Link
						href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
							`https://joinchampagne.com?shared=${encodeURIComponent(
								shareSchool || ""
							)}`
						)}&text=${encodeURIComponent(diceOptions[diceIndex])}`}
						className="bg-black text-white col-span-2 rounded-full flex flex-row space-x-2 items-center justify-center py-[10px] px-2 lg:py-[11px] xl:py-[12px] lg:px-[15px] 2xl:py-[17px] text-base font-black"
					>
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

						<p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-[14px] xl:text-[16px] font-anton xl:leading-[16px]">
							Share
						</p>
					</Link>
					<Link
						href={`sms:&body=${diceOptions[8]} ${encodeURIComponent(
							`https://joinchampagne.com?shared${encodeURIComponent(
								formData["College Name"] || ""
							)}`
						)}`}
						className="bg-black text-white col-span-3 rounded-full flex flex-row space-x-2 items-center justify-center py-[10px] px-2 lg:py-[11px] xl:py-[12px] lg:px-[15px] 2xl:py-[17px] text-base font-black"
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

						<p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-[14px] xl:text-[16px] font-anton xl:leading-[16px] truncate">
							Share with friends
						</p>
					</Link>
					<Link
						href={`sms:&body=${diceOptions[8]} ${encodeURIComponent(
							`https://joinchampagne.com?shared=${encodeURIComponent(
								formData["College Name"] || ""
							)}`
						)}`}
						className="bg-black col-span-full text-white rounded-full flex flex-row space-x-2 items-center justify-center py-[10px] px-2 lg:py-[11px] xl:py-[12px] lg:px-[15px] 2xl:py-[17px] text-base font-black"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16.417"
							height="18.192"
							viewBox="0 0 16.417 18.192"
						>
							<path
								id="Icon_simple-discord"
								data-name="Icon simple-discord"
								d="M16.2,0a1.994,1.994,0,0,1,1.976,1.876V18.192l-2.029-1.723-1.114-1.014-1.216-1.06.508,1.671H3.68a1.881,1.881,0,0,1-1.925-1.877V1.88A1.919,1.919,0,0,1,3.684,0H16.191ZM11.559,4.308h-.023l-.153.152a6.106,6.106,0,0,1,2.332,1.165,8.245,8.245,0,0,0-2.838-.862A7.793,7.793,0,0,0,9,4.762H8.849a6.758,6.758,0,0,0-2.13.557c-.354.154-.557.255-.557.255A5.408,5.408,0,0,1,8.6,4.409l-.1-.1a4.555,4.555,0,0,0-2.636.963,11.863,11.863,0,0,0-1.368,5.321,3.308,3.308,0,0,0,2.837,1.369s.3-.4.61-.76a3,3,0,0,1-1.622-1.064,2.514,2.514,0,0,1,.254.152h.045a.06.06,0,0,1,.045.023v0a.058.058,0,0,0,.045.023c.25.1.5.2.7.3a6.2,6.2,0,0,0,1.364.406,7.785,7.785,0,0,0,2.433,0,7.005,7.005,0,0,0,1.364-.406,10.934,10.934,0,0,0,1.059-.559,3.012,3.012,0,0,1-1.671,1.064c.25.353.6.758.6.758A3.956,3.956,0,0,0,15.5,10.6a11.839,11.839,0,0,0-1.376-5.321,4.559,4.559,0,0,0-2.6-.955l.042-.015Zm.127,3.345a1.015,1.015,0,1,1-.963,1.016.989.989,0,0,1,.963-1.016Zm-3.444,0a1.015,1.015,0,1,1-.966,1.016.988.988,0,0,1,.966-1.016Z"
								transform="translate(-1.755)"
								fill="#fff"
							/>
						</svg>

						<p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-[14px] xl:text-[16px] font-anton xl:leading-[16px] truncate">
							Join Discord
						</p>
					</Link>
				</div>

				{/* <div className="flex flex-row gap-x-2 w-full xl:max-w-[90%] 2xl:max-w-[97%] justify-between lg:gap-x-3 items-stretch">
					<button
						className="cursor-pointer bg-black text-white rounded-full flex flex-row space-x-2 items-center justify-center py-2 px-2.5 lg:py-3 lg:px-6  text-base font-black snapchat-share-button"
						data-share-url={encodeURIComponent(
							`https://joinchampagne.com?shared=${diceOptions[diceIndex]}`
						)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 18.725 17.604"
							className="w-[11px] h-[11px] lg1:w-[18px] lg1:h-[18px]"
						>
							<path
								id="Icon_awesome-snapchat-ghost"
								data-name="Icon awesome-snapchat-ghost"
								d="M18.682,14.878c-.191.445-1,.771-2.463,1a6.859,6.859,0,0,0-.238.876.423.423,0,0,1-.444.324h-.011c-.344,0-.7-.158-1.421-.158a2.894,2.894,0,0,0-2.057.753,4.119,4.119,0,0,1-2.707,1,4.2,4.2,0,0,1-2.665-1,2.891,2.891,0,0,0-2.057-.753,13.813,13.813,0,0,0-1.421.173.434.434,0,0,1-.454-.331,6.774,6.774,0,0,0-.239-.882C1.749,15.761.044,15.464,0,14.7a.389.389,0,0,1,.325-.4,5.5,5.5,0,0,0,3.739-3.143l.009-.019a.831.831,0,0,0,.09-.686c-.185-.435-.983-.591-1.318-.724-.867-.343-.988-.736-.937-1.006a.941.941,0,0,1,1.207-.565,2.093,2.093,0,0,0,.861.23.746.746,0,0,0,.364-.079c-.075-1.314-.26-3.192.208-4.241A4.982,4.982,0,0,1,9.173,1.081l.37,0a4.948,4.948,0,0,1,4.634,2.986c.467,1.048.283,2.918.208,4.243a.717.717,0,0,0,.314.078,2.185,2.185,0,0,0,.807-.229.99.99,0,0,1,.749,0h0a.76.76,0,0,1,.57.654c.007.356-.312.664-.946.915-.077.031-.172.061-.272.092-.358.114-.9.285-1.047.632a.831.831,0,0,0,.09.686l.009.019A5.5,5.5,0,0,0,18.4,14.3.4.4,0,0,1,18.682,14.878Z"
								transform="translate(0 -1.078)"
								fill="#fff"
							/>
						</svg>

						<p className="text-[13px] leading-[13px] lg1:text-[15px] lg1:leading-[15px] 2xl:text-[20px] font-anton 2xl:leading-[20px]">
							Share
						</p>
					</button>
					<div
						onClick={() => {
							setShareSchool(formData["College Name"]);
							setInstaModal(true);
						}}
						className="cursor-pointer bg-black text-white rounded-full flex flex-row space-x-2 items-center justify-center py-2 px-2.5 lg:py-3 lg:px-6 text-base font-black"
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

						<p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-[14px] xl:text-[20px] font-anton xl:leading-[20px]">
							Share
						</p>
					</div>
					<Link
						href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
							`https://joinchampagne.com/share/${encodeURIComponent(
								formData["College Name"] || ""
							)}`
						)}&text=${encodeURIComponent(diceOptions[diceIndex])}`}
						className="bg-black text-white rounded-full flex flex-row space-x-2 items-center justify-center py-2 px-2.5 lg:py-3 lg:px-6 text-base font-black"
					>
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

						<p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-[14px] xl:text-[20px] font-anton xl:leading-[20px]">
							Share
						</p>
					</Link>
					<Link
						href={`sms:&body=${
							diceOptions[diceIndex]
						}+${encodeURIComponent(
							`https://joinchampagne.com/share/${encodeURIComponent(
								formData["College Name"] || ""
							)}`
						)}`}
						className="bg-black text-white rounded-full flex flex-row space-x-2 items-center justify-center py-2 px-2.5 lg:py-3 lg:px-6 text-base font-black"
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

						<p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-[14px] xl:text-[20px] font-anton xl:leading-[20px] truncate">
							Share with friends
						</p>
					</Link>
				</div> */}
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
									my-8 inline-block w-full lg1:max-w-4xl xl:max-w-5xl 2xl:max-w-[1355px] 3xl:max-w-[1800px] transform overflow-hidden 
									rounded-[29px] xl:rounded-[53px] bg-gradient-to-br from-champagne-pink via-champagne-light-blue to-champagne-green 
									text-left align-middle shadow-xl transition-all relative max-w-7xl px-5 lg1:px-[69px] xl:px-[74px] xl1:px-[78px] 2xl:px-[104px]
								`}
						>
							<span
								className="rounded-full bg-champagne-yellow lg1:bg-white flex items-center w-[30px] h-[30px] lg1:w-[42px] lg1:h-[42px] absolute right-6 top-6 cursor-pointer"
								onClick={() => setIsOpen(false)}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
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

							{reqSuccessful ? <SuccessForm /> : <DataForm />}
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	);
}
