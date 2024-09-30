"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { Item } from "@radix-ui/react-select";
import { handleClientScriptLoad } from "next/script";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Data Analytics",
    title: "Sales Report Dasboard Kimia Farma​",
    description:
      "Pengalaman Magang Virtual Big Data Analytics di Kimia Farma yang difasilitasi oleh Rakamin Academy. Dalam program ini, sebagai Intern Analis Big Data dari Kimia Farma, saya belajar tentang data warehouse, data lake, dan data mart. Saya juga mengasah keterampilan saya dalam SQL dan cara memvisualisasikan data yang baik. Di akhir proyek, saya diminta untuk membuat tabel analisa dari dengan BigQuery membangun dashboard penjualan menggunakan Looker Studio dengan dataset kasus nyata dari Kimia Farma",
    stack: [
      {
        name: "SQL",
      },
      {
        name: "BigQuery",
      },
      {
        name: "Looker Studio",
      },
    ],
    image: "/assets/work/dashboard.png",
    live: "https://lookerstudio.google.com/reporting/58feb65d-29de-4c33-9c7d-7df3ced5b5e9",
    github: "https://github.com/Ayyasy123/rakamin-kf-big-data-analylitcs",
  },
  {
    num: "02",
    category: "Web Development",
    title: "EMIS API Management",
    description:
      "EMIS (Education Management Information System) API Management adalah sistem yang dirancang untuk mengelola dan mengatur data pendidikan yang digunakan oleh Kementrian Agama. Sistem ini memungkinkan pengumpulan, pengolahan, dan distribusi data pendidikan secara efisien dan terintegrasi melalui API (Application Programming Interface).",
    stack: [
      {
        name: "Laravel",
      },
      {
        name: "React.js",
      },
      {
        name: "SQL",
      },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://emis.kemenag.go.id/",
    github: "",
    // caption: "* Project tidak memiliki link maupun github, bisa dilihat langsung",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam exercitationem facere unde perferendis illo aliquid.",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "Tailwind.css",
      },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current silde index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stock */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove last coma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* <p>{project.caption}</p> */}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              swipeBetween={30}
              slidePeriew={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider button */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
              <div className=""></div>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
