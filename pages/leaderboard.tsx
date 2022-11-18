/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Dating from "../components/index/Dating";
import Images from "../components/index/Images";
import Layout from "../components/index/Layout";
import ShareModal from "../components/ShareModal";
import {
	instaModalState,
	shareModalSchoolState,
	shareModalState,
} from "../recoil";
import { table } from "../utils/airtable";
import getNumberSuffix from "../utils/helpers";

export async function getStaticProps() {
	// fetch all records from the airtable
	const records = await table.select({}).firstPage();
	const formattedRecords = records.map((record) => ({
		id: record.id,
		fields: record.fields,
	}));

	return {
		props: {
			signups: formattedRecords.length,
			uniqueSchools: new Set(
				formattedRecords.map((record) => record.fields["College Name"])
			).size,
			leaderboard:
				// sort each College Name by the number of signups from that school
				formattedRecords
					// @ts-ignore
					.sort(
						(a, b) =>
							// @ts-ignore
							b.fields["College Name"] - a.fields["College Name"]
					)
					.reduce((acc, curr) => {
						// @ts-ignore
						const school = curr.fields["College Name"];
						// @ts-ignore
						if (acc[school]) {
							// @ts-ignore
							acc[school] += 1;
						} else {
							// @ts-ignore
							acc[school] = 1;
						}
						return acc;
					}, {}),
		},
	};
}

function Hero({
	signups,
	uniqueSchools,
	leaderboard,
}: {
	signups: number;
	uniqueSchools: number;
	leaderboard: Object;
}) {
	const [filteredLeaderboard, setFilteredLeaderboard] = useState(leaderboard);
	const [searchTerm, setSearchTerm] = useState("");
	const originalPositions = Object.entries(leaderboard)
		.sort((a, b) => b[1] - a[1])
		.map((school) => school[0]);

	const [isOpen, setIsOpen] = useRecoilState(shareModalState);
	const [shareSchool, setShareSchool] = useRecoilState(shareModalSchoolState);
	const [instaModal, setInstaModal] = useRecoilState(instaModalState);

	const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setSearchTerm(value);
		const filtered = Object.keys(leaderboard)
			.filter((school) =>
				school.toLowerCase().includes(value.toLowerCase())
			)
			.reduce((obj, key) => {
				// @ts-ignore
				obj[key] = leaderboard[key];
				return obj;
			}, {});
		setFilteredLeaderboard(filtered);
	};

	const [diceIndex, setDiceIndex] = useState(0);

	const diceOptionsNoSchool = [
		`Check how your campus is ranking on champagne app`,
		`Come and boost your school on Champagne leaderboard. Attached to link`,
		`Checkout the most eligible bachelors & bachelorettes on your campus in Champagne app. Attached to link`,
		`Champagne - dating, friendship, games, social and banking app in your school. Join the fun! Attached to link`,
		`I just joined the waitlist for the Champagne App. Join me and let's activate this fun dating and friendship app at your school. Attached to link`,
	];

	useEffect(() => {
		setFilteredLeaderboard(leaderboard);
	}, [leaderboard]);

	return (
		<div className="w-full bg-white flex overflow-hidden px-4 flex-col">
			<div className="grid grid-cols-1 lg1:grid-cols-2 w-full gap-5 lg1:max-w-[80%] 2xl:max-w-[90%] 3xl:max-w-[75%] mx-auto py-20">
				<div className="flex flex-col items-center justify-between">
					<div className="w-full mx-auto self-end ml-0 lg1:ml-16 mb-5 lg1:mb-0">
						<div className="mx-auto py-[rem]">
							<div className="">
								<h1 className="text-[47px] leading-[47px] lg1:text-[62px] lg1:leading-[62px] xl:text-[68px] xl:leading-[68px] xl1:text-[72px] xl1:leading-[72px] text-center lg1:text-left 2xl:text-[97px] font-anton 2xl:leading-[92px] text-black w-full ">
									See your college{" "}
									<br className="hidden 3xl:block" /> Ranking
								</h1>
							</div>
						</div>
					</div>
					<div className="w-full rounded-[28px] lg1:rounded-[43px] border-[4px] lg1:border-[7px] border-black py-8 px-8 items-center justify-center flex flex-row space-x-14">
						<div className="flex flex-col space-y-5">
							<p className="text-champagne-light-gray text-[9px] leading-[9px] lg1:text-[15px] lg1:leading-[15px] font-black">
								Number of signups
							</p>
							<h1 className="text-[66px] leading-[66px] lg1:text-[141px] font-anton lg1:leading-[141px] text-black text-center">
								{signups}
							</h1>{" "}
						</div>
						<div className="flex flex-col space-y-5">
							<p className="text-champagne-light-gray text-[9px] leading-[9px] lg1:text-[15px] lg1:leading-[15px] font-black">
								School represented
							</p>
							<h1 className="text-[66px] leading-[66px] lg1:text-[141px] font-anton lg1:leading-[141px] text-black text-center">
								{uniqueSchools}
							</h1>{" "}
						</div>
					</div>
				</div>

				<ShareModal />

				<div className="w-full flex mx-auto h-full">
					<div className="mx-auto w-full">
						<div className="w-full rounded-[28px] lg1:rounded-[43px] border-[4px] lg1:border-[7px] border-black text-white p-5 md:p-10 2xl:p-16 items-center justify-center flex h-full flex-row space-x-5 bg-black">
							<div className="flex flex-col justify-between space-y-5">
								<p className="text-[#919191] font-black text-[13px]">
									How to activate your campus
								</p>
								<h1 className="text-[33px] leading-[33px] lg1:text-[23px] lg1:leading-[23px] xl:text-[25px] xl:leading-[25px] 2xl:text-[36px] 2xl:leading-[36px]  font-anton">
									<span className="text-champagne-pink">
										Invite
									</span>{" "}
									or{" "}
									<span className="text-champagne-light-blue">
										share
									</span>{" "}
									Champagne app with your schoolmates.{" "}
								</h1>
								<h1 className="text-[33px] leading-[33px] lg1:text-[23px] lg1:leading-[23px] xl:text-[25px] xl:leading-[25px] 2xl:text-[36px] 2xl:leading-[36px]  font-anton">
									<span className="text-champagne-pink">
										Champagne
									</span>{" "}
									will be activated on your campus when{" "}
									<span className="text-champagne-light-blue">
										200 or more students
									</span>{" "}
									join the waitlist
								</h1>{" "}
								<h1 className="text-[33px] leading-[33px] lg1:text-[23px] lg1:leading-[23px] xl:text-[25px] xl:leading-[25px] 2xl:text-[36px] 2xl:leading-[36px]  font-anton">
									Share with friends on your socials or your
									contact to activate{" "}
									<span className="text-champagne-pink">
										Champagne app
									</span>{" "}
									in your college.
								</h1>{" "}
								<div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 justify-between w-full pt-5 max-w-3xl mx-auto">
									<div
										onClick={() => {
											navigator.clipboard.writeText(
												`https://champagne-topaz.vercel.app/share/${shareSchool?.replace(
													/ /g,
													"+"
												)}`
											);
										}}
										className="cursor-pointer bg-white text-black rounded-full flex flex-row space-x-2 items-center justify-center py-2 px-3 2xl:py-5 text-base font-black"
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
												fill="#000"
											/>
										</svg>

										<p className="text-[13px] leading-[13px] lg1:text-[15px] lg1:leading-[15px] 2xl:text-[20px] font-anton 2xl:leading-[20px]">
											Share
										</p>
									</div>

									<div
										onClick={() => {
											setInstaModal(true);
										}}
										className="cursor-pointer bg-white text-black rounded-full flex flex-row space-x-2 items-center justify-center py-2 px-3 2xl:py-5 text-base font-black"
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
												fill="#000"
											/>
										</svg>

										<p className="text-[13px] leading-[13px] lg1:text-[15px] lg1:leading-[15px] 2xl:text-[20px] font-anton 2xl:leading-[20px]">
											Share
										</p>
									</div>

									<Link
										href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
											`https://champagne-topaz.vercel.app`
										)}&text=${encodeURIComponent(
											diceOptionsNoSchool[diceIndex]
										)}`}
									>
										<div className="bg-white text-black rounded-full flex flex-row space-x-2 items-center justify-center py-2 px-3 2xl:py-5 text-base font-black">
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
													fill="#101010"
												/>
											</svg>

											<p className="text-[13px] leading-[13px] lg1:text-[15px] lg1:leading-[15px] 2xl:text-[20px] font-anton 2xl:leading-[20px]">
												Share
											</p>
										</div>
									</Link>

									<Link
										href={`sms:&body=${diceOptionsNoSchool[0]}`}
										className="xl:col-span-2 bg-white text-black rounded-full flex flex-row space-x-2 items-center justify-center py-2 px-3 2xl:py-5 text-base font-black"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="15.132"
											height="15.132"
											viewBox="0 0 15.132 15.132"
										>
											<path
												id="Icon_feather-message-square"
												data-name="Icon feather-message-square"
												d="M16.632,12.588a1.348,1.348,0,0,1-1.348,1.348H7.2l-2.7,2.7V5.848A1.348,1.348,0,0,1,5.848,4.5h9.436a1.348,1.348,0,0,1,1.348,1.348Z"
												transform="translate(-3 -3)"
												fill="#101010"
												stroke="#101010"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="3"
											/>
										</svg>

										<span className="text-[13px] leading-[13px] lg1:text-[15px] lg1:leading-[15px] 2xl:text-[20px] font-anton 2xl:leading-[20px] flex">
											Share{" "}
											<span className="hidden xl:block ml-1">
												{" "}
												with friends
											</span>
										</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full lg1:max-w-[80%] 2xl:max-w-[90%] 3xl:max-w-[75%] mx-auto flex items-center justify-center py-20">
				<div className="w-full pb-[8rem] flex flex-col">
					{/* <div className="w-full max-w-5xl lg1:max-w-7xl mx-auto flex items-center justify-center">
				<div className="mx-auto py-[5rem]"></div> */}
					<div className="relative w-full mx-auto flex flex-col lg1:flex-row items-center justify-between self-end pl-0 lg1:pl-16">
						<h1 className="text-[47px] leading-[47px] lg1:text-[62px] lg1:leading-[62px] xl:text-[68px] xl:leading-[68px] xl1:text-[72px] xl1:leading-[72px] text-center lg1:text-left 2xl:text-[97px] font-anton 2xl:leading-[92px] text-black w-full ">
							College Hallway
							<br />
							Ranking 🍾
						</h1>

						<div className="relative p-2 w-full mt-5 lg1:mt-0 lg1:w-[280px]">
							<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 23.825 23.644"
									className="w-[18px] h-[18px]"
								>
									<g
										id="Group_4099"
										data-name="Group 4099"
										transform="translate(0 4.198) rotate(-13)"
									>
										<g
											id="Ellipse_1317"
											data-name="Ellipse 1317"
											transform="translate(0)"
											fill="none"
											stroke="#b7b7b7"
											stroke-width="4"
										>
											<circle
												cx="9.331"
												cy="9.331"
												r="9.331"
												stroke="none"
											/>
											<circle
												cx="9.331"
												cy="9.331"
												r="7.331"
												fill="none"
											/>
										</g>
										<path
											id="Path_14564"
											data-name="Path 14564"
											d="M0,0,2.548,3.64"
											transform="translate(13.917 16.102)"
											fill="none"
											stroke="#b7b7b7"
											stroke-linecap="round"
											stroke-width="4"
										/>
									</g>
								</svg>
							</div>
							<input
								type="text"
								className="focus:ring-none font-bold text-[12px] block w-full rounded-full bg-[#EFEFEF] px-2 py-2.5 pl-8 text-gray-900 focus:outline-none"
								placeholder="Search your college"
								value={searchTerm}
								onChange={handleFilter}
							/>
						</div>
					</div>

					<div className="grid grid-cols-1 lg1:grid-cols-2 my-14 gap-x-8 gap-y-10">
						{Object.entries(filteredLeaderboard)
							.sort((a, b) => b[1] - a[1])
							.map((item, i) =>
								originalPositions.indexOf(item[0]) <= 1 ? (
									<div
										key={i}
										className="relative flex items-end justify-end"
									>
										<div className="border-[4px] lg1:border-[7px] border-black rounded-[43px] bg-white p-10 absolute w-full h-full z-[1] -left-0.5 -bottom-2.5" />
										<div
											className={`
											border-[4px] lg1:border-[7px] text-white self-end w-[98%] border-black 
											rounded-[43px] ${
												originalPositions.indexOf(
													item[0]
												) === 0
													? "bg-gradient-to-br from-champagne-pink relative via-champagne-light-blue to-champagne-green"
													: "bg-champagne-pink"
											}
											p-5 lg1:p-10 z-[20] flex flex-col justify-between h-full
										`}
										>
											<div className="grid w-full items-end justify-items-end">
												<h1 className="text-[46px] leading-[46px] xl1:text-[79px] font-anton xl1:leading-[79px]">
													{getNumberSuffix(
														originalPositions.indexOf(
															item[0]
														) + 1
													)}
												</h1>
											</div>
											<div className="flex flex-col w-full lg1:max-w-[80%] mt-8 lg1:mt-0">
												<h1 className="uppercase text-[9px] leading-[9px] lg1:text-[18px] font-black lg1:leading-[18px]">
													{item[1]} student
													{item[1] > 1 ? "s" : ""}
												</h1>
												<h1 className="text-[61px] leading-[61px] lg1:text-[71px] font-anton lg1:leading-[80px] w-full line-clamp-2 break-words">
													{item[0]}
												</h1>
											</div>

											<div
												onClick={() => {
													setShareSchool(item[0]);
													setIsOpen(true);
												}}
												className="cursor-pointer bg-black text-white rounded-full flex flex-row space-x-2 items-center justify-center py-3 px-6 text-base font-black absolute lg1:bottom-5 lg1:right-5 bg-opacity-40"
											>
												<p className="text-[20px] font-anton leading-[20px]">
													Share
												</p>
											</div>
										</div>
									</div>
								) : (
									<div className="border-[4px] lg1:border-[7px] text-black self-end w-full border-black rounded-[43px] bg-white relative p-5 lg1:p-10 z-[20] flex flex-col lg1:col-span-full">
										<div className="grid w-full items-end justify-items-end">
											<h1 className="text-[46px] leading-[46px] xl1:text-[79px] font-anton xl1:leading-[79px]">
												{getNumberSuffix(
													originalPositions.indexOf(
														item[0]
													) + 1
												)}
											</h1>
										</div>
										<div className="flex flex-col w-full lg1:max-w-[80%] mt-8 lg1:mt-0">
											<h1 className="uppercase text-[9px] leading-[9px] lg1:text-[18px] font-black lg1:leading-[18px]">
												{item[1]} student
												{item[1] > 1 ? "s" : ""}
											</h1>
											<h1 className="text-[61px] leading-[61px] lg1:text-[71px] font-anton lg1:leading-[71px] w-full break-words">
												{item[0]}
											</h1>
										</div>

										<div
											onClick={() => {
												setShareSchool(item[0]);
												setIsOpen(true);
											}}
											className="cursor-pointer bg-black text-white rounded-full flex flex-row space-x-2 items-center justify-center py-3 px-6 text-base font-black absolute lg1:bottom-5 lg1:right-5 bg-opacity-40"
										>
											<p className="text-[20px] font-anton leading-[20px]">
												Share
											</p>
										</div>
									</div>
								)
							)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default function LeaderBoard({
	signups,
	uniqueSchools,
	leaderboard,
}: {
	signups: number;
	uniqueSchools: number;
	leaderboard: Object;
}) {
	return (
		<Layout footer={false}>
			<Hero
				signups={signups}
				uniqueSchools={uniqueSchools}
				leaderboard={leaderboard}
			/>
		</Layout>
	);
}
