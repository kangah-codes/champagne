import Image from "next/image";

export default function Images() {
	return (
		<div className="w-full bg-white flex overflow-hidden px-4 relative">
			<div className="w-full max-w-screen-2xl mx-auto flex items-center justify-center">
				<div className="mx-auto py-[12rem] w-full">
					<div className="my-auto gap-5 relative w-full grid grid-cols-4 items-start">
						<div className="relative">
							<div className="h-[523px] w-[347px] rounded-[39px] overflow-hidden rotate-[-1deg] absolute border border-champagne-light-gray bottom-3 right-3 bg-white" />
							<div
								className="h-[523px] w-[347px] relative rounded-[32px] overflow-hidden rotate-[-1deg]"
								style={{
									backgroundImage:
										"url(/images/content/woman-2.jpg)",
									backgroundSize: "cover",
									backgroundPosition: "center",
								}}
							>
								<div className="absolute bottom-0 px-10 py-5 w-full bg-gradient-to-r from-champagne-pink via-champagne-light-blue to-champagne-green">
									<p className="text-white text-xl font-black text-center">
										Jack gave you a thump up on your date 👍
									</p>
								</div>
							</div>
						</div>
						<div className="relative mt-20">
							<div className="h-[523px] w-[347px] rounded-[39px] overflow-hidden rotate-[2deg] absolute border border-champagne-light-gray top-3 right-3 bg-white" />
							<div
								className="h-[523px] w-[347px] relative rounded-[32px] overflow-hidden rotate-[2deg]"
								style={{
									backgroundImage:
										"url(/images/content/guy-2.png)",
									backgroundSize: "cover",
									backgroundPosition: "center",
								}}
							>
								<div className="absolute bottom-0 px-10 py-5 w-full bg-gradient-to-r from-champagne-green via-champagne-light-blue to-champagne-pink bg-white">
									<p className="text-white text-xl font-black text-center">
										Kylie thinks you guys will be great
										together 😘👍😘
									</p>
								</div>
							</div>
						</div>
						<div className="relative">
							{" "}
							<div className="h-[523px] w-[347px] rounded-[39px] overflow-hidden rotate-[-2deg] absolute border border-champagne-light-gray bottom-3 right-3 bg-white" />
							<div
								className="h-[523px] w-[347px] relative rounded-[32px] overflow-hidden rotate-[-2deg]"
								style={{
									backgroundImage:
										"url(/images/content/woman-1.jpg)",
									backgroundSize: "cover",
									backgroundPosition: "center",
								}}
							>
								<div className="absolute bottom-0 px-10 py-5 w-full bg-gradient-to-r from-champagne-pink via-champagne-light-blue to-champagne-green">
									<p className="text-white text-xl font-black text-center">
										Paul thinks you guys will be great
										together 😘
									</p>
								</div>
							</div>
						</div>
						<div className="relative mt-20">
							{" "}
							<div className="h-[523px] w-[347px] rounded-[39px] overflow-hidden rotate-[3deg] absolute border border-champagne-light-gray top-3 right-3 bg-white" />
							<div
								className="h-[523px] w-[347px] relative rounded-[32px] overflow-hidden rotate-[3deg]"
								style={{
									backgroundImage:
										"url(/images/content/guy-1.webp)",
									backgroundSize: "cover",
									backgroundPosition: "center",
								}}
							>
								<div className="absolute bottom-0 px-10 py-5 w-full bg-gradient-to-r from-champagne-green via-champagne-light-blue to-champagne-pink">
									<p className="text-white text-xl font-black text-center">
										Lisa gave you a thump up on your date 👍
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
