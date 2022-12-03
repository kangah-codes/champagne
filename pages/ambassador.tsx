import Head from "next/head";
import Image from "next/image";
import Dating from "../components/index/Dating";
import Images from "../components/index/Images";
import Layout from "../components/index/Layout";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../recoil";
import { useEffect } from "react";
import Hero from "../components/ambassador/Hero";
import Champions from "../components/ambassador/Champions";
import ChampionsTask from "../components/ambassador/ChampionsTasks";
import Ranks from "../components/ambassador/Ranks";
import Footer from "../components/ambassador/Footer";
import NavBar from "../components/ambassador/NavBar";

export default function Ambassador({ shared }: any) {
	const [, setShowModal] = useRecoilState(modalState);

	useEffect(() => {
		if (shared) {
			setShowModal(true);
		}
	}, []);

	return (
		<Layout footer={false} navbar={false} shared={shared}>
			<div className="sticky top-0 z-50">
				<NavBar />
			</div>
			<Hero />
			<Champions />
			<ChampionsTask />
			<ChampionsTask />
			<ChampionsTask />
			<ChampionsTask />
			<ChampionsTask />
			<ChampionsTask />
			<Ranks />
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
