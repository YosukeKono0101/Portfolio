import {
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiLaravel,
  SiAmazonwebservices,
  SiDocker,
  SiGit,
  SiDotnet,
  SiVuedotjs,
  SiBitbucket,
  SiMysql,
  SiMongodb,
  SiSqlite,
} from "react-icons/si";

const skillsData = {
  languages: [
    { name: "PHP", icon: SiPhp },
    { name: "C#", icon: SiDotnet },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Python", icon: SiPython },
  ],
  frameworks: [
    { name: "Laravel", icon: SiLaravel },
    { name: ".NET", icon: SiDotnet },
    { name: "React", icon: SiReact },
    { name: "React Native", icon: SiReact },
    { name: "Vue", icon: SiVuedotjs },
    { name: "Inertia", icon: SiLaravel },
    { name: "Node", icon: SiNodedotjs },
    { name: "Express", icon: SiNodedotjs },
  ],
  tools: [
    { name: "Git", icon: SiGit },
    { name: "Bitbucket", icon: SiBitbucket },
    { name: "AWS", icon: SiAmazonwebservices },
    { name: "Docker", icon: SiDocker },
    { name: "REST/RESTful APIs", icon: SiNodedotjs },
  ],
  databases: [
    { name: "MySQL", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "SQLite", icon: SiSqlite },
  ],
  softSkills: [
    "Adaptability",
    "Work Ethic",
    "Eagerness to Learn",
    "Problem-Solving",
    "Team Collaboration",
  ],
  qualifications: [
    "Master of Information Technology in Computer Science, Queensland University of Technology (Aug 2024)",
    "Bachelor of Economics in Accounting, Ritsumeikan University (Mar 2022)",
    "IELTS Academic Overall Band Score: 8.0 (Jun 2024)",
    "TOEIC Listening and Reading Score: 940 (Oct 2018)",
    "Nissho Bookkeeping Level 2 (Nov 2018)",
  ],
};

export default skillsData;
