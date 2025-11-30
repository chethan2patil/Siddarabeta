// Import all images from data folder
import image1 from './image.jpg';
import image2 from './images2.jpeg';
import image3 from './image3.jpeg';
import image4 from './images4.jpeg';
import image5 from './image5.jpeg'; // Changed: use images4.jpeg instead of images5.jpeg

export const siteData = {
  site: {
    name: "Hindu Math Organization",
    tagline: "Education & Social Services for the Underprivileged",
    year: new Date().getFullYear(),
  },
  navigation: [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "About Us", path: "/about" },
    { id: 3, label: "Services", path: "/services" },
    { id: 4, label: "Donate", path: "/donate" },
    { id: 5, label: "Poojas", path: "/poojas" },
    { id: 6, label: "Contact", path: "/contact" },
  ],
  home: {
    hero: {
      title: "Welcome to Siddarabetta Mata",
      subtitle: "Serving the community through education and social services",
      image: image1, // Hero image
    },
    mission: {
      title: "Our Mission",
      description: "We strive to provide quality education and social services to the underprivileged, fostering a sense of community and support.",
      image: image2, // Mission image
    },
    latestUpdates: {
      title: "Latest Updates",
      description: "Stay tuned for updates on our upcoming poojas and community events.",
      image: image3, // Updates image
    },
  },
  about: {
    title: "About Us",
    founded: "2015",
    mission: "We are dedicated to providing educational and social services to underprivileged communities.",
    history: "Founded in 2015, the Hindu Math Organization has been at the forefront of social service, focusing on education, healthcare, and community development.",
    image: image4, // About image
  },
  services: [
    {
      id: 1,
      name: "Educational Programs",
      description: "Free tuition and coaching for underprivileged children",
      image: "https://via.placeholder.com/300x200?text=Education",
      details: "We provide comprehensive educational support including tuition, study materials, and mentorship.",
    },
    {
      id: 2,
      name: "Healthcare Services",
      description: "Regular health camps and medical assistance",
      image: "https://via.placeholder.com/300x200?text=Healthcare",
      details: "Free medical check-ups and healthcare awareness programs for the community.",
    },
    {
      id: 3,
      name: "Food & Nutrition",
      description: "Mid-day meals and nutrition programs",
      image: "https://via.placeholder.com/300x200?text=Food+Program",
      details: "Nutritious meals for children attending our educational programs.",
    },
    {
      id: 4,
      name: "Skill Development",
      description: "Vocational training for youth",
      image: "https://via.placeholder.com/300x200?text=Skill+Training",
      details: "Hands-on training in various trades to help youth become self-sufficient.",
    },
  ],
  poojas: [
    {
      id: 1,
      name: "Durga Puja",
      date: "October 15, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Main Temple Hall",
      description: "Annual Durga Puja celebration with rituals and community feast",
      image: "https://via.placeholder.com/300x200?text=Durga+Puja",
    },
    {
      id: 2,
      name: "Diwali Celebration",
      date: "November 1, 2025",
      time: "5:00 PM - 9:00 PM",
      location: "Community Center",
      description: "Festival of lights with prayers, decorations and sweets distribution",
      image: "https://via.placeholder.com/300x200?text=Diwali",
    },
    {
      id: 3,
      name: "Holi Festival",
      date: "March 14, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "Outdoor Ground",
      description: "Festival of colors with community gathering and cultural programs",
      image: "https://via.placeholder.com/300x200?text=Holi",
    },
  ],
  donate: {
    title: "Support Our Mission",
    subtitle: "Your donation helps us continue our educational and social services",
    image: image5, // Donate image
    methods: [
      {
        id: 1,
        name: "Bank Transfer",
        details: "Account: Hindu Math Org | IFSC: AXIS0001234",
        icon: "🏦",
      },
      {
        id: 2,
        name: "Online Payment",
        details: "Pay via UPI: hindumathorg@upi or Credit/Debit Card",
        icon: "💳",
      },
      {
        id: 3,
        name: "Cheque",
        details: "Send cheque payable to 'Hindu Math Organization'",
        icon: "📝",
      },
    ],
    impactAreas: [
      { area: "Education", amount: "₹5000 provides books for 5 children" },
      { area: "Healthcare", amount: "₹2000 covers one health camp" },
      { area: "Food Program", amount: "₹1000 provides 50 meals" },
      { area: "Skill Training", amount: "₹10000 trains 10 youth" },
    ],
  },
  contact: {
    title: "Contact Us",
    email: "info@hindumathorg.com",
    phone: "+91-XXXX-XXXX-XXXX",
    address: "123 Temple Street, City, State 110001",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM",
    image: "https://via.placeholder.com/600x400?text=Contact+Us",
  },
};