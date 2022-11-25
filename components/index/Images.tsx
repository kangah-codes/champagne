/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

export default function Images() {
	return (
		<div className="w-full flex overflow-hidden  relative">
			<div className="w-full lg1:max-w-[85%] 3xl:max-w-[70%] mx-auto flex items-center justify-center">
				<div className="mx-auto py-[5rem] xl:py-[12rem] w-full">
					<img
						alt="img"
						src="/images/content/groupmobile.png"
						className="w-screen block lg1:hidden"
					/>
					<div className="m-auto hidden lg1:block">
						<img
							alt="img"
							src="/images/content/datinggroup.png"
							className="w-full"
						/>
						{/* <div className="relative mt-20">
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
						<div className="relative mt-20 hidden lg1:block">
							<img
								alt="img"
								src="/images/content/group-4.png"
								className="w-full"
							/>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
}
