/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Hero() {
	return (
		<div
			className="w-full flex h-[685px] lg1:h-[647px] xl:h-[687px] xl1:h-[715px] 2xl:h-[953px] relative"
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
					<div className="my-auto itens-center space-x-5 flex flex-row relative text-[47px] leading-[47px] text-white lg1:text-[88px] lg1:leading-[88px] xl:text-[93px] xl:leading-[93px] xl1:text-[96px] xl1:leading-[96px] 2xl:text-[130px] 2xl:leading-[130px]  font-anton text-center w-full">
						<h1 className="">
							Be the next{" "}
							<span className="block lg1:hidden">Champion</span>
						</h1>
						<div className="relative items-center justify-center hidden lg1:flex">
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
