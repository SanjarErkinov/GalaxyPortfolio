import Head from "next/head";
import About from "@/components/AboutPage/About";
import Home from "@/components/HomePage/Home";
import Project from "@/components/ProjectPage/Project";
import Travel from "@/components/TravelPage/Travel";
import Contact from "@/components/ContactPage/Contact";
import Artwork from "@/components/ArtworkPage/Artwork";
import Footer from "@/components/FooterPage/Footer";
import Header from "@/components/HeaderPage/Header";
import SwiperProject from "@/components/Swiper/SwiperProject";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>GalaxyPortfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* <SwiperProject /> */}
      <Home />
      <About />
      <Project />
      <Travel />
      <Artwork />
      <Contact />
      <Footer />  
    </>
  );
}
