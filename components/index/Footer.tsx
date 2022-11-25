/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import Router from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../../recoil";

interface FooterProps {
	pt?: boolean;
}

const Footer = () => {
	const [isOpen, setIsOpen] = useRecoilState(modalState);

	return (
		<div
			className={`relative bg-gradient-to-r from-champagne-pink via-champagne-light-blue to-champagne-green text-black`}
		>
			{/* // 1366 - 140, 1920 - 160, 1280 - 106, 1440 - 118 */}
			<div className="mx-auto px-[15px] lg1:px-10">
				<div className="flex px-[30px] flex-col w-full pt-20 pb-20 lg1:pb-[118px] lg1:pt-[128px] xl:pt-[140px] 2xl:pt-[191px] 2xl:pb-[160px] max-w-[866px] xl:max-w-[923px] xl1:max-w-[975px] 2xl:max-w-screen-2xl mx-auto items-center">
					<div className="flex flex-col items-start space-y-[14px]">
						<div className="flex flex-row items-center space-x-5">
							<p className="text-white text-[14px] leading-[14px] xl:text-[37px] xl:leading-[37px] font-black">
								Campus Gist
							</p>
							<img
								width={35}
								height={35}
								alt="Champagne app mockup"
								src="/images/emojis/bus.png"
								className="xl:w-[59px] xl:h-[59px] w-[32px] h-[32px] rotate-[23deg]"
							/>
						</div>
						<div className="">
							<h1 className="text-[45px] leading-[45px] lg1:text-[64px] lg1:leading-[64px] xl:text-[68px] xl:leading-[68px] xl1:text-[72px] xl1:leading-[72px] 2xl:text-[97px] font-anton 2xl:leading-[92px] text-white">
								Get to know all the trending{" "}
								<br className="hidden 2xl:block" /> activities
								on your campus 🤩
							</h1>
							{/* <div className="absolute right-5 bottom-2 xl:right-[11rem] xl:-bottom-[1.5rem]">
							<img
								width={80}
								height={80}
								alt="Heart eyes"
								src="/images/emojis/star-eyes.png"
								className="xl:w-[80px] xl:h-[80px] w-[32px] h-[32px] rotate-[23deg]"
								/>
						</div> */}
						</div>
						<div
							onClick={() => setIsOpen(true)}
							className="cursor-pointer bg-white rounded-full rotate-[-1deg] my-auto flex items-center justify-center py-[20px] px-[59px] text-black text-[18px] leading-[18px] lg1:leading-[21px] lg1:text-[21px] xl1:text-[23px] xl1:leading-[23px] font-black"
						>
							<p className="my-auto">Join waitlist</p>
						</div>
					</div>
				</div>

				<div className="max-w-full mx-auto py-10 border-t border-champagne-lighter-gray flex flex-row justify-between text-[14px] leading-[14px] xl:text-[15px] font-medium xl:leading-[15px] 2xl:text-[23px] 2xl:leading-[23px]">
					<div className="flex flex-col space-y-5">
						<p className=" text-white">Champagne - BBSocial Inc.</p>
						<p className=" text-white block xl:hidden">
							&copy; {` Copyright ${new Date().getFullYear()}`}
						</p>
					</div>
					<div className="flex flex-col lg1:flex-row space-y-5 lg1:space-y-0 lg1:space-x-[40px]">
						<Link
							href="https://instagram.com/cham.pagneapp?igshid=MDM4ZDc5MmU="
							className="flex flex-row items-center space-x-1"
						>
							<svg
								fill="#fff"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="30px"
								height="30px"
							>
								{" "}
								<path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" />
							</svg>
							<p className="text-[14px] xl:text-[22px] font-medium text-white">
								Instagram
							</p>
						</Link>
						<Link
							href="https://twitter.com/champagne_app"
							className="flex flex-row items-center space-x-1"
						>
							<svg
								fill="#FFFFFF"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 30 30"
								width="30px"
								height="30px"
							>
								{" "}
								<path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" />
							</svg>
							<p className="text-[14px] xl:text-[22px] font-medium text-white">
								Twitter
							</p>
						</Link>
						<Link
							href="https://www.linkedin.com/company/champagneapp/"
							className="flex flex-row items-center space-x-1"
						>
							<svg
								fill="#FFFFFF"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 26 26"
								width="25px"
								height="25px"
							>
								<path d="M 21.125 0 L 4.875 0 C 2.183594 0 0 2.183594 0 4.875 L 0 21.125 C 0 23.816406 2.183594 26 4.875 26 L 21.125 26 C 23.816406 26 26 23.816406 26 21.125 L 26 4.875 C 26 2.183594 23.816406 0 21.125 0 Z M 8.039063 22.070313 L 4 22.070313 L 3.976563 9.976563 L 8.015625 9.976563 Z M 5.917969 8.394531 L 5.894531 8.394531 C 4.574219 8.394531 3.722656 7.484375 3.722656 6.351563 C 3.722656 5.191406 4.601563 4.3125 5.945313 4.3125 C 7.289063 4.3125 8.113281 5.191406 8.140625 6.351563 C 8.140625 7.484375 7.285156 8.394531 5.917969 8.394531 Z M 22.042969 22.070313 L 17.96875 22.070313 L 17.96875 15.5 C 17.96875 13.910156 17.546875 12.828125 16.125 12.828125 C 15.039063 12.828125 14.453125 13.558594 14.171875 14.265625 C 14.066406 14.519531 14.039063 14.867188 14.039063 15.222656 L 14.039063 22.070313 L 9.945313 22.070313 L 9.921875 9.976563 L 14.015625 9.976563 L 14.039063 11.683594 C 14.5625 10.875 15.433594 9.730469 17.519531 9.730469 C 20.105469 9.730469 22.039063 11.417969 22.039063 15.046875 L 22.039063 22.070313 Z" />
							</svg>
							<p className="text-[14px] xl:text-[22px] font-medium text-white">
								LinkedIn
							</p>
						</Link>
						<Link
							href="https://www.tiktok.com/@champagneapp?_t=8XSRe3QFp8d&_r=1"
							className="flex flex-row items-center space-x-1"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18.014"
								height="20.735"
								viewBox="0 0 18.014 20.735"
							>
								<path
									id="Icon_simple-tiktok"
									data-name="Icon simple-tiktok"
									d="M11.83.017C12.962,0,14.085.009,15.208,0A5.381,5.381,0,0,0,16.72,3.6a6.093,6.093,0,0,0,3.663,1.546V8.631a9.248,9.248,0,0,1-3.629-.838,10.674,10.674,0,0,1-1.4-.8c-.009,2.523.009,5.046-.017,7.56a6.6,6.6,0,0,1-1.166,3.4,6.437,6.437,0,0,1-5.106,2.773,6.3,6.3,0,0,1-3.525-.89A6.515,6.515,0,0,1,2.387,14.9c-.017-.432-.026-.864-.009-1.287A6.5,6.5,0,0,1,9.92,7.845c.017,1.279-.035,2.557-.035,3.836A2.964,2.964,0,0,0,6.1,13.512,3.427,3.427,0,0,0,5.981,14.9,2.94,2.94,0,0,0,9,17.383,2.9,2.9,0,0,0,11.4,15.992a1.993,1.993,0,0,0,.354-.916c.086-1.546.052-3.084.06-4.631C11.821,6.964,11.8,3.49,11.83.017Z"
									transform="translate(-2.369)"
									fill="#fff"
								/>
							</svg>
							<p className="text-[14px] xl:text-[22px] font-medium text-white">
								Tiktok
							</p>
						</Link>
					</div>
					<p className="text-[23px] font-medium leading-[23px] text-white hidden lg1:block">
						&copy; {` Copyright ${new Date().getFullYear()}`}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
