/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Hero() {
	return (
		<div className="w-full bg-white flex px-4">
			<div className="w-full max-w-5xl lg1:max-w-7xl 2xl:max-w-screen-2xl mx-auto flex items-center justify-center">
				<div className="mx-auto py-[5rem] lg1:pt-[12rem] lg1:pb-[6rem]">
					<div className="my-auto space-y-5 flex flex-col relative">
						<div className="absolute top-16 md:top-36 lg1:right-0 rotate-[15deg] lg1:-top-[100px]">
							<img
								alt="Heart eyes"
								src="/images/emojis/heart-eyes.png"
								className="w-[45px] h-[45px] lg1:w-[80px] lg1:h-[80px]"
							/>
						</div>
						<div className="absolute -bottom-12 right-10 lg1:right-24 lg1:-bottom-[100px] lg1:scale-x-[-1]">
							<img
								alt="Heart eyes"
								src="/images/emojis/bottle.png"
								className="w-[45px] h-[45px] lg1:w-[80px] lg1:h-[80px]"
							/>
						</div>
						<div className="absolute top-2 md:top-0 right-0 lg1:right-0 lg1:left-24 rotate-[15deg] lg1:top-[22rem]">
							<img
								alt="Heart eyes"
								src="/images/emojis/kiss.png"
								className="w-[45px] h-[45px] lg1:w-[80px] lg1:h-[80px]"
							/>
						</div>
						<div className="absolute lg1:-left-14 rotate-[15deg] lg1:-top-[50px] -top-14 left-1/2">
							<img
								className="w-[45px] h-[45px] lg1:w-[80px] lg1:h-[80px]"
								alt="Heart eyes"
								src="/images/emojis/clinking-glasses.png"
							/>
						</div>
						<h1 className="text-[47px] leading-[47px] xl:text-[68px] xl:leading-[68px] lg1:text-[64px] lg1:leading-[64px] xl1:text-[72px] xl1:leading-[72px] 2lg1:text-[97px] 2lg1:leading-[92px] font-anton text-center text-black w-full">
							Where your <br />
							friend <br className="block md:hidden" />
							recommends your <br />
							next date
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
}
