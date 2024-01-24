import React from "react"
import Section from "../"
import SkillTable from "./SkillTable"
import SkillRow from "./SkillRow"

const Skills = () => (
  <Section sectionTitle="Skills">
    <SkillTable title="Languages">
      <SkillRow
        name="JavaScript/TypeScript"
        percent="90"
        theme="info"
        isPrimary={true}
      />
      <SkillRow name="Python" percent="80" theme="info" isPrimary={true} />
      <SkillRow name="Java" percent="51" theme="info" isPrimary={true} />

      <SkillRow name="R" percent="40" theme="info" />
      <SkillRow name="C/C++" percent="30" theme="info" />
    </SkillTable>
    <SkillTable title="Software/Systems">
      <SkillRow name="git" percent="90" theme="warning" isPrimary={true} />
      <SkillRow name="SQL" percent="72" theme="warning" isPrimary={true} />
      <SkillRow name="MongoDB" percent="68" theme="warning" isPrimary={true} />
      <SkillRow name="Docker" percent="60" theme="warning" isPrimary={true} />
      <SkillRow name="Jenkins" percent="60" theme="warning" isPrimary={true} />
      <SkillRow name="sh" percent="55" theme="warning" isPrimary={true} />
      <SkillRow name="GitHub Actions" percent="50" theme="warning" />
      <SkillRow name="Linux" percent="40" theme="warning" />
      <SkillRow name="Kubernetes" percent="20" theme="warning" />
    </SkillTable>
    <SkillTable title="Web Technologies">
      <SkillRow name="Next.js" percent="95" theme="success" isPrimary={true} />
      <SkillRow name="React" percent="90" theme="success" isPrimary={true} />
      <SkillRow name="Tailwind" percent="75" theme="success" isPrimary={true} />
      <SkillRow name="Bootstrap" percent="60" theme="success" />
      <SkillRow name="Django" percent="30" theme="success" />
    </SkillTable>
    <pre>
      *<strong>Bold</strong> skills used professionally
    </pre>
  </Section>
)
export default Skills
