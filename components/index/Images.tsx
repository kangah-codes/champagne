/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

export default function Images() {
	return (
		<div className="w-full flex overflow-hidden  relative">
			<div className="w-full xl:max-w-screen-2xl mx-auto flex items-center justify-center">
				<div className="mx-auto py-[5rem] xl:py-[12rem] w-full">
					<img
						alt="img"
						src="/images/content/group-mobile.png"
						className="w-screen block md:hidden"
					/>
					<div className="m-auto px-4 gap-10 xl:gap-5 relative w-full grid-cols-3 xl:grid-cols-4 items-start hidden md:grid">
						<img
							alt="img"
							src="/images/content/group-1.png"
							className="w-full"
						/>
						<div className="relative mt-20">
							<img
								alt="img"
								src="/images/content/group-2.png"
								className="w-full"
							/>
						</div>
						<div className="relative">
							<img
								alt="img"
								src="/images/content/group-3.png"
								className="w-full"
							/>
						</div>
						<div className="relative mt-20 hidden xl:block">
							{" "}
							{/* <div className="h-[211px] w-[140px] xl:h-[523px] xl:w-[347px] rounded-[20px] xl:rounded-[39px] overflow-hidden rotate-[3deg] absolute border border-champagne-light-gray top-3 right-3 bg-white" /> */}
							<img
								alt="img"
								src="/images/content/group-4.png"
								className="w-full"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
