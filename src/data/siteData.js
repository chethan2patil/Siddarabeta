// Import all images from data folder
import image1 from './image.jpg';
import image2 from './images2.jpeg';
import image3 from './image3.jpeg';
import image4 from './images4.jpeg';
import image4Duplicate from './images4.jpeg';
import image5 from './image.jpg'; // Add image 5
import mathaImage from './matha-image.jpg';
import guruImage from './guru-image.jpg';
import mathaLogo from './matha-logo.png';

export const siteData = {
  site: {
    name: "Siddarabetta Matha",
    tagline: "Education & Social Services for the Underprivileged",
    year: new Date().getFullYear(),
    parentMatha: "ಬಾಳೆಹೊನ್ನೂರು ಖಾಸಾ ಶಾಖಾ ಮಠ ಸಿದ್ದರಬೆಟ್ಟ (Balehonnuru Kasa Shaka Matha)",
    googleMapLink: "https://share.google.com/6CambUp3H8H9KHd1u",
    guruImage: guruImage,
    mathaLogo: mathaLogo,
    slokas: {
      sloka1: "ಮನವ ಧರ್ಮಕ್ಕೆ ಜಯವಾಗಲಿ | ಧರ್ಮದಿಂದಲೇ ವಿಶ್ವಕ್ಕೆ ಶಾಂತಿ ||",
      sloka1Eng: "MANAVA DHARMAKKE JAYAVAGALI | DHARMADINDALE VISHWAKKE SHANTI ||",
      sloka2: "ಸಾಹಿತ್ಯ-ಸಂಸ್ಕೃತಿ ಸಂವರ್ಧಿಸಲಿ | ಶಾಂತಿ-ಸಮೃದ್ಧಿ ಸರ್ವರಿಗಾಗಲಿ ||",
      sloka2Eng: "SAHITYA-SAMSKRUTI SAMVARDHISALI | SHANTI-SAMRUDHI SARVARIGAAGALI ||",
      blessing: "|| Sri Jagadguru Panchacharyaha Praseedantu ||",
    },
  },
  navigation: [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "About Us", path: "/about" },
    { id: 3, label: "History", path: "/history" },
    { id: 4, label: "Services", path: "/services" },
    { id: 5, label: "Donate", path: "/donate" },
    { id: 6, label: "Poojas", path: "/poojas" },
    { id: 7, label: "Contact", path: "/contact" },
  ],
  home: {
    hero: {
      title: "Welcome to Siddarabetta Matha",
      subtitle: "A Branch of Balehonnuru Kasa Shaka Matha - Serving the community through education and social services",
      image: image1,
    },
    jagadguru: {
      title: "Sri Jagadguruji",
      fullName: "Shree Shree Shree 1008 Jagadguru Prasannarenuka Veera Someshwara Rajadeshikendra Shivacharya Mahaswamiji",
      formerName: "Shree Shathasthala Brahma Siddalinga Shivacharya",
      institution: "Melanagavimath of Shivaganga math",
      description: "of Rambhapuri Peetha was crowned as per the will of former Jagadguru Shree Shree Shree Veera Rudramuni Shivacharya to take over the reigns of the Rambhapuri Peetha after him and be the worthy successor.",
      coronationDate: "6th February 1992",
      coronationDetails: "Shalivahana Saka 1614 Prajapathi Nama Samavatsara, Magha Shuddha tritiya",
      coronationInfo: "The coronation took place under the gracious presence of the Peethadheeshwaras of Kedar, Kashi, Ujjain and Shrishaila. The crowning ceremony was presided by them. The naming ceremony of the new Jagadguru was done with all pomp and gaiety.",
      image: guruImage,
    },
    spiritualLeader: {
      title: "Sri Veerabhadrashivacharya Swamiji",
      description: "A revered spiritual leader dedicated to the propagation of Hindu philosophy, culture, and social welfare. Sri Veerabhadrashivacharya Swamiji continues the legacy of spiritual guidance and community service through various educational and social programs.",
      image: image5,
    },
    mission: {
      title: "Our Mission",
      description: "We strive to provide quality education and social services to the underprivileged, fostering a sense of community and support.",
      image: image2,
    },
    latestUpdates: {
      title: "Latest Updates",
      description: "Stay tuned for updates on our upcoming poojas and community events.",
      image: image3,
    },
  },
  about: {
    title: "About Us",
    founded: "2006",
    mission: "We are dedicated to providing educational and social services to underprivileged communities.",
    history: "Siddarabetta Matha is a branch of the historic Balehonnuru Kasa Shaka Matha. Founded in 2006, our organization has been at the forefront of social service, focusing on education, healthcare, and community development. We carry forward the spiritual and social values of our parent institution.",
    image: mathaImage,
    parentMatha: "ಬಾಳೆಹೊನ್ನೂರು ಖಾಸಾ ಶಾಖಾ ಮಠ ಸಿದ್ದರಬೆಟ್ಟ (Balehonnuru Kasa Shaka Matha Siddarabetta)",
  },
  history: {
    title: "Our Heritage & History",
    subtitle: "Understanding the spiritual lineage and social mission of our organization",
    parentMathaInfo: {
      title: "Parent Institution: Balehonnuru Kasa Shaka Matha",
      description: "Siddarabetta Matha is a branch of the Balehonnuru Kasa Shaka Matha, a venerable spiritual institution with a rich history of serving humanity through education, social welfare, and spiritual guidance.",
      image: mathaImage,
    },
    historicalBackground: [
      {
        period: "Ancient Origins",
        content: "The Kasa Shaka Matha tradition traces its roots to ancient Hindu spiritual practices and philosophy, emphasizing the importance of education and social service as integral parts of spiritual development.",
      },
      {
        period: "Medieval Period",
        content: "During the medieval period, the Matha tradition played a crucial role in preserving and propagating Hindu philosophy, literature, and culture. The institutions served as centers of learning and spiritual guidance.",
      },
      {
        period: "Modern Era",
        content: "In the modern era, the Matha has evolved to address contemporary social challenges while maintaining its core spiritual values. Education, healthcare, and community development have become central to our mission.",
      },
      {
        period: "Contemporary Mission",
        content: "Today, Siddarabetta Matha continues the legacy of service to the underprivileged, providing educational opportunities, healthcare support, and spiritual guidance to those in need.",
      },
    ],
    coreValues: [
      {
        title: "Spiritual Excellence",
        description: "Maintaining the highest standards of spiritual practice and teaching",
      },
      {
        title: "Social Service",
        description: "Dedicating ourselves to the welfare and upliftment of society",
      },
      {
        title: "Education",
        description: "Providing access to quality education for all, regardless of economic status",
      },
      {
        title: "Community Care",
        description: "Building strong, supportive communities through healthcare and social programs",
      },
      {
        title: "Preserving Culture",
        description: "Protecting and promoting Hindu traditions, philosophy, and cultural values",
      },
      {
        title: "Inclusive Growth",
        description: "Creating opportunities for sustainable development and prosperity for all",
      },
    ],
    philosophyContent: "Our philosophy is rooted in the belief that true spiritual development comes through service to humanity. We believe in the power of education to transform lives and communities. By combining spiritual wisdom with practical social work, we aim to create lasting positive change in society.",
    visionStatement: "To be a beacon of spiritual light and social progress, serving humanity with compassion, integrity, and excellence while preserving the timeless values of Hindu philosophy and culture.",
    missionStatement: "To provide holistic development through education, healthcare, and spiritual guidance; to uplift the underprivileged through our programs; and to create a society where every individual has the opportunity to fulfill their potential.",
    leadershipImage: mathaImage,
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
    image: image4Duplicate,
    methods: [
      {
        id: 1,
        name: "Bank Transfer",
        details: "Account: Siddarabetta Matha | IFSC: AXIS0001234",
        icon: "🏦",
      },
      {
        id: 2,
        name: "Online Payment",
        details: "Pay via UPI: siddarabettamatha@upi or Credit/Debit Card",
        icon: "💳",
      },
      {
        id: 3,
        name: "Cheque",
        details: "Send cheque payable to 'Siddarabetta Matha'",
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
    email: "info@siddarabettamatha.com",
    phone: "+91-XXXX-XXXX-XXXX",
    address: "Siddru betta Rd, Siddara Betta, Negilala, Koratagere Taluk, Karnataka 572138",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM",
    googleMapLink: "https://share.google.com/6CambUp3H8H9KHd1u",
    image: "https://via.placeholder.com/600x400?text=Contact+Us",
  },
};