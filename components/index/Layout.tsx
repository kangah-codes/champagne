/* eslint-disable @next/next/inline-script-id */
import Head from "next/head";
import Script from "next/script";
import InstaModal from "../InstaModal";
import Modal from "../Modal";
import Footer from "./Footer";
import NavBar from "./NavBar";

interface LayoutProps {
	children: any;
	title?: string;
	desc?: string;
	pt?: boolean;
	college?: string;
	footer?: boolean;
	shared?: string;
}

const Layout = ({
	// @ts-ignore
	children,
	title,
	desc = `Champagne`,
	footer = true,
	college,
	shared,
}: LayoutProps) => {
	return (
		<div className="flex flex-col min-h-screen">
			<Head>
				<title>Champagne</title>
				<meta name="description" content={desc} />
				<meta property="og:type" content="website" />
				<meta
					name="og:title"
					property="og:title"
					content={
						shared
							? shared
							: "Join other bachelors & bachelorettes on Champagne"
					}
				/>
				<meta
					name="og:description"
					property="og:description"
					content={desc}
				/>
				<meta
					property="og:image"
					content={`https://champagne-topaz.vercel.app/images/content/preview.png`}
				/>
				<meta
					property="snapchat:sticker"
					content={`https://champagne-topaz.vercel.app/api/og/${
						college ? college : "Champagne"
					}`}
				/>
				<meta
					name="keywords"
					content="Dating, Champagne, College Dating"
				/>
				<meta name="author" content="Champagne" />
				<meta property="og:site_name" content="Champagne" />
				<meta
					property="og:url"
					content={`https://champagne-topaz.vercel.app`}
				/>
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content={"Champagne"} />
				<meta name="twitter:description" content={desc} />
				<meta name="twitter:site" content="@propernounco" />
				<meta name="twitter:creator" content="@propernounco" />
				<link rel="icon" href="/images/logo.png" type="image/x-icon" />
			</Head>

			<Script>
				{`(function (d, s, id) {
					var js,
					sjs = d.getElementsByTagName(s)[0];
					if (d.getElementById(id)) return;
					js = d.createElement(s);
					js.id = id;
					js.src = "https://sdk.snapkit.com/js/v1/create.js";
					sjs.parentNode.insertBefore(js, sjs);
				})(document, "script", "snapkit-creative-kit-sdk");
				
				 window.snapKitInit = function () {
					snap.creativekit.initalizeShareButtons(
					document.getElementsByClassName("snapchat-share-button")
					);
				};
				`}
			</Script>
			<div className="sticky top-0 z-50">
				<NavBar />
				<Modal />
				<InstaModal />
			</div>

			<div className="flex-grow overflow-hidden">{children}</div>
			{footer && <Footer />}
		</div>
	);
};

export default Layout;
