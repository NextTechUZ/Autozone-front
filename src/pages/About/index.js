import Navigation from "../../components/Navigation";
import Company from "../../components/section/Company";
import License from "../../components/section/License";
import Showcase from "../../components/section/Showcase";
import { showcaseData } from "../../store/store";
import styles from "./index.module.scss";

function About() {
  return (
    <>
      <Showcase data={showcaseData} />
      <Navigation />
      <Company />
      <License />
    </>
  );
}

export default About;
