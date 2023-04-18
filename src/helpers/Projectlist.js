import Yelpcamp from "../assets/Yelpcamp.JPG";
import Gamesite from "../assets/Gamesite.JPG";

export const ProjectList = [
  {
    id: 0,
    name: "Gaming Website",
    image: Gamesite,
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "EJS",
      "Node.js",
      "Express.js",
      "Axios",
      "MongoDB",
    ],
    features: [
      "Full-stack website",
      "Users can create an account or log in if you already have one.",
      "Search for games using the search bar.",
      "Add games to your dashboard by clicking the Favourite, Playing, Backlog, Wishlist button.",
      "Leave reviews for games by navigating to the game's page and clicking the Leave a Review button.",
      "Like or dislike reviews by clicking the thumbs up or thumbs down button.",
    ],
    about:
      "As an enthusiastic gamer and web development enthusiast, I wanted to work on a project that allowed me to showcase my skills and passion. Using the foundational technologies of HTML, CSS, and JavaScript, I built a full-stack gaming website that's powered by the IGDB API. This platform allows users to register, create personalized dashboards, track their progress, leave reviews, and rate others' reviews. Through countless hours of hard work and dedication, I've created a dynamic and immersive gaming experience that users will love.",
    github: "https://github.com/johandlalicon/gamesite",
    live: "https://mortygamehub.onrender.com/",
  },
  {
    id: 1,
    name: "Yelp Camp",
    image: Yelpcamp,
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "EJS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    features: [
      "Full-stack website",
      "Users can create an account or log in if you already have one.",
      "Browse through existing campsites, or add a new campsite.",
      "Leave a rating or review for a campsite.",
      "Edit or delete your own campsites, ratings, or reviews.",
    ],
    about:
      "Where it all began! My capstone project for Colt Steele's Web Development Course showcased my proficiency in CRUD operations and backend techniques. Users can create campsites, leave reviews, and create an account. It inspired me to create my gaming website and refine my skills.",
    github: "https://github.com/johandlalicon/YelpCamp",
    live: "https://yelpcamp-jl.onrender.com/",
  },
];
