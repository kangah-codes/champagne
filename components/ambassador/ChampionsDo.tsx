import Image from "next/image";

export default function ChampionsDo() {
	return (
		<div className="w-full bg-white flex relative pb-[64.3px] lg1:pb-32">
			<div className="w-full mx-auto flex flex-col items-center justify-center">
				<div className="lg1:mb-[39px] xl1:mb-[49px] 2xl:mb-[55px]">
					<h1 className="text-[47px] leading-[47px] text-black xl:text-[51px] xl:leading-[51px] lg1:text-[48px] lg1:leading-[48px] xl1:text-[52px] xl1:leading-[52px] 2xl:text-[71px] 2xl:leading-[71px] font-anton">
						What Do Champions Do?
					</h1>
				</div>
				<div className="mx-auto w-full flex flex-row space-x-[80px] items-center justify-center">
					<div className="w-[1104px] h-[682px] shrink-0 relative">
						<Image
							className="object-cover"
							fill
							src="/images/content/champions-do.png"
							alt="img"
						/>
					</div>
					<div className="w-[1104px] h-[682px] shrink-0 relative">
						<Image
							className="object-cover"
							fill
							src="/images/content/champions-do.png"
							alt="img"
						/>
					</div>
					<div className="w-[1104px] h-[682px] shrink-0 relative">
						<Image
							className="object-cover"
							fill
							src="/images/content/champions-do.png"
							alt="img"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
