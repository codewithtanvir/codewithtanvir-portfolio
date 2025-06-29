import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Tanvir Rahman",
  initials: "TR",
  url: "https://github.com/codewithtanvir",
  location: "Dhaka, Bangladesh",
  locationLink: "https://www.google.com/maps/place/dhaka",
  description:
    "Undergraduate student Computer Science Student",
  summary:
    "I am a passionate software engineering student with a strong foundation in computer science and engineering. Currently pursuing my BSc in CSE at AIUB, I am actively learning and building projects to enhance my skills. I have experience in web development, particularly with modern technologies like React and Next.js. I am enthusiastic about creating innovative solutions and always eager to learn new technologies.",
  avatarUrl: "https://scontent.fzyl2-2.fna.fbcdn.net/v/t39.30808-6/473589359_583458781249904_991951815700708201_n.jpg?stp=dst-jpg_s552x414_tt6&_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHdKk1yz3xac51V99xWXe1f4ZuHVa4UDSjhm4dVrhQNKJiJmAIdo07VadlmeZwaFl3U2KGN1EQqM2Pbm90v1MQ1&_nc_ohc=_Y-09A3xDPQQ7kNvwEzPq6w&_nc_oc=AdmkAeyki3osvoE6lXQFUrf7zqkLIqXo46-EOw-G8u_s0g0BDYdkgDog2LYNKTxKwIQ&_nc_zt=23&_nc_ht=scontent.fzyl2-2.fna&_nc_gid=QYhUIjkLJAIumaRfiNI1tg&oh=00_AfNg9_LNxBkT0K_qWHptdEdXbIiYIBs-QlU0k5kqL61MWw&oe=685F2881",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Java",
    "C++",
    "HTML/CSS",
    "JavaScript",
    "Git",
    "MongoDB",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/codewithtanvir",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/muhammud-tanvir-rahman/",
        icon: Icons.linkedin,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Web Development Club ",
      href: "https://aiub.edu",
      badges: [],
      location: "Dhaka, Bangladesh",
      title: "Web Development Lead",
      logoUrl: "data:image/png;base64,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",
      start: "Jan 2024",
      end: "Present",
      description:
        "Leading the web development club, organizing workshops and helping fellow students learn modern web technologies. Conducted hands-on sessions on React, Next.js, and TypeScript. Mentored junior developers in building their first web applications.",
    },
  ],
  education: [
    {
      school: "American International University-Bangladesh",
      href: "https://aiub.edu",
      degree: "Bachelor's Degree of Computer Science and Engineering (CSE)",
      logoUrl:
        "https://www.aiub.edu/Files/Templates/AIUBv3/assets/images/logo.svg",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Student Community Platform",
      href: "https://github.com/codewithtanvir/aiub-portal",
      dates: "Jan 2024 - Present",
      active: true,
      description:
        "Developed a student community platform for students to connect, share resources, and collaborate on projects. Features include user profiles, discussion forums, and resource sharing.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/codewithtanvir/aiub-portal",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "Campus Events",
      href: "https://github.com/codewithtanvir/campus-events",
      dates: "Sept 2023 - Dec 2023",
      active: false,
      description:
        "Created a platform for AIUB students to discover and register for campus events, workshops, and seminars. Features include event creation, registration, and attendance tracking.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      links: [
        {
          type: "Source",
          href: "https://github.com/codewithtanvir/campus-events",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
    },
  ],
  hackathons: [
    {
      title: "Brcu Traction Prompt Engineering Hackathon",
      dates: "February 10-11, 2024",
      location: "Dhaka, Bangladesh",
      description:
        "Participated in a 24-hour hackathon focused on AI prompt engineering. Developed a web application that generates personalized study plans using AI. Collaborated with a team of 3 to implement the solution.",
      image: "/innovation-summit.png",
      win: "2nd Runner Up",
      links: [
        {
          title: "Project",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/codewithtanvir/farm-to-table",
        },
      ],
    },
  ],
} as const;
