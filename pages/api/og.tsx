/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
	runtime: "experimental-edge",
};

// Make sure the font exists in the specified path:
const font = fetch(
	new URL("../../public/fonts/Anton/Anton-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
	const fontData = await font;

	const { searchParams } = new URL(req.url);

	// ?title=<title>
	const hasTitle = searchParams.has("title");
	const title = hasTitle
		? searchParams.get("title")?.slice(0, 100)
		: "Champagne";

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
					fontFamily: "Anton",
					borderRadius: "12px",
				}}
			>
				{/* <div tw="w-full md:w-[70%] xl:w-[404px] h-[278px] xl:h-[409px] p-5 rounded-[14px] bg-white flex flex-col justify-between z-10">
					<div tw="flex flex-row justify-between w-full">
						<img
							tw="w-[80px] xl:w-[103px] cursor-pointer"
							src="/images/logo.svg"
							alt="Champagne Logo"
						/>
					</div>

					<div>
						<h1 tw="text-[29px] leading-[29px] xl:text-[44px] font-anton xl:leading-[44px] text-black">
							Checkout the most eligible{" "}
							<span tw="text-champagne-light-blue">
								bachelors
							</span>{" "}
							&{" "}
							<span tw="text-champagne-pink">bachelorettes</span>{" "}
							in {title}
						</h1>
					</div>
				</div> */}
				<div tw="bg-white flex h-full items-center rounded-xl">
					<div tw="flex flex-col w-full py-12 px-4 md:items-center justify-between p-2 mx-auto items-center">
						<h2 tw="flex flex-col text-5xl font-bold tracking-tight text-gray-900 text-left">
							<span>Checkout the most</span>
							<span tw="flex flex-row">
								eligible<span tw="text-white">l</span>
								<span
									style={{
										color: "#27eef7",
									}}
								>
									{" "}
									{"bachelors"}
								</span>{" "}
								<span tw="text-white">l</span>
								{" & "}
							</span>
							<span
								style={{
									color: "#f646b2",
								}}
							>
								bachelorettes <span tw="text-white">l</span>
								<span tw="text-black">in</span>
							</span>
							<span>{title}</span>
						</h2>
						{/* <div tw="mt-8 flex md:mt-0">
							<div tw="flex rounded-md shadow">
								<a
									href="#"
									tw="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white"
								>
									Get started
								</a>
							</div>
							<div tw="ml-3 flex rounded-md shadow">
								<a
									href="#"
									tw="flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600"
								>
									Learn more
								</a>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		),
		{
			width: 504,
			height: 404,
			fonts: [
				{
					name: "Typewriter",
					data: fontData,
					style: "normal",
				},
			],
		}
	);
	// } catch (e: any) {
	// 	console.log(`${e.message}`);
	// 	return new Response(`Failed to generate the image`, {
	// 		status: 500,
	// 	});
	// }
}
