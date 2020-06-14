import React from "react"
import Section from "../"
import SkillTable from "./SkillTable"
import SkillRow from "./SkillRow"

const Skills = () =>
<Section sectionTitle="Skills">
    {/* To do in a bit: Make default 3x1 instead of 1x3, on large screens */}
    <SkillTable title="Languages">
        <SkillRow name="C" percent="50" theme="info" />
        <SkillRow name="C++" percent="30" theme="info" />
        <SkillRow name="Java" percent="40" theme="info" />
        <SkillRow name="JavaScript & Node.js" percent="90" theme="info" />
        <SkillRow name="Python" percent="70" theme="info" />
        <SkillRow name="R" percent="40" theme="info" />
    </SkillTable>
    <SkillTable title="Systems">
        <SkillRow name="Bash" percent="70" theme="warning" />
        <SkillRow name="Git" percent="90" theme="warning" />
        <SkillRow name="GCP w/ Firebase" percent="40" theme="warning" />
        <SkillRow name="MongoDB" percent="70" theme="warning" />
        <SkillRow name="MySQL" percent="50" theme="warning" />
        <SkillRow name="Unix" percent="80" theme="warning" />
    </SkillTable>
    <SkillTable title="Frameworks/Libraries" >
        <SkillRow name="Bootstrap" percent="95" theme="success" />
        <SkillRow name="Django" percent="20" theme="success" />
        <SkillRow name="Gatsby" percent="40" theme="success" />
        <SkillRow name="Next.js" percent="75" theme="success" />
        <SkillRow name="React" percent="75" theme="success" />
        <SkillRow name="TypeScript" percent="50" theme="success" />
    </SkillTable>
</Section>;
export default Skills;
