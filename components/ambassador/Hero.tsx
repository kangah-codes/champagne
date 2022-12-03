/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Hero() {
	return (
		<div
			className="w-full flex h-[953px] relative"
			style={{
				backgroundImage: "url('/images/content/ambassador-hero.png')",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="w-full h-full opacity-60 bg-black absolute" />
			<div className="w-full max-w-5xl lg1:max-w-7xl 2xl:max-w-screen-2xl mx-auto flex items-center justify-center px-4">
				<div className="mx-auto">
					<div className="my-auto itens-center space-x-5 flex flex-row relative text-[47px] leading-[47px] text-white xl:text-[68px] xl:leading-[68px] lg1:text-[64px] lg1:leading-[64px] xl1:text-[72px] xl1:leading-[72px] 2xl:text-[97px] 2xl:leading-[92px] font-anton text-center w-full">
						<h1 className="">Be the next </h1>
						<div className="relative flex items-center justify-center">
							<span className="font-outline-6">Champion</span>
							<span className="absolute text-black">
								Champion
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
