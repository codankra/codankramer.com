import React from "react"
import Section from "../"
import SkillTable from "./SkillTable"
import SkillRow from "./SkillRow"

const Skills = () => (
  <Section sectionTitle="Skills">
    <SkillTable title="Languages">
      <SkillRow name="C/C++" percent="30" theme="info" />
      <SkillRow name="Java & Spring Boot" percent="51" theme="info" />
      <SkillRow
        name="JavaScript & Node.js"
        percent="82"
        theme="info"
        isPrimary={true}
      />
      <SkillRow name="Python" percent="78" theme="info" isPrimary={true} />
      <SkillRow name="R" percent="40" theme="info" />
    </SkillTable>
    <SkillTable title="Software/Systems">
      <SkillRow name="Docker" percent="69" theme="warning" isPrimary={true} />
      <SkillRow name="git" percent="85" theme="warning" isPrimary={true} />
      <SkillRow name="GitHub Actions" percent="75" theme="warning" />
      <SkillRow name="GCP + Firebase" percent="55" theme="warning" />
      <SkillRow name="Jenkins" percent="60" theme="warning" isPrimary={true} />
      <SkillRow name="Kubernetes" percent="20" theme="warning" />
      <SkillRow name="Linux" percent="40" theme="warning" />
      <SkillRow name="MongoDB" percent="70" theme="warning" isPrimary={true} />
      <SkillRow name="sh" percent="78" theme="warning" isPrimary={true} />
      <SkillRow name="SQL" percent="90" theme="warning" isPrimary={true} />
    </SkillTable>
    <SkillTable title="Web Technologies">
      <SkillRow name="Bootstrap" percent="80" theme="success" />
      <SkillRow name="Django" percent="30" theme="success" />
      <SkillRow name="Next.js" percent="95" theme="success" isPrimary={true} />
      <SkillRow name="React" percent="85" theme="success" isPrimary={true} />
      <SkillRow name="Tailwind" percent="60" theme="success" isPrimary={true} />
      <SkillRow
        name="TypeScript"
        percent="70"
        theme="success"
        isPrimary={true}
      />
    </SkillTable>
  </Section>
)
export default Skills
