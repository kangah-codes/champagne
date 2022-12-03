import Image from "next/image";

export default function ChampionsTask() {
	return (
		<div className="w-full bg-white flex px-4 relative pb-[64.3px] lg1:pb-32">
			<div className="w-full max-w-5xl lg1:max-w-[985px] xl:max-w-[1066px] xl1:max-w-[1107px] 2xl:max-w-screen-2xl mx-auto flex items-center justify-center">
				<div className="mx-auto w-full flex flex-col space-y-32">
					<div className="relative w-full">
						<div className="bg-white z-10 absolute rotate-[355deg] border-[3px] border-black left-2 2xl:-left-[30px] 2xl:top-5">
							<div className="relative px-5 py-0.5 xl:py-5 xl:px-10">
								<p className="text-[18px] xl:text-[34px] uppercase leading-[34px] text-champagne-pink font-black">
									campus
								</p>
							</div>
						</div>
						<div className="bg-white z-[5] absolute rotate-[355deg] border-[3px] border-black left-0 top-2 2xl:-left-[36px] 2xl:top-7">
							<div className="relative px-5 py-0.5 xl:py-5 xl:px-10">
								<p className="text-[18px] xl:text-[34px] uppercase leading-[34px] text-champagne-pink font-black">
									campus
								</p>
							</div>
						</div>
						<div className="w-full border-[4px] xl:border-[7px] border-black rounded-[36px] xl:rounded-[52px] 2xl:rounded-[73px] flex flex-col p-5 md:p-10 xl:p-16">
							<div className="w-full flex flex-row mt-[70px] space-x-[54px]">
								<div className="">
									<Image
										alt="Champagne app mockup"
										src="/images/content/champions.png"
										width="620"
										height="692"
									/>
								</div>
								<div className="max-w-[456px]">
									<h1 className="text-[45px] leading-[45px] lg1:text-[64px] lg1:leading-[64px] xl:text-[68px] xl:leading-[68px] xl1:text-[72px] xl1:leading-[72px] 2xl:text-[97px] 2xl:leading-[92px] font-anton text-black w-full">
										Market & Promote Champagne on your
										Campus
									</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
