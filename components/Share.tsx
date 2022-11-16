import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../recoil";
import Dating from "./index/Dating";
import Footer from "./index/Footer";
import Hero from "./index/Hero";
import Images from "./index/Images";
import Layout from "./index/Layout";

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
