/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Ranks() {
	return (
		<div className="w-full flex px-4 relative bg-[#F5F2F2]">
			<div className="w-full max-w-5xl lg1:max-w-7xl 2xl:max-w-screen-2xl mx-auto flex items-center justify-center px-[66px] py-[76px]">
				<div className="mx-auto flex flex-row space-x-[56px]">
					<div className="w-[599px] shrink-0">
						<Image
							alt="Champagne app mockup"
							src="/images/content/ranks.png"
							width="599"
							height="577"
						/>
					</div>
					<div className="my-auto itens-center flex flex-col relative w-full space-y-[15px] items-start">
						<h1 className="text-[47px] leading-[47px] text-black xl:text-[68px] xl:leading-[68px] lg1:text-[64px] lg1:leading-[64px] xl1:text-[72px] xl1:leading-[72px] 2xl:text-[97px] 2xl:leading-[92px] font-anton">
							Checkout the Champion ranks
						</h1>
						<div className="transform rotate-[-1deg] bg-white rounded-full xl:my-auto flex items-center justify-center py-[20px] px-[59px] my-5 lg:mt-14 text-black text-[18px] leading-[18px] lg1:leading-[21px] lg1:text-[21px] xl1:text-[23px] font-black">
							<p className="my-auto">View Rank</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
