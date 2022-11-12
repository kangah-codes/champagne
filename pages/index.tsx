import Head from "next/head";
import Image from "next/image";
import Dating from "../components/index/Dating";
import Footer from "../components/index/Footer";
import Hero from "../components/index/Hero";
import Images from "../components/index/Images";
import Layout from "../components/index/Layout";

export default function Home() {
	return (
		<Layout footer={false}>
			<Hero />
			<Images />
			<Dating />
			<Footer />
		</Layout>
	);
}
