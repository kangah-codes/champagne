/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import Dating from "../components/index/Dating";
import Images from "../components/index/Images";
import Layout from "../components/index/Layout";

function Hero() {
	return (
		<div className="w-full bg-white flex overflow-hidden px-4 flex-col">
			<div className="w-full max-w-5xl xl:max-w-7xl xl:max-w-screen-2xl mx-auto flex items-center justify-center">
				<div className="mx-auto py-[5rem] xl:py-[8rem]">
					<div className="grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-10">
						<h1 className="text-[47px] leading-[47px] text-center xl:text-left xl:text-[97px] font-anton xl:leading-[92px] text-black w-full ">
							See your <br />
							college Activities
						</h1>

						<div className="flex flex-col items-center xl:items-end">
							<div className="flex flex-col">
								<p className="text-center text-[9px] leading-[9px] text-champagne-light-gray xl:text-[15px] xl:leading-[15px] font-black">
									Number of students needed to <br />
									activate
								</p>
								<h1 className="text-[100px] leading-[100px] xl:text-[141px] font-anton xl:leading-[141px] text-black">
									20%
								</h1>{" "}
								<h1 className="text-[21px] leading-[21px] xl:text-[23px] font-anton xl:leading-[23px] text-black self-center xl:self-end">
									of college's population
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full max-w-5xl xl:max-w-7xl xl:max-w-screen-2xl flex mx-auto">
				<div className="pb-[8rem] mx-auto w-full">
					<div className="flex flex-col xl:flex-row xl:space-x-5 space-y-5 xl:space-y-0">
						<div className="w-full rounded-[28px] xl:rounded-[43px] border-[4px] xl:border-[7px] border-black py-8 px-8 items-center justify-center flex flex-row space-x-14">
							<div className="flex flex-col space-y-5">
								<p className="text-champagne-light-gray text-[9px] leading-[9px] xl:text-[15px] xl:leading-[15px] font-black">
									Number of signups
								</p>
								<h1 className="text-[66px] leading-[66px] xl:text-[141px] font-anton xl:leading-[141px] text-black">
									5000
								</h1>{" "}
							</div>
							<div className="flex flex-col space-y-5">
								<p className="text-champagne-light-gray text-[9px] leading-[9px] xl:text-[15px] xl:leading-[15px] font-black">
									Number of signups
								</p>
								<h1 className="text-[66px] leading-[66px] xl:text-[141px] font-anton xl:leading-[141px] text-black">
									5000
								</h1>{" "}
							</div>
						</div>

						<div className="w-full rounded-[28px] xl:rounded-[43px] border-[4px] xl:border-[7px] border-black p-5 xl:p-16 items-center justify-center flex flex-row space-x-5">
							<div className="flex flex-col justify-between">
								<h1 className="text-[33px] leading-[33px] xl:text-[41px] font-anton xl:leading-[41px] text-black">
									Share with friends on your socials or your
									contact to activate Champagne app in your
									college.
								</h1>{" "}
								<div className="flex flex-row w-full justify-between pt-4">
									<div className="bg-black text-white rounded-full flex flex-row space-x-2 items-center justify-center py-2 px-3 text-base font-black">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 18.725 17.604"
											className="w-[11px] h-[11px] xl:w-[18px] xl:h-[18px]"
										>
											<path
												id="Icon_awesome-snapchat-ghost"
												data-name="Icon awesome-snapchat-ghost"
												d="M18.682,14.878c-.191.445-1,.771-2.463,1a6.859,6.859,0,0,0-.238.876.423.423,0,0,1-.444.324h-.011c-.344,0-.7-.158-1.421-.158a2.894,2.894,0,0,0-2.057.753,4.119,4.119,0,0,1-2.707,1,4.2,4.2,0,0,1-2.665-1,2.891,2.891,0,0,0-2.057-.753,13.813,13.813,0,0,0-1.421.173.434.434,0,0,1-.454-.331,6.774,6.774,0,0,0-.239-.882C1.749,15.761.044,15.464,0,14.7a.389.389,0,0,1,.325-.4,5.5,5.5,0,0,0,3.739-3.143l.009-.019a.831.831,0,0,0,.09-.686c-.185-.435-.983-.591-1.318-.724-.867-.343-.988-.736-.937-1.006a.941.941,0,0,1,1.207-.565,2.093,2.093,0,0,0,.861.23.746.746,0,0,0,.364-.079c-.075-1.314-.26-3.192.208-4.241A4.982,4.982,0,0,1,9.173,1.081l.37,0a4.948,4.948,0,0,1,4.634,2.986c.467,1.048.283,2.918.208,4.243a.717.717,0,0,0,.314.078,2.185,2.185,0,0,0,.807-.229.99.99,0,0,1,.749,0h0a.76.76,0,0,1,.57.654c.007.356-.312.664-.946.915-.077.031-.172.061-.272.092-.358.114-.9.285-1.047.632a.831.831,0,0,0,.09.686l.009.019A5.5,5.5,0,0,0,18.4,14.3.4.4,0,0,1,18.682,14.878Z"
												transform="translate(0 -1.078)"
												fill="#fff"
											/>
										</svg>

										<p className="text-[13px] leading-[13px] xl:text-[20px] font-anton xl:leading-[20px]">
											Share
										</p>
									</div>

									<div className="bg-black text-white rounded-full flex flex-row space-x-2 items-center justify-center py-2 px-3 text-base font-black">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 18.725 17.604"
											className="w-[11px] h-[11px] xl:w-[18px] xl:h-[18px]"
										>
											<path
												id="Icon_awesome-snapchat-ghost"
												data-name="Icon awesome-snapchat-ghost"
												d="M18.682,14.878c-.191.445-1,.771-2.463,1a6.859,6.859,0,0,0-.238.876.423.423,0,0,1-.444.324h-.011c-.344,0-.7-.158-1.421-.158a2.894,2.894,0,0,0-2.057.753,4.119,4.119,0,0,1-2.707,1,4.2,4.2,0,0,1-2.665-1,2.891,2.891,0,0,0-2.057-.753,13.813,13.813,0,0,0-1.421.173.434.434,0,0,1-.454-.331,6.774,6.774,0,0,0-.239-.882C1.749,15.761.044,15.464,0,14.7a.389.389,0,0,1,.325-.4,5.5,5.5,0,0,0,3.739-3.143l.009-.019a.831.831,0,0,0,.09-.686c-.185-.435-.983-.591-1.318-.724-.867-.343-.988-.736-.937-1.006a.941.941,0,0,1,1.207-.565,2.093,2.093,0,0,0,.861.23.746.746,0,0,0,.364-.079c-.075-1.314-.26-3.192.208-4.241A4.982,4.982,0,0,1,9.173,1.081l.37,0a4.948,4.948,0,0,1,4.634,2.986c.467,1.048.283,2.918.208,4.243a.717.717,0,0,0,.314.078,2.185,2.185,0,0,0,.807-.229.99.99,0,0,1,.749,0h0a.76.76,0,0,1,.57.654c.007.356-.312.664-.946.915-.077.031-.172.061-.272.092-.358.114-.9.285-1.047.632a.831.831,0,0,0,.09.686l.009.019A5.5,5.5,0,0,0,18.4,14.3.4.4,0,0,1,18.682,14.878Z"
												transform="translate(0 -1.078)"
												fill="#fff"
											/>
										</svg>

										<p className="text-[13px] leading-[13px] xl:text-[20px] font-anton xl:leading-[20px]">
											Share
										</p>
									</div>
									<div className="bg-black text-white rounded-full flex flex-row space-x-2 items-center justify-center py-2 px-3 text-base font-black">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 18.725 17.604"
											className="w-[11px] h-[11px] xl:w-[18px] xl:h-[18px]"
										>
											<path
												id="Icon_awesome-snapchat-ghost"
												data-name="Icon awesome-snapchat-ghost"
												d="M18.682,14.878c-.191.445-1,.771-2.463,1a6.859,6.859,0,0,0-.238.876.423.423,0,0,1-.444.324h-.011c-.344,0-.7-.158-1.421-.158a2.894,2.894,0,0,0-2.057.753,4.119,4.119,0,0,1-2.707,1,4.2,4.2,0,0,1-2.665-1,2.891,2.891,0,0,0-2.057-.753,13.813,13.813,0,0,0-1.421.173.434.434,0,0,1-.454-.331,6.774,6.774,0,0,0-.239-.882C1.749,15.761.044,15.464,0,14.7a.389.389,0,0,1,.325-.4,5.5,5.5,0,0,0,3.739-3.143l.009-.019a.831.831,0,0,0,.09-.686c-.185-.435-.983-.591-1.318-.724-.867-.343-.988-.736-.937-1.006a.941.941,0,0,1,1.207-.565,2.093,2.093,0,0,0,.861.23.746.746,0,0,0,.364-.079c-.075-1.314-.26-3.192.208-4.241A4.982,4.982,0,0,1,9.173,1.081l.37,0a4.948,4.948,0,0,1,4.634,2.986c.467,1.048.283,2.918.208,4.243a.717.717,0,0,0,.314.078,2.185,2.185,0,0,0,.807-.229.99.99,0,0,1,.749,0h0a.76.76,0,0,1,.57.654c.007.356-.312.664-.946.915-.077.031-.172.061-.272.092-.358.114-.9.285-1.047.632a.831.831,0,0,0,.09.686l.009.019A5.5,5.5,0,0,0,18.4,14.3.4.4,0,0,1,18.682,14.878Z"
												transform="translate(0 -1.078)"
												fill="#fff"
											/>
										</svg>

										<p className="text-[13px] leading-[13px] xl:text-[20px] font-anton xl:leading-[20px]">
											Share
										</p>
									</div>
									<div className="bg-black text-white rounded-full flex flex-row space-x-2 items-center justify-center py-2 px-3 text-base font-black">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 18.725 17.604"
											className="w-[11px] h-[11px] xl:w-[18px] xl:h-[18px]"
										>
											<path
												id="Icon_awesome-snapchat-ghost"
												data-name="Icon awesome-snapchat-ghost"
												d="M18.682,14.878c-.191.445-1,.771-2.463,1a6.859,6.859,0,0,0-.238.876.423.423,0,0,1-.444.324h-.011c-.344,0-.7-.158-1.421-.158a2.894,2.894,0,0,0-2.057.753,4.119,4.119,0,0,1-2.707,1,4.2,4.2,0,0,1-2.665-1,2.891,2.891,0,0,0-2.057-.753,13.813,13.813,0,0,0-1.421.173.434.434,0,0,1-.454-.331,6.774,6.774,0,0,0-.239-.882C1.749,15.761.044,15.464,0,14.7a.389.389,0,0,1,.325-.4,5.5,5.5,0,0,0,3.739-3.143l.009-.019a.831.831,0,0,0,.09-.686c-.185-.435-.983-.591-1.318-.724-.867-.343-.988-.736-.937-1.006a.941.941,0,0,1,1.207-.565,2.093,2.093,0,0,0,.861.23.746.746,0,0,0,.364-.079c-.075-1.314-.26-3.192.208-4.241A4.982,4.982,0,0,1,9.173,1.081l.37,0a4.948,4.948,0,0,1,4.634,2.986c.467,1.048.283,2.918.208,4.243a.717.717,0,0,0,.314.078,2.185,2.185,0,0,0,.807-.229.99.99,0,0,1,.749,0h0a.76.76,0,0,1,.57.654c.007.356-.312.664-.946.915-.077.031-.172.061-.272.092-.358.114-.9.285-1.047.632a.831.831,0,0,0,.09.686l.009.019A5.5,5.5,0,0,0,18.4,14.3.4.4,0,0,1,18.682,14.878Z"
												transform="translate(0 -1.078)"
												fill="#fff"
											/>
										</svg>

										<p className="text-[13px] leading-[13px] xl:text-[20px] font-anton xl:leading-[20px]">
											Share
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* <div className="rounded-[43px] border-[7px] border-black p-16 flex flex-row space-x-32">
							<div className="flex flex-col justify-between">
								<h1 className="text-[41px] font-anton leading-[41px] text-black">
									Share with friends on your socials or your
									contact to activate Champagne app in your
									college.
								</h1>{" "}
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

										<p className="text-[20px] font-anton leading-[20px]">
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

										<p className="text-[20px] font-anton leading-[20px]">
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

										<p className="text-[20px] font-anton leading-[20px]">
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

										<p className="text-[20px] font-anton leading-[20px] truncate">
											Share with friends
										</p>
									</div>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>

			<div className="w-full max-w-5xl xl:max-w-7xl xl:max-w-screen-2xl mx-auto flex items-center justify-center">
				<div className="w-full pb-[8rem] flex flex-col">
					<div className="relative">
						<h1 className="text-[47px] leading-[47px] xl:text-[97px] font-anton xl:leading-[92px] text-black w-full text-center xl:text-left">
							College Hallway
							<br />
							Ranking 🍾
						</h1>
					</div>

					<div className="grid grid-cols-1 xl:grid-cols-2 my-14 gap-x-8 gap-y-10">
						<div className="relative flex items-end justify-end">
							<div className="border-[4px] xl:border-[7px] border-black rounded-[43px] bg-white p-10 absolute w-full h-full z-[1] -left-0.5 -bottom-2.5" />
							<div className="border-[4px] xl:border-[7px] text-white self-end w-[98%] border-black rounded-[43px] bg-gradient-to-br from-champagne-pink relative via-champagne-light-blue to-champagne-green p-5 xl:p-10 z-[20] flex flex-col">
								<div className="grid w-full items-end justify-items-end">
									<h1 className="text-[46px] leading-[46px] xl:text-[79px] font-anton xl:leading-[79px]">
										1st
									</h1>
								</div>
								<div className="flex flex-col max-w-md mt-8 xl:mt-0">
									<h1 className="uppercase text-[9px] leading-[9px] xl:text-[18px] font-black xl:leading-[18px]">
										1000 students
									</h1>
									<h1 className="text-[61px] leading-[61px] xl:text-[71px] font-anton xl:leading-[71px] w-full">
										Stanford University
									</h1>
								</div>

								<div className="bg-black text-white rounded-full flex flex-row space-x-2 items-center justify-center py-3 px-6 text-base font-black absolute xl:bottom-5 xl:right-5 bg-opacity-40">
									<p className="text-[20px] font-anton leading-[20px]">
										Share
									</p>
								</div>
							</div>
						</div>

						<div className="relative flex items-end justify-end">
							<div className="border-[4px] xl:border-[7px] border-black rounded-[43px] bg-white p-10 absolute w-full h-full z-[1] -left-0.5 -bottom-2.5" />
							<div className="border-[4px] xl:border-[7px] text-white self-end w-[98%] border-black rounded-[43px] bg-champagne-pink relative p-5 xl:p-10 z-[20] flex flex-col">
								<div className="grid w-full items-end justify-items-end">
									<h1 className="text-[46px] leading-[46px] xl:text-[79px] font-anton xl:leading-[79px]">
										2nd
									</h1>
								</div>
								<div className="flex flex-col max-w-md mt-8 xl:mt-0">
									<h1 className="uppercase text-[9px] leading-[9px] xl:text-[18px] font-black xl:leading-[18px]">
										500 students
									</h1>
									<h1 className="text-[61px] leading-[61px] xl:text-[71px] font-anton xl:leading-[71px] w-full">
										Harvard University
									</h1>
								</div>

								<div className="bg-black text-white rounded-full flex flex-row space-x-2 items-center justify-center py-3 px-6 text-base font-black absolute xl:bottom-5 xl:right-5 bg-opacity-40">
									<p className="text-[20px] font-anton leading-[20px]">
										Share
									</p>
								</div>
							</div>
						</div>

						<div className="border-[4px] xl:border-[7px] text-black self-end w-full border-black rounded-[43px] bg-white relative p-5 xl:p-10 z-[20] flex flex-col xl:col-span-full">
							<div className="grid w-full items-end justify-items-end">
								<h1 className="text-[46px] leading-[46px] xl:text-[79px] font-anton xl:leading-[79px]">
									3rd
								</h1>
							</div>
							<div className="flex flex-col max-w-5xl mt-8 xl:mt-0">
								<h1 className="uppercase text-[9px] leading-[9px] xl:text-[18px] font-black xl:leading-[18px]">
									500 students
								</h1>
								<h1 className="text-[61px] leading-[61px] xl:text-[71px] font-anton xl:leading-[71px] w-full">
									UCLA - University of California, Los Ang
								</h1>
							</div>

							<div className="bg-black text-white rounded-full flex flex-row space-x-2 items-center justify-center py-3 px-6 text-base font-black absolute xl:bottom-5 xl:right-5 bg-opacity-40">
								<p className="text-[20px] font-anton leading-[20px]">
									Share
								</p>
							</div>
						</div>

						<div className="border-[4px] xl:border-[7px] text-black self-end w-full border-black rounded-[43px] bg-white relative p-5 xl:p-10 z-[20] flex flex-col xl:col-span-full">
							<div className="grid w-full items-end justify-items-end">
								<h1 className="text-[46px] leading-[46px] xl:text-[79px] font-anton xl:leading-[79px]">
									4th
								</h1>
							</div>
							<div className="flex flex-col max-w-5xl mt-8 xl:mt-0">
								<h1 className="uppercase text-[9px] leading-[9px] xl:text-[18px] font-black xl:leading-[18px]">
									200 students
								</h1>
								<h1 className="text-[61px] leading-[61px] xl:text-[71px] font-anton xl:leading-[71px] w-full">
									Santa Clara University
								</h1>
							</div>

							<div className="bg-black text-white rounded-full flex flex-row space-x-2 items-center justify-center py-3 px-6 text-base font-black absolute xl:bottom-5 xl:right-5 bg-opacity-40">
								<p className="text-[20px] font-anton leading-[20px]">
									Share
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function LeaderBoard() {
	return (
		<Layout footer={false}>
			<Hero />
		</Layout>
	);
}
