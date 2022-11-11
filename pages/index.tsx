import Head from "next/head";
import Image from "next/image";
import Dating from "../components/index/Dating";
import Hero from "../components/index/Hero";
import Images from "../components/index/Images";
import Layout from "../components/index/Layout";

export default function Home() {
	return (
		<Layout>
			<Hero />
			<Images />
			<Dating />
		</Layout>
	);
}
