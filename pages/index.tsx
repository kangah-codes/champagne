import Head from "next/head";
import Image from "next/image";
import Dating from "../components/index/Dating";
import Footer from "../components/index/Footer";
import Hero from "../components/index/Hero";
import Images from "../components/index/Images";
import Layout from "../components/index/Layout";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../recoil";
import { useEffect } from "react";

export default function Home({ shared }: any) {
	const [, setShowModal] = useRecoilState(modalState);

	useEffect(() => {
		if (shared) {
			setShowModal(true);
		}
	}, []);

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
