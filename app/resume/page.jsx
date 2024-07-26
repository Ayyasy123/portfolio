"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Item } from "@radix-ui/react-select";
import { motion } from "framer-motion";
import { icons } from "lucide-react";
import Link from "next/link";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = [
  {
    title: "Web development",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus voluptatum assumenda minima.",
    info: [
      {
        fieldName: "Name",
        fieldValue: "Syamil Taqiyuddin Ayyasy",
      },
      {
        fieldName: "Phone/Whatsapp",
        fieldValue: "(+62) 851 5777 6533",
      },
      {
        fieldName: "education",
        fieldValue: "1+ Years",
      },
      {
        fieldName: "Nationality",
        fieldValue: "Indonesian",
      },
      {
        fieldName: "Freelance",
        fieldValue: "Available",
      },
      {
        fieldName: "Email",
        fieldValue: "syamilayyasy123@gmail.com",
      },
      {
        fieldName: "Languange",
        fieldValue: "Indonesia, English",
      },
    ],
  },
];

// experience data
const experience = [
  {
    icon: "/assets/resume/badge.svg",
    title: "My Experience",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa vero repudiandae placeat iusto voluptas nesciunt.",
    items: [
      {
        company: "Rakamin x Kimia Farma",
        position: "Big Data Analytics Intern",
        duration: "Juni 2023 - Juli 2024",
      },
      {
        company: "Kementrian Agama",
        position: "Full Stack Developer",
        duration: "January 2023 - February 2024",
      },
      {
        company: "Telkomsel",
        position: "Full Stack Developer",
        duration: "January 2023 - Desember 2023",
      },
      {
        company: "Central AI",
        position: "Machine Learning",
        duration: "January 2023 - Desember 2023",
      },
      {
        company: "Central AI",
        position: "Machine Learning",
        duration: "January 2023 - Desember 2023",
      },
      {
        company: "Central AI",
        position: "Machine Learning",
        duration: "January 2023 - Desember 2023",
      },
      {
        company: "Central AI",
        position: "Machine Learning",
        duration: "January 2023 - Desember 2023",
      },
    ],
  },
];

// education data
const education = [
  {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa vero repudiandae placeat iusto voluptas nesciunt.",
    items: [
      {
        institution: "Udemy",
        degree: "The Complete 2024 Web Development Bootcamp",
        duration: "2024",
      },
      {
        institution: "Datacamp",
        degree: "The Complete 2024 Web Development Bootcamp",
        duration: "2024",
      },
      {
        institution: "Universitas Pembangunan Nasional Veteran Jakarta",
        degree: "The Complete 2024 Web Development Bootcamp",
        duration: "2019 - 2023",
      },
    ],
  },
];

// skills data
const skills = [
  {
    title: "My Skills",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa vero repudiandae placeat iusto voluptas nesciunt.",
    skillList: [
      {
        icon: <FaHtml5 />,
        name: "html 5",
      },
      {
        icon: <FaCss3 />,
        name: "css 3",
      },
      {
        icon: <FaJs />,
        name: "javascript",
      },
      {
        icon: <FaReact />,
        name: "react.js",
      },
      {
        icon: <FaNodeJs />,
        name: "node.js",
      },
      {
        icon: <SiNextdotjs />,
        name: "next.js",
      },
      {
        icon: <SiTailwindcss />,
        name: "tailwind.css",
      },
      {
        icon: <FaFigma />,
        name: "figma",
      },
    ],
  },
];

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience[0].title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience[0].description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience[0].items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education[0].title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education[0].description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education[0].items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills[0].title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills[0].description}
                  </p>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {skills[0].skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about[0].title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about[0].description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]">
                  {about[0].info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
