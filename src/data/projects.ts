export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  techStack: string[];
  image?: any;
  github?: string;
  demo?: string;
  figma?: string;
  link?: string;
  featured?: boolean;
  features?: string[];
  stats?: {
    duration?: string;
    role?: string;
    team?: string;
  };
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Athena Airlines: Airline Reservation System",
    description: "A full-featured airline reservation system with flight booking, seat selection, and real-time flight management.",
    fullDescription:
      "Athena Airlines is a comprehensive airline reservation system designed to streamline flight booking and passenger management. Built to provide a smooth and reliable user experience, the system allows users to search flights, select seats, manage bookings, and receive real-time updates. It includes secure user authentication, payment processing, booking history, and administrative tools for managing flights and reservations.",
    techStack: ["React",],
    image: require("../../assets/Ohana.png"),
    github: "https://github.com/Mikayla-Buno/final-project-8-webdevt",
    demo: "https://ohana-airlines.vercel.app/",

    featured: true,
    features: [
      "Flight search with date, destination, and fare filters",
      "Real-time seat availability and seat selection",
      "Secure online payment processing for ticket purchases",
      "User authentication and passenger profile management",
      "Booking confirmation with e-ticket generation",
      "Real-time flight status and schedule updates",
      "Booking history and reservation management",
      "Admin dashboard for managing flights and schedules",
    ],
    stats: {
      duration: "3 months",
      role: "Lead Developer",
      team: "4 developers",
    },

  },

  {
  id: "2",
  title: "TravelBud: Social Travel Companion App (UI/UX Design)",
  description:
    "A mobile app UI/UX design focused on connecting travelers with companions, groups, and local hosts.",
  fullDescription:
    "TravelBud is a UI/UX design project created in Figma that focuses on designing an intuitive and visually engaging mobile experience for travelers. The project emphasizes user-centered design, smooth user flows, and accessible interfaces for finding travel companions, joining group trips, and exploring local experiences.",
  techStack: ["Figma"],
  image: require("../../assets/TravelBud.png"),
  demo: "https://www.figma.com/proto/8BNdlkBiX3FHXuVO3kvx7x/TravelBud-App?node-id=1-2&p=f&t=S7sgIlxLAy8rdK3J-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
  figma: "https://www.figma.com/design/8BNdlkBiX3FHXuVO3kvx7x/TravelBud-App?node-id=0-1&p=f&t=oHP6e1mo8NQLjIGq-0",
  featured: false,
  features: [
    "User-centered mobile UI design",
    "High-fidelity wireframes and mockups",
    "Travel companion matching screens",
    "Group trips and meetups UI",
    "Local hosts and destinations browsing",
    "User profile and reviews interface",
    "Consistent design system and components",
  ],
  stats: {
    duration: "2 months",
    role: "UI/UX Designer",
    team: "2 designers",
  },
},

  {
  id: "3",
  title: "JeepneyGo: Real-Time Jeepney Tracking System",
  description:
    "A mobile-based system that provides real-time tracking of jeepneys to improve commuter experience.",
  fullDescription:
    "JeepneyGo is a software engineering project designed to provide real-time location tracking of jeepneys operating between Batangas City and Lipa City. The system uses drivers’ smartphones as GPS devices to transmit live location data, allowing commuters to view jeepney locations and estimated arrival times, reducing waiting time and improving travel efficiency.",
  techStack: ["Figma"],
  image: require("../../assets/JeepneyGo.png"),
  demo: "https://www.figma.com/proto/tenggBiIt1RHWE6hHyeUVL/SRS-ALGCOM?node-id=2-3419&p=f&t=hFGdeQhNHwFRAK59-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
  figma: "https://www.figma.com/design/tenggBiIt1RHWE6hHyeUVL/SRS-ALGCOM?node-id=0-1&t=yAAa5hY7UplzoM9r-1",
  featured: true,
  features: [
    "Real-time jeepney location visualization",
    "Route-based jeepney tracking",
    "Estimated arrival time display",
    "Driver GPS activation interface",
    "User-friendly commuter dashboard",
    "Clean and accessible UI design",
    "Consistent design system and components",
  ],
  stats: {
    duration: "3 months",
    role: "UI/UX Designer",
    team: "3 designers",
  },
},

  {
  id: "4",
  title: "StudySpotPH: Student Study Space Finder",
  description:
    "A student-focused application for discovering quiet and accessible study spots in the Philippines.",
  fullDescription:
    "StudySpotPH is a concept-based mobile application designed to help students find suitable study spaces such as libraries, cafés, and co-working areas. The project focuses on the Frontend design, emphasizing ease of use, clear navigation, and helpful filters to improve the overall studying experience.",
  techStack: ["React"],
  image: require("../../assets/StudySpotPH.png"),
  github: "https://github.com/ArguellesMomon/midterm-project",
  demo: "https://midterm-project-eta-sable.vercel.app/",
  featured: false,
  features: [
    "Study spot browsing and discovery UI",
    "Filter options by location, noise level, and amenities",
    "Study spot details and reviews layout",
    "Map-based study space interface",
    "Bookmarking and favorites UI",
    "Clean and student-friendly design system",
    "Accessible and intuitive user flows",
  ],
  stats: {
    duration: "1 month",
    role: "UI/UX Designer",
    team: "Solo Project",
  },
},

  {
  id: "5",
  title: "Pinoy Recipe Finder",
  description:
    "A React-based mobile app for discovering and exploring Filipino recipes.",
  fullDescription:
    "Pinoy Recipe Finder is a React mobile application that helps users discover, search, and save Filipino recipes. It features a user-friendly interface, recipe categories, search functionality, and saved favorites. The design focuses on clean navigation and easy access to recipe details, ingredients, and steps.",
  techStack: ["React"],
  image: require("../../assets/Recipe.jpg"),
  github: "https://github.com/ArguellesMomon/pinoy-recipe-finder/tree/first-branch",
  featured: false,
  features: [
    "Browse Filipino recipes by category",
    "Search recipes by ingredients or dish name",
    "Recipe detail screens with ingredients and steps",
    "Save and favorite recipes",
    "Clean and culturally inspired visual design",
    "Consistent typography and color system",
    "Easy-to-follow user flows",
  ],
  stats: {
    duration: "1 month",
    role: "React Developer",
    team: "Solo Project",
  },
},


];

