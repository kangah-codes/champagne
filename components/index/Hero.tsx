/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Hero() {
	return (
		<div className="w-full bg-white flex overflow-hidden px-4">
			<div className="w-full max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl mx-auto flex items-center justify-center">
				<div className="mx-auto pt-[12rem] pb-[8rem]">
					<div className="my-auto space-y-5 flex flex-col relative">
						<div className="absolute top-16 2xl:right-24 rotate-[15deg] 2xl:-top-[80px]">
							<img
								alt="Heart eyes"
								src="/images/emojis/heart-eyes.png"
								className="w-[45px] h-[45px] 2xl:w-[80px] 2xl:h-[80px]"
							/>
						</div>
						<div className="absolute -bottom-12 right-1/2 2xl:right-24 2xl:-bottom-[60px] 2xl:scale-x-[-1]">
							<img
								alt="Heart eyes"
								src="/images/emojis/bottle.png"
								className="w-[45px] h-[45px] 2xl:w-[80px] 2xl:h-[80px]"
							/>
						</div>
						<div className="absolute top-10 2xl:top-0 right-10 2xl:right-0 2xl:left-24 rotate-[15deg] 2xl:-bottom-[50px]">
							<img
								alt="Heart eyes"
								src="/images/emojis/kiss.png"
								className="w-[45px] h-[45px] 2xl:w-[80px] 2xl:h-[80px]"
							/>
						</div>
						<div className="absolute 2xl:-left-14 rotate-[15deg] 2xl:-top-[50px] -top-14 left-1/2">
							<img
								className="w-[45px] h-[45px] 2xl:w-[80px] 2xl:h-[80px]"
								alt="Heart eyes"
								src="/images/emojis/clinking-glasses.png"
							/>
						</div>
						<h1 className="text-[47px] leading-[47px] 2xl:text-[97px] font-anton 2xl:leading-[92px] text-center text-black w-full">
							Where your <br />
							friend recommends your <br />
							next date
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
}
