export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "FitTrack Pro - Your Personal Fitness Tracker",
    des: "Achieve your fitness goals with the ultimate wearable that tracks your activity, heart rate, and sleep patterns in real-time.",
    img: "/p1.png",
     iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://fitness-app-self-mu.vercel.app/",
  },
  {
    id: 2,
    title: "Ecommerce Website - Enhance your product hunt",
    des: "Discover comfort like never before with our top-notch ergonomic office chair. Designed to enhance your posture, boost productivity, and provide unparalleled support during long hours.",
    img: "/p2.png",
     iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://ecommerce-app-teal.vercel.app/",
  },
  {
    id: 3,
    title: "Product Page Website - Can",
    des: "Monitor your health and fitness with precision using SmartFit Bands. Designed for active lifestyles, it tracks steps, sleep, and calories burned while providing real-time insights.",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://product-app-snowy.vercel.app/",
  },
  {
    id: 4,
    title: "AI Code Translator - Multilingual Coding Made Easy",
    des: "Effortlessly translate your code between programming languages using our AI-powered translator.",
    img: "/p4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://ai-code-translator-swart-theta.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Ruchir was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ruchir's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ruchir is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
  quote:
    "Working with Ruchir was an incredible experience. His attention to detail, timely delivery, and commitment to excellence made a significant impact on our project. Ruchir's innovative approach and passion for development are unparalleled. I highly recommend him to anyone looking to create a standout online presence.",
  name: "Sophia Martinez",
  title: "CEO of BrightPath Solutions",
},
{
  quote:
    "Ruchir's expertise and dedication were evident from the start. He went above and beyond to ensure the project exceeded expectations. His ability to bring creative ideas to life is exceptional. Partnering with Ruchir was a fantastic decision for our business.",
  name: "James Carter",
  title: "Founder of Digital Nexus Agency",
},
{
  quote:
    "From concept to execution, Ruchir demonstrated exceptional skill and professionalism. His ability to transform ideas into visually stunning and functional designs is truly remarkable. I couldn't be happier with the results he delivered.",
  name: "Emily Davis",
  title: "Product Manager at Visionary Creations",
},
{
  quote:
    "Ruchir is an outstanding developer who brings energy and creativity to every project. His dedication to delivering high-quality results and his ability to adapt to our needs were truly impressive. I would gladly work with him again on future projects.",
  name: "Daniel Thompson",
  title: "Managing Director at Elevate Design Studio",
},

];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Responsive Web Dev - WNK IN Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ruchir-07/"
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/webdevsage/"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ruchir-bajaj/"
  },
];
