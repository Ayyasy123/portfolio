"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web development",
    description:
      "Pengembangan situs web khususnya di bagian Backend menggunakan framework Laravel dan bahasa pemrograman seperti PHP dan JavaScript. Berpengalaman dalam integrasi layanan dengan RESTful API dan pengelolaan basis data menggunakan SQL.",
    href: "",
  },
  {
    num: "02",
    title: "Data Analytics",
    description:
      "Analisis data menggunakan SQL untuk ekstraksi data dan Python untuk analisis lanjutan. Terampil merancang dashboard interaktif dengan Looker Studio untuk visualisasi data dan menghasilkan laporan detail untuk mendukung rekomendasi strategis.",
    href: "",
  },
  // {
  //   num: "03",
  //   title: "UI/UX Design",
  //   description:
  //     "Desain antarmuka pengguna (UI) dan pengalaman pengguna (UX) yang fokus pada pengembangan fitur front-end menggunakan framework seperti Chakra UI, serta peningkatan performa dan keamanan sistem.",
  //   href: "",
  // },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
