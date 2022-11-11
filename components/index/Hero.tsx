import Image from "next/image";

export default function Hero() {
	return (
		<div className="w-full bg-white flex overflow-hidden px-4">
			<div className="w-full max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl mx-auto flex items-center justify-center">
				<div className="mx-auto pt-[12rem] pb-[8rem]">
					<div className="my-auto space-y-5 flex flex-col relative">
						<div className="absolute right-24 rotate-[15deg] -top-[80px]">
							<Image
								width={80}
								height={80}
								alt="Heart eyes"
								src="/images/emojis/heart-eyes.png"
								className=""
							/>
						</div>
						<div className="absolute right-24 -bottom-[60px] scale-x-[-1]">
							<Image
								width={80}
								height={80}
								alt="Heart eyes"
								src="/images/emojis/bottle.png"
								className=""
							/>
						</div>
						<div className="absolute left-24 rotate-[15deg] -bottom-[50px]">
							<Image
								width={80}
								height={80}
								alt="Heart eyes"
								src="/images/emojis/kiss.png"
								className=""
							/>
						</div>
						<div className="absolute -left-14 rotate-[15deg] -top-[50px]">
							<Image
								width={80}
								height={80}
								alt="Heart eyes"
								src="/images/emojis/clinking-glasses.png"
								className=""
							/>
						</div>
						<h1 className="text-[97px] font-anton leading-[92px] text-center text-black w-full">
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
