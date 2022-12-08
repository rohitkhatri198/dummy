import About from "@components/About";
import Banner from "@components/Banner";
import { Footer, Header } from "@components/common";
import Details from "@components/Details";
import Gsap from "@components/Gsap";
import List from "@components/List";
import TaskCard from "@components/List/TaskCard";
import Roadmap from "@components/Roadmap";
import ScrollParallax from "@components/ScrollParallax";
import { AppConstant } from "constant/AppConstant";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout className="page-home">
      <Head>
        <title>{AppConstant.meta.title}</title>
        <meta name="description" content={AppConstant.meta.description} />
      </Head>
      {/* <Header />
      <Footer /> */}
      {/* <Banner />
      <About /> */}
      {/* <Roadmap /> */}
      {/* <Details /> */}
      {/* <List /> */}
      {/* <TaskCard name={`rohit`} isVisible={true} />
      <TaskCard name={`karina`} isVisible={true} />
      <TaskCard name={`rohit`} isVisible={true} /> */}
      <Gsap />
      <ScrollParallax />
    </Layout>
  );
};

export default Home;
