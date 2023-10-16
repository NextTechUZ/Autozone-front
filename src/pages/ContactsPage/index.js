import React from "react";
import styles from "./index.module.scss";
import AskQuestionPage from "../AskQuestionPage";
import AskSectionBg from "../../img/asksection-bg.png";
import Navigation from "../../components/Navigation";
import Contact from "../../components/section/Contact";
export default function ContactPage() {
  let navigationBar=[
    {
      title:"Home",
      link:"/"
    },
    {
      title:"contact",
      link:"/contacts"
    }
  ]
  return (
    <div style={{marginTop:"10rem"}}>
      <Navigation pathUrl={navigationBar}/>
      <Contact/>
      <div
        className={styles.ask_section}
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 1),rgba(0, 0, 0, 0.7)),url(${AskSectionBg})`,
        }}
      >
        <div className="container">
          <AskQuestionPage
            wraptop={false}
            outline={true}
            maxWidth="100%"
            TitleSize="3.6rem"
            SubTitleSize="2.6rem"
            SubTitleMargin="2rem 0"
            labalColor="var(--color-white)"
            agreeColor="var(--color-white)"
          />
        </div>
      </div>
    </div>
  );
}
