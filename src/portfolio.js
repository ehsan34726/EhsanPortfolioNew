/* Updated DeveloperFolio for Syed Ehsanul Karim */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Syed Ehsanul Karim",
  title: "Hi all, I'm Ehsan 👋",
  subTitle: emoji(
    "Customer-focused Technical Support Specialist with 5+ years of experience managing SaaS platforms, POS systems, and e-commerce solutions. Skilled in Windows, Linux, remote support tools, and scripting."
  ),
  resumeLink: "https://drive.google.com/file/d/18UDQzTBEhgY9XKGqAUYiUayVSIxe65z2/view?usp=drive_link",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/ehsanul34726",
  linkedin: "https://www.linkedin.com/in/ehsanul001",
  gmail: "ehsansyed10@gmail.com",
  twitter: "x.com/karimehsan3",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

const skillsSection = {
  title: "What I Do",
  subTitle: "Experienced Technical Support Specialist & IT Systems Expert",
  skills: [
    emoji("⚙️ Troubleshoot and resolve cross-platform IT issues (Windows, macOS, Linux)"),
    emoji("🛠️ Administer Active Directory, Azure AD, and Group Policies"),
    emoji("💻 Provide remote support using Zendesk, Jira, TeamViewer, AnyDesk"),
    emoji("🌐 Manage networking components: TCP/IP, DNS, DHCP, VPN, VLANs, Firewalls"),
    emoji("🧩 Automate workflows using PowerShell, Bash, and Python (basic)"),
    emoji("📊 Monitor infrastructure using tools like Nagios, SolarWinds, and PRTG"),
    emoji("📚 Develop SOPs and conduct agent onboarding/training to boost efficiency"),
    emoji("🧠 Coordinate cross-team efforts between support and development using Agile")
  ],
  softwareSkills: [
    { skillName: "windows", fontAwesomeClassname: "fab fa-windows" },
    { skillName: "linux", fontAwesomeClassname: "fab fa-linux" },
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "sql-database", fontAwesomeClassname: "fas fa-database" }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Metropolitan University, Sylhet",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "Graduated in 2022",
      desc: "Completed 152 credits focused on systems, networking, and development."
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "IT Support & Infrastructure", progressPercentage: "99%" },
    { Stack: "Networking & Systems", progressPercentage: "90%" },
    { Stack: "Scripting & Web", progressPercentage: "88%" }
  ],
  displayCodersrank: true
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Technical Support Manager",
      company: "OrderVox LTD",
      companylogo: require("./assets/images/CompanyLogo.png"),
      date: "Sep 2022 – May 2025",
      desc: "Led a team of 12+ customer support agents to deliver 24/7 technical assistance to 3000+ restaurants and takeaways e-commerce websites, digital marketing, hardware devices and upsell across the UK. Resolved 1000+ technical and non-technical issues using Zendesk and internal CRM systems, reducing resolution time by 20%. Utilized Jira to collaborate with the development team for bug tracking, resulting in a 30% reduction in recurring technical issues. Developed SOPs and training documentation that improved ticket resolution efficiency by 15%.Integrated ERP workflows for POS and inventory support and onboarding process streamlining.Led end-to-end migration from version 1 to version 2 coordinating with developers and stakeholders to ensure smooth rollout. Achieved 30% reduction in downtime. Collaborated on fixing 50+ critical issues, reducing post-launch tickets by 60%. Trained 12+ agents on new workflows, cutting onboarding time by 25%"
    },
    {
      role: "Technical Support Executive",
      company: "OrderVox LTD",
      companylogo: require("./assets/images/CompanyLogo.png"),
      date: "Aug 2020 – Aug 2022",
      desc: "livered real-time support to clients for POS, hardware and software configurations of the OrderE platform. Assisted in transitioning to centralised support tools and automating ticket handling workflows.  Provide Tele Support, Remote Access Support in real time to thousands of customers remotely. Worked as a bridge between developer and clients to fix escalated issues."
    },
    {
      role: "Freelance Web Developer",
      company: "Self-employed",
      companylogo: require("./assets/images/FiverrLogo.png"),
      date: "Jan 2020 – Dec 2020",
      desc: "Developed and delivered 25+ websites using React, HTML, CSS, and integrated POS features."
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Projects",
  subtitle: "Real-world work from OrderVox, Freelancing & POS systems",
  projects: [],
  display: false
};

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Certifications and Programs",
  achievementsCards: [
    {
      title: "CompTIA A+ Core 1",
      subtitle: "Issued by Dion Training (Udemy)",
      image: require("./assets/images/certificate.png"),
      imageAlt: "CompTIA A+",
      footerLink: []
    },
    {
      title: "Mobile Apps Dev Program",
      subtitle: "ICT Division, Bangladesh",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Mobile Dev",
      footerLink: []
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle: "I write about troubleshooting, tech, and systems support.",
  displayMediumBlogs: "false",
  blogs: [],
  display: true
};

const talkSection = {
  title: "Talks",
  subtitle: emoji("I LOVE TO SHARE AND TEACH 😅"),
  talks: [],
  display: true
};

 const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Enjoy my insights and knowledge in support systems.",
  podcast: [],
  display: true
};

const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume below.",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Available for IT Support, Technical Helpdesk, or Hybrid roles. Feel free to connect! just want to say hi? My Inbox is open for all.",
  number: "+1 646-323-2982",
  email_address: "ehsansyed10@gmail.com"
};

const twitterDetails = {
  userName: "x.com/karimehsan3",
  display: true
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

