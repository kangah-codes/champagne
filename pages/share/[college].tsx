import Head from "next/head";
import Image from "next/image";
import Dating from "../../components/index/Dating";
import Footer from "../../components/index/Footer";
import Hero from "../../components/index/Hero";
import Images from "../../components/index/Images";
import Layout from "../../components/index/Layout";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../../recoil";
import { useEffect } from "react";

export default function Share() {
	const router = useRouter();
	const { college } = router.query;
	const [isOpen, setIsOpen] = useRecoilState(modalState);

	useEffect(() => {
		setIsOpen(true);
	}, []);

	return (
		<Layout footer={false} college={college as string}>
			<Hero />
			<Images />
			<Dating />
			<Footer />
		</Layout>
	);
}
