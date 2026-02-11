import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Minahil",
  lastName: "Awais",
  name: `Minahil Awais`,
  role: "Web Developer & Graphic Designer",
  avatar: "/images/projects/project-01/avatar.jpg",
  email: "minahilawais7@gmail.com",
  location: "Asia/Karachi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Urdu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/me50/Minahil-Awais",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/minahil-awais-50b340291/",
    essential: true,
  },
  {
    name: "YES-Program",
    icon: "openLink",
    link: "https://www.yesprograms.org/stories/eid-with-my-host-family",
    essential: true,
  },
  {
    name: "Youtube",
    icon: "youtube",
    link: "https://www.youtube.com/@devwithmina?si=a0I1UJRZvc9bPeL8",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:minahilawais7@gmail.com`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.PNG",
  label: "Home",
  title: `Minahil's Portfolio`,
  description: `Portfolio website showcasing my work as a Web Designer}`,
  headline: <>Engineer, Editor and Designer</>,
  featured: {
    display: false,
    title: (
      <Row gap="0" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I am Minahil, a design engineer and developer based in Pakistan. I love generative art and pixel bending. I develope in Visual Studio Code and design using Canva and Adobe.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About Me`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a Pakistani-based developer and designer specializing in high-impact technical solutions. My projects include "UnityGrid", a global humanitarian logistics system designed to optimize disaster relief and volunteer deployment across international hubs, including Türkiye.
        I also created "PolyglotNexus", a website that allows students to generate notes and flashcards as beginner developers. As a VS Code developer and a Photoshop enthusiast, I aspire to bridge the gap between technical architecture and visual communication. I like to share my progress on my YouTube channel and graphics on Instagram. 
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "E-Magazine",
        timeframe: "2024 - Present",
        role: "Graphic Designer, Editor, Leader",
        achievements: [
          <>
            Designed and edited the monthly E-Magazine.
          </>,
          <>
           Led a team of 25+ contributors to publish high-quality content for 450+ students.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-012.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-0131.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-0141.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-015.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-016.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Freelancer",
        timeframe: "2023 - Present",
        role: "Freelance Editor & Graphic Designer",
        achievements: [
          <>
            Produced professional-grade posters using Adobe Creative Suite (Photoshop, Illustrator, InDesign), focusing on typography, color theory, and visual hierarchy.
          </>,
          <>
            Translated complex client briefs into compelling visual narratives for both digital and large-format print media.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Siddeeq Public School",
        description: <>Studied in general science group with subjects; Maths, Chemistry, Physics & Biology.</>,
      },
      {
        name: "Greenville Technical Charter Highschool",
        description: <>Studied as an Senior Exchange Student in the United States. Focused on Animation and designing.</>,
      },
      {
        name: "Punjab College, Jinnah Campus",
        description: <>Graduating Senior with intended major as Computer Science. Subjects included Maths, Physics and Computer Science.</>,
      }
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Adobe Photoshop, Illustrator, InDesign",
        description: (
          <>Able to graphic design posters and animations</>
        ),
        tags: [
          {
            name: "AdobePhotoshop",
            icon: "AdobePhotoshop",
          },
          {
            name: "AdobeIllustrator",
            icon: "AdobeIllustrator",
          },
          {
            name: "AdobeIndesign",
            icon: "AdobeIndesign",
          }
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Python + Javascript + VS Code.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Python",
            icon: "Python",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/banner-2-1-scaled-1.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: 'Projects- Minahil Awais',
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/IMG_9879.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/IMG_0246.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/IMG_0247.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/IMG_0251.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/IMG_0245.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/IMG_0035.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/IMG_9883.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/IMG_9884.jpeg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
