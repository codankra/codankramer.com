import React from "react"
import Section from "./"

const About = () => (
  <Section sectionTitle="About Me">
    <h4 className="text-center">
      Hi, I'm Daniel! This site is a chance for me to carve out a personal space
      of the web and share what I'm up to.
    </h4>
    <p className="text-center">
      Currently building{" "}
      <a className="highlight" href="https://tewwie.com">
        tewwie.com
      </a>{" "}
      - Check it out!{" "}
    </p>
    <p className="text-center">
      I built it after going through many tough moves where dealing with
      furniture was the hardest part. You can sell furniture or hand it off to
      Tewwie for us to sell and split the proceeds with you. My challenges as of
      writing this are integrating with existing marketplaces for a seamless
      selling experience, and the many hats of sales and marketing I am not used
      to wearing. Starting a company has only fueled my already strong desire to
      learn and grow into overdrive.
    </p>
    <p className="text-center">
      <b>Other Passions</b>{" "}
    </p>
    <ul>
      <li>Personal Finance & Investing</li>
      <li>Climbing</li>
      <li>Health</li>
      <li>Privacy and Freedom</li>
    </ul>
    <p>
      Sorry I can't share my company's code, but feel free to check out some
      other projects I've contributed to:
    </p>
    {/* <h4 className="row-push">such as...</h4> */}
  </Section>
)

export default About
