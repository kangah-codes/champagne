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
	isBlog?: boolean;
	seo?: React.ReactNode;
}

const Layout = ({
	children,
	title = "Champagne Digital - Modern Insurance solutions for everyone",
	desc = `Champagne Digital is a Software-as-a-service (SaaS) company that
      provides tailored solutions to brokers and insurers seeking to fully
      digitize their customer acquisition process.`,
	pt = false,
	isBlog = false,
	seo,
}: LayoutProps) => {
	return (
		<div className="flex flex-col min-h-screen">
			<Head>
				<title>{title}</title>
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
					content="Insurance, Online Insurance, Motor Insurance, Life Insurance, Digital Insurance, E-Insurance, Car Insurance"
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
			</Head>

			<div className="sticky top-0 z-50">
				<NavBar />
				<Modal />
			</div>

			<div className="flex-grow overflow-hidden">{children}</div>

			<Footer />
		</div>
	);
};

export default Layout;
