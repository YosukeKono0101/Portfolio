// profileConfig.js
import HomeTown from "../assets/Hometown.jpeg";
import Swimming from "../assets/Swimming.jpeg";
import HighSchool from "../assets/GarinCollege.profile.jpg";
import Accounting from "../assets/Accounting.webp";
import QUT from "../assets/Qut.jpg";
import Coding from "../assets/Coding.webp";

const profileData = [
  {
    date: "Born",
    title: "Birth",
    image: HomeTown,
    alt: "Syukugawa in Nishinomiya",
    description:
      "Born and raised in Nishinomiya, located in the Hyogo Prefecture of Japan.",
  },
  {
    date: "2011~",
    title: "Middle School: Golf and Swimming",
    image: Swimming,
    alt: "Golf and Swimming",
    description:
      "Started middle school, joining both the golf and swimming teams, where I developed a passion for sports and teamwork.",
  },

  {
    date: "2015~",
    title: "High School in New Zealand",
    image: HighSchool,
    alt: "High school in New Zealand",
    description:
      "Transferred to a high school in New Zealand, where I spent two and a half years gaining valuable international experience.",
  },
  {
    date: "2018~",
    title: "Ritsumeikan University",
    image: Accounting,
    alt: "Stock Rate",
    description:
      "Returned to Japan and pursued a degree in Economics at Ritsumeikan University, deepening my understanding of economics and accounting.",
  },
  {
    date: "2022~",
    title: "QUT Masters",
    image: QUT,
    alt: "Queensland University Of Technology",
    description:
      "Moved to Australia to start a master's degree in Information Technology at Queensland University of Technology, focusing on computer science and software development.",
  },
  {
    date: "2024~",
    title: "Graduation and Career",
    image: Coding,
    alt: "Graduated and Working in Brisbane",
    description:
      "Graduated from QUT and began my career as a junior software developer in Brisbane, continuing to expand my technical skills and expertise.",
  },
];

export default profileData;
