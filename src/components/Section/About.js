import React from "react"
import Section from "./"

const About = () => (
  <Section sectionTitle="About Me">
    <h4 className="text-center">
      Hi, I'm Daniel! This site is a chance for me to carve out a personal space
      of the web and share what I'm up to.
    </h4>
    <p className="text-center">
      I graduated in 2020 with a{" "}
      <span className="highlight">B.S. in Computer Science</span> with high
      honors and a minor in Quantitative Finance. I've worked hard fighting the
      "rest & obey" culture at IBM to take on challenge and opportunity. For
      leading test automation, monitoring, security, and DevOps for my team and
      helping newer devs I became a{" "}
      <span className="highlight">"Staff" L7 Software Developer</span> (which is
      more like mid-level). I am proud of the impact I was able to make to my
      team and to two web applications. I learned a lot leading a small team in
      a rewrite of a <kbd>{new Date().getFullYear() - 1998}</kbd> year old web
      application, contributing to the full stack engineering effort but
      specializing in data integrity/migration and front end development.
    </p>
    <p className="text-center">
      I quit IBM at the 3 year mark and backpacked for 2 months in Spain and
      France. I'm using the rest of my liquid savings to fund my startup,{" "}
      <a className="highlight" href="https://tewwie.com">
        tewwie.com
      </a>
      . I built it after going through many tough moves where dealing with
      furniture was the hardest part. You can sell furniture or hand it off to
      Tewwie for us to sell and split the proceeds with you. It's a constant
      work in progress, but check it out! My challenges as of writing this are
      integrating with existing marketplaces for a seamless selling experience,
      and the many hats of sales and marketing I am not used to wearing.
      Starting a company has only fueled my already strong desire to learn and
      grow into overdrive.
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
