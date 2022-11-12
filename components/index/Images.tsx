import Image from "next/image";

export default function Images() {
	return (
		<div className="w-full bg-white flex overflow-hidden px-4 relative">
			<div className="w-full  2xl:max-w-screen-2xl mx-auto flex items-center justify-center">
				<div className="mx-auto py-[12rem] w-full">
					<div className="m-auto gap-[11rem] 2xl:gap-5 relative w-full grid grid-cols-3 2xl:grid-cols-4 items-start -ml-20 2xl:-ml-0">
						<div className="relative">
							<div className="h-[211px] w-[140px] 2xl:h-[523px] 2xl:w-[347px] rounded-[20px] 2xl:rounded-[39px] overflow-hidden rotate-[-1deg] absolute border border-champagne-light-gray 2xl:bottom-3 2xl:right-3 -top-2 2xl:-top-0 right-2 bg-white" />
							<div
								className="h-[211px] w-[140px] 2xl:h-[523px] 2xl:w-[347px] relative rounded-[18px] 2xl:rounded-[32px] overflow-hidden rotate-[-1deg]"
								style={{
									backgroundImage:
										"url(/images/content/woman-2.jpg)",
									backgroundSize: "cover",
									backgroundPosition: "center",
								}}
							>
								<div className="absolute bottom-0 px-2 py-2 2xl:px-10 2xl:py-5 w-full bg-gradient-to-r from-champagne-pink via-champagne-light-blue to-champagne-green">
									<p className="text-white text-[9px] leading-[9px] 2xl:text-[20px] 2xl:leading-[20px] font-black text-center">
										Jack gave you a thump up on your date 👍
									</p>
								</div>
							</div>
						</div>
						<div className="relative mt-20">
							<div className="h-[211px] w-[140px] 2xl:h-[523px] 2xl:w-[347px] rounded-[20px] 2xl:rounded-[39px] overflow-hidden rotate-[2deg] absolute border border-champagne-light-gray 2xl:top-3 2xl:right-3 -bottom-2 right-2 bg-white" />
							<div
								className="h-[211px] w-[140px] 2xl:h-[523px] 2xl:w-[347px] relative rounded-[18px] 2xl:rounded-[32px] overflow-hidden rotate-[2deg]"
								style={{
									backgroundImage:
										"url(/images/content/guy-2.png)",
									backgroundSize: "cover",
									backgroundPosition: "center",
								}}
							>
								<div className="absolute bottom-0 px-2 py-2 2xl:px-10 2xl:py-5 w-full bg-gradient-to-r from-champagne-pink via-champagne-light-blue to-champagne-green">
									<p className="text-white text-[9px] leading-[9px] 2xl:text-[20px] 2xl:leading-[20px] font-black text-center">
										Kylie thinks you guys will be great
										together 😘👍😘
									</p>
								</div>
							</div>
						</div>
						<div className="relative">
							{" "}
							<div className="h-[211px] w-[140px] 2xl:h-[523px] 2xl:w-[347px] rounded-[20px] 2xl:rounded-[39px] overflow-hidden rotate-[-2deg] absolute border border-champagne-light-gray -top-1 2xl:-top-0 right-3 2xl:bottom-3 2xl:right-3 bg-white hidden 2xl:absolute" />
							<div
								className="h-[211px] w-[140px] 2xl:h-[523px] 2xl:w-[347px] relative rounded-[18px] 2xl:rounded-[32px] overflow-hidden rotate-[-2deg]"
								style={{
									backgroundImage:
										"url(/images/content/woman-1.jpg)",
									backgroundSize: "cover",
									backgroundPosition: "center",
								}}
							>
								<div className="absolute bottom-0 px-2 py-2 2xl:px-10 2xl:py-5 w-full bg-gradient-to-r from-champagne-pink via-champagne-light-blue to-champagne-green">
									<p className="text-white text-[9px] leading-[9px] 2xl:text-[20px] 2xl:leading-[20px] font-black text-center">
										Paul thinks you guys will be great
										together 😘
									</p>
								</div>
							</div>
						</div>
						<div className="relative mt-20 hidden 2xl:block">
							{" "}
							<div className="h-[211px] w-[140px] 2xl:h-[523px] 2xl:w-[347px] rounded-[20px] 2xl:rounded-[39px] overflow-hidden rotate-[3deg] absolute border border-champagne-light-gray top-3 right-3 bg-white" />
							<div
								className="h-[211px] w-[140px] 2xl:h-[523px] 2xl:w-[347px] relative rounded-[18px] 2xl:rounded-[32px] overflow-hidden rotate-[3deg]"
								style={{
									backgroundImage:
										"url(/images/content/guy-1.webp)",
									backgroundSize: "cover",
									backgroundPosition: "center",
								}}
							>
								<div className="absolute bottom-0 px-2 py-2 2xl:px-10 2xl:py-5 w-full bg-gradient-to-r from-champagne-pink via-champagne-light-blue to-champagne-green">
									<p className="text-white text-[9px] leading-[9px] 2xl:text-[20px] 2xl:leading-[20px] font-black text-center">
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
