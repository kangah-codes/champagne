import Head from "next/head";
import Image from "next/image";
import Dating from "../components/index/Dating";
import Footer from "../components/index/Footer";
import Hero from "../components/index/Hero";
import Images from "../components/index/Images";
import Layout from "../components/index/Layout";
import { useRouter } from "next/router";

export default function Home({ shared }: any) {
	return (
		<Layout footer={false} shared={shared}>
			<Hero />
			<Images />
			<Dating />
			<Footer />
		</Layout>
	);
}

export async function getServerSideProps(ctx: any) {
	// get url params
	const { shared } = ctx.query;

	// Pass data to the page via props
	return {
		props: {
			shared: shared || null,
		},
	};
}
