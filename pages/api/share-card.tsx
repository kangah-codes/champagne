/* eslint-disable jsx-a11y/alt-text */
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
				{/* <div tw="flex flex-col text-5xl font-bold tracking-tight text-gray-900 text-left">
					<div
						tw="flex flex-row-reverse w-full bg-red-500"
						style={{
							padding: "0 2rem",
						}}
					>
						<img
							width="125"
							height="58"
							src={`https://joinchampagne.com/images/logo.png`}
						/>
					</div>
					<span>Sign up for the</span>
					<span>newest & fun</span>
					<span>dating experience</span>
					<span tw="flex flex-row">
						at<span tw="text-white">l</span>
						<span>{title}</span>{" "}
					</span>
				</div> */}

				<div tw="bg-white flex h-full items-center rounded-xl px-20">
					<div tw="flex flex-col w-full py-12 px-4 md:items-center justify-between p-2 mx-auto items-center">
						<div
							tw="flex flex-row-reverse w-full"
							style={{
								padding: "0 3rem",
							}}
						>
							<img
								width="125"
								height="58"
								src={
									process.env.NODE_ENV === "production"
										? `https://joinchampagne.com/images/logo.png`
										: `http://localhost:3000/images/logo.png`
								}
							/>
						</div>
						<h2 tw="flex flex-col text-5xl font-bold tracking-tight text-gray-900 text-left">
							<span>Sign up for the</span>
							<span>newest & fun</span>
							<span>dating experience</span>
							<span tw="flex flex-row line-clamp-4 truncate">
								at<span tw="text-white">l</span>
								<span>{title}</span>{" "}
							</span>
						</h2>
					</div>
				</div>
			</div>
		),
		{
			width: 1200,
			height: 600,
			fonts: [
				{
					name: "Anton",
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
