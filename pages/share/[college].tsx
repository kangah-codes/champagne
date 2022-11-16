/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
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
import dynamic from "next/dynamic";

const Share = dynamic(() => import("../../components/Share"), {
	ssr: false,
});

export default () => <Share />;
