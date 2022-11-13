/* eslint-disable @next/next/inline-script-id */
import Head from "next/head";
import Script from "next/script";
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
	props?: any;
}

export const getServerSideProps = async (context: any) => {
	return { props: { college: context.params.college } };
};

const Layout = (props: any) => {
	console.log(props);
	return (
		<div className="flex flex-col min-h-screen">
			<Head>
				{/* <title>{title}</title>
				<meta name="description" content={desc} />
				<meta property="og:type" content="website" />
				<meta name="og:title" property="og:title" content={title} />
				<meta
					name="og:description"
					property="og:description"
					content={desc}
				/>
				<meta
					name="keywords"
					content="Dating, Champagne, College Dating"
				/>
				<meta name="author" content="Champagne Digital" />
				<meta property="og:site_name" content="Champagne Digital" />
				<meta property="og:url" content={`https://Champagne.com`} />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={desc} />
				<meta name="twitter:site" content="@propernounco" />
				<meta name="twitter:creator" content="@propernounco" />
				<link rel="icon" href="/images/logo.svg" />
				<meta
					property="og:image"
					content={`https://champagne-topaz.vercel.app/api/og?title=${college}`}
				/> */}
			</Head>

			<div className="sticky top-0 z-50">
				<NavBar />
				<Modal />
			</div>

			<div className="flex-grow overflow-hidden">{props.children}</div>
			{props.footer && <Footer />}
		</div>
	);
};

export default Layout;
