import React from "react"
import Section from "./"

const About = () => (
  <Section sectionTitle="About Me">
    <h4 className="text-center">
      Hi, I'm Daniel! This site is a chance for me to carve out a personal space
      of the web and share what I'm up to.
    </h4>
    <p className="text-center">
      I graduated early (2017-2020) with a{" "}
      <span className="highlight">B.S. in Computer Science</span> with high
      honors and well as a minor in Quantitative Finance. I've worked hard
      leveraging these credentials (well okay, mostly the CS one) quickly rising
      through the ranks of IBM to become a{" "}
      <span className="highlight">
        Staff Software Engineer leading test automation, monitoring, security,
        and DevOps
      </span>{" "}
      for my team and department. I've also trained to become a certified Data
      Engineer.
    </p>
    <p className="text-center">
      Now after 2 years of service to IBM, I've kept the strong desire to learn
      and grow, and am looking to bring this experience to new teams as well as
      serve a more Full-Stack role exercising my skills in Frontend development
      or Data engineering.
    </p>
    <p className="text-center">
      <b>Hobbies</b>
      <br /> I am abnormally interested in{" "}
      <span className="highlight">personal finance and investing</span>, that's
      a constant, but I've recently been training to{" "}
      <span className="highlight">
        conquer bouldering problems and my personal health concurrently
      </span>
      , and the inspiration comes and goes to learn a piano song or two once in
      a while. Taking the{" "}
      <a href="https://drkerrymakinbyrd.com/blog/newports-craftsman-approach-to-tool-selection-or-why-i-might-be-quitting-social-media">
        Craftman's Approach to Tool Selection
      </a>{" "}
      I learned from Cal Newport's book Deep Work, I stay off social media
      except the sites listed above, and I carefully weigh the tools used in the
      creation of this site, my other personal and work endeavors. I have a
      private and freedom-loving nature. But of course, I love coding and
      sharing <span className="highlight">cool projects</span>
    </p>
    <h4 className="row-push">such as...</h4>
  </Section>
)

export default About
