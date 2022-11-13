import Head from "next/head";
import Image from "next/image";
import Dating from "../../components/index/Dating";
import Footer from "../../components/index/Footer";
import Hero from "../../components/index/Hero";
import Images from "../../components/index/Images";
import Layout from "../../components/index/Layout";
import { useRouter } from "next/router";

export default function Share() {
	const router = useRouter();
	const { college } = router.query;

	return (
		<Layout footer={false} college={college as string}>
			<Hero />
			<Images />
			<Dating />
			<Footer />
		</Layout>
	);
}
