import Head from "next/head";
import Image from "next/image";
import { Button, Container } from "react-bootstrap";
import Partners from "../components/Exhibitors/Partners";
import LineUp from "../components/Exhibitors/LineUp";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery/Gallery";
import KeynoteSpeakers from "../components/Speakers/KeynoteSpeakers";
import Speakers from "../components/Speakers/Speakers";
import SupportingOgn from "../components/SupportingOgzn/SupportingOgn";
import styles from "../styles/Home.module.css";
import SpeakerHeading from "../components/Speakers/SpeakerHeading";
import GallerySection from "../components/Gallery/GallerySection";
import Timeline from "../components/Timeline/Timeline";
import Header from "../components/Header/Header";
import AboutEgro from "../components/Home/AboutEgro";
import ProgrammeDetails from "../components/Home/ProgrammeDetails";
import HealthManagement from "../components/Home/HealthManagement";
import BreakBtn from "../components/Home/BreakBtn";
import Banner from "../components/Home/Banner";
import banner from "../public/banner/banner_bg.png";
import { BsArrowRight} from "react-icons/bs"

export default function Home() {
  const styling = {
    backgroundImage: `url('${banner.src}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat:"no-repeat"
  };
  return (
    <div>
      <div style={styling}>
        <Header />
        <Banner />
      </div>
      <AboutEgro />
      <Container className="section_gap">
        <h2 className="fw-bold black_title text-center text-sm-start">Our Partners & Supporters</h2>
        <Partners />
      </Container>
      <Container id="SpeakerPage" className="section_gap">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center my-5">
          <SpeakerHeading />
          <div>
            <a href="SpeakerPage" className="explore__btn">
              {/* <Button className="see_all_btn">Explore All</Button> */}
              Explore All
            </a>
          </div>
        </div>
        <Speakers minLength={0} maxLength={8} />
      </Container>

      <div className="section_gap" id="ProgramPage">
        <ProgrammeDetails />
        <HealthManagement />
        <Timeline />
        <BreakBtn />
      </div>
      <Container className="section_gap">
        <h2 className="text-center mb-5 fw-bold black_title">
          Explore Event Gallary
        </h2>
        <GallerySection length={4} />
        <div className="text-center">
          <a href="GalleryPage" className="explore__btn arrow__btn arrow__btn3">
            See All Photos <BsArrowRight/>
          </a>
        </div>
      </Container>
      <div className="section_gap">
        <SupportingOgn length={2} />
        <div className="text-center">
          <a href="SupportingOrganizations" className="explore__btn arrow__btn arrow__btn4">
            See All Organizations <BsArrowRight/>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
