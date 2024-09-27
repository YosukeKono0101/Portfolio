// src/config/projectsConfig.js

import MotorGarage from "../assets/MotorGarage.png";
import MotorGarage2 from "../assets/MotorGarage2.png";
import MotorGarage3 from "../assets/MotorGarage3.png";
import MotorGarage4 from "../assets/MotorGarage4.png";
import MotorGarage5 from "../assets/MotorGarage5.png";
import HarmonyHub from "../assets/HarmonyHub.png";
import HarmonyHub2 from "../assets/HarmonyHub2.png";
import HarmonyHub3 from "../assets/HarmonyHub3.png";
import MuscleMap from "../assets/MuscleMap.png";
import MuscleMap2 from "../assets/MuscleMap2.png";
import MuscleMap3 from "../assets/MuscleMap3.png";
import MuscleMap4 from "../assets/MuscleMap4.png";
import MyPortfolio from "../assets/MyPortfolio.png";
import MyPortfolio2 from "../assets/MyPortfolio2.png";
import MyPortfolio3 from "../assets/MyPortfolio3.png";
import MyPortfolio4 from "../assets/MyPortfolio4.png";
import LibraryDVD from "../assets/DVD.webp";

const projects = [
  {
    id: "MotorGarage",
    name: "Motor Garage",
    description:
      "MotorGarage is a web application that I developed as part of my course at university and it is designed for an online shopping experience specifically tailored for car parts and accessories. It features various categories like Wheels, Exhaust Systems, and Brakes, with detailed product descriptions and images.",
    features: [
      "Product Categories: Users can browse products by categories such as Wheel, Exhaust System, and Brake.",
      "Product Details: Detailed view of each product with descriptions, prices, and images.",
      "Search Functionality: Allows users to search for products based on descriptions.",
      "Shopping Cart: Users can add items to the cart and view them in the shopping cart section.",
      "Order Placement: Users can place orders by filling out a form with their details.",
      "Database Sending: An admin route for seeding the database with initial data.",
    ],
    githubLink: "https://github.com/YosukeKono0101/MotorGarage",
    languagesAndTech: [
      "Frontend: HTML, CSS(Bootstrap), JavaScript",
      "Backend: Python with Flask Framework",
      "Database: SQLAlchemy with SQLite",
      "Flask-WTF for form handling",
      "Bootstrap for UI components",
    ],
    imageUrl: MotorGarage,
    additionalImages: [
      MotorGarage,
      MotorGarage2,
      MotorGarage3,
      MotorGarage4,
      MotorGarage5,
    ],
  },
  {
    id: "MyPortfolio",
    name: "My Portfolio",
    description:
      "Welcome to my portfolio! This website is a window into my work in web development. This site is not only a reflection of my technical skills but also my passion for creating intuitive and engaging web experiences. The design and development of this portfolio itself is a testament to my proficiency in front-end technologies and my commitment to continuous learning and improvement.",
    features: [
      "Responsive Design: Optimized for both desktop and mobile devices.",
      "Smooth Scroll Navigation: Easy navigation to different sections of the website.",
      "Interactive Project Showcase: Detailed presentation of my projects with modal pop-ups.",
      "Dynamic History Timeline: A visually engaging timeline of my personal and professional journey.",
    ],
    githubLink: "https://github.com/YosukeKono0101/Portfolio",
    languagesAndTech: [
      "Frontend: HTML, CSS(Bootstrap), JavaScript, React",
      "Styled-Components",
      "FontAwesome",
      "React Router",
    ],
    imageUrl: MyPortfolio,
    additionalImages: [MyPortfolio, MyPortfolio2, MyPortfolio3, MyPortfolio4],
  },
  {
    id: "HarmonyHub",
    name: "HarmonyHub",
    description:
      "HarmonyHub is a web application designed for music enthusiasts. It provides a platform to find artist information, discover top tracks and albums, and explore upcoming concerts. Additionally, it recommends nearby restaurants and bars close to concert venues, enhancing the overall concert-going experience.",
    features: [
      "Explore Artist Info: Search for artists to get detailed information including top tracks, albums, and similar artists.",
      "Discover Concerts: Enter a location or venue name to discover upcoming concerts and events.",
      "Nearby Restaurants: Get recommendations for nearby restaurants and bars around concert venues.",
      "Wikipedia Integration: Access Wikipedia information related to the searched artist.",
      "Page Counter: Keep track of page visits using an AWS S3 bucket (if AWS credentials are provided).",
    ],
    githubLink: "https://github.com/YosukeKono0101/HarmonyHub",
    languagesAndTech: [
      "Frontend: HTML, CSS (Bootstrap), JavaScript",
      "Backend: Node.js, Express.js",
      "APIs: LastFM, Ticketmaster, Google Places, Wikipedia",
      "AWS S3 for page counter functionality",
    ],
    imageUrl: HarmonyHub,
    additionalImages: [HarmonyHub, HarmonyHub2, HarmonyHub3],
  },
  {
    id: "MuscleMap",
    name: "MuscleMap",
    description:
      "MuscleMap is a React-based web application designed to help users discover and learn various exercises. It provides detailed information, instructional videos, and related exercises to help users focus on specific body parts or use particular equipment. The app features a user-friendly interface, easy navigation, and responsive design for an optimal user experience.",
    features: [
      "Exercise Search: Users can search for exercises by name of the body parts.",
      "Exercise Details: Detailed descriptions, images, and instructional videos for each exercise.",
      "Related Exercises: Suggestions for similar exercises based on the chosen exercise.",
      "Responsive Design: Compatible with various devices and screen sizes.",
    ],
    githubLink: "https://github.com/YosukeKono0101/MuscleMap",
    languagesAndTech: [
      "Frontend: HTML, CSS, JavaScript, React",
      "Styled-Components",
      "React Router",
      "FontAwesome",
      "React Slick",
      "React Spinners",
    ],
    imageUrl: MuscleMap,
    additionalImages: [MuscleMap, MuscleMap2, MuscleMap3, MuscleMap4],
  },
  {
    id: "CommunityLibraryDVD",
    name: "DVD Management",
    description:
      "Developed an application to manage a community library’s movie DVD collection. The system handles staff and member operations, including DVD borrowing, returning, and registration. Designed a custom hash table to store and manage DVD data, implementing separate chaining to resolve hash collisions, ensuring efficient data retrieval and updates. An algorithm was also implemented to display the top three most borrowed DVDs using a Linear Search Algorithm for optimal sorting performance.",
    features: [
      "Manage DVDs: Add, remove, and adjust the number of DVDs in the system.",
      "Manage Members: Register and remove library members.",
      "Borrow and Return DVDs: Members can borrow and return DVDs, with a limit of 5 DVDs per member.",
      "View Borrowed Movies: Members can view their currently borrowed DVDs.",
      "Top Borrowed Movies: Display the top 3 most borrowed DVDs using an optimized Linear Search Algorithm.",
      "Contact Details: Staff can retrieve contact information for members renting specific movies.",
    ],
    githubLink: "https://github.com/YosukeKono0101/CommunityLibraryDVD",
    languagesAndTech: [
      "Languages: C#",
      "Platform: Console Application",
      "Data Structures: Custom Hash Tables with Separate Chaining",
      "Algorithms: Linear Search Algorithm",
      "Object-Oriented Programming Principles",
    ],
    imageUrl: LibraryDVD,
    additionalImages: [LibraryDVD],
  },
];

export default projects;
