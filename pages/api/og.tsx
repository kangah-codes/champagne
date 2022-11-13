/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
	runtime: "experimental-edge",
};

export default function handler(req: NextRequest) {
	// try {
	const { searchParams } = new URL(req.url);

	// ?title=<title>
	const hasTitle = searchParams.has("title");
	const title = hasTitle
		? searchParams.get("title")?.slice(0, 100)
		: "My default title";

	return new ImageResponse(
		(
			<div
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "white",
				}}
			>
				<div className="w-full md:w-[70%] xl:w-[404px] h-[278px] xl:h-[409px] p-5 rounded-[14px] bg-white flex flex-col justify-between z-10">
					<div className="flex flex-row justify-between w-full">
						{/* <div className="flex flex-row space-x-2">
								<div className="bg-champagne-lighter-gray rounded-full flex flex-row items-center justify-center py-2 px-5 text-base font-black">
									<LinkIcon className="text-champagne-light-gray w-5 h-5" />
									<p className="text-black text-[10px] leading-[10px] xl:text-[16px] font-anton xl:leading-[16px]">
										Copy Card Link
									</p>
								</div>
								<div className="bg-champagne-lighter-gray rounded-full flex flex-row items-center justify-center py-2 px-5 text-base font-black">
									<img
										className="w-[15px] h-[15px] xl:w-[28px] xl:h-[28px] cursor-pointer"
										src="/images/emojis/dice.png"
										alt="Champagne Logo"
									/>
								</div>
							</div> */}

						<img
							className="w-[80px] xl:w-[103px] cursor-pointer"
							src="/images/logo.svg"
							alt="Champagne Logo"
						/>
					</div>

					<div>
						<h1 className="text-[29px] leading-[29px] xl:text-[44px] font-anton xl:leading-[44px] text-black">
							Checkout the most eligible{" "}
							<span className="text-champagne-light-blue">
								bachelors
							</span>{" "}
							&{" "}
							<span className="text-champagne-pink">
								bachelorettes
							</span>{" "}
							in {title}
						</h1>
					</div>
				</div>
			</div>
		),
		{
			width: 1200,
			height: 630,
		}
	);
	// } catch (e: any) {
	// 	console.log(`${e.message}`);
	// 	return new Response(`Failed to generate the image`, {
	// 		status: 500,
	// 	});
	// }
}
