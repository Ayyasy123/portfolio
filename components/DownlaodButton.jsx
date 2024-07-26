"use client";

import { FiDownload } from "react-icons/fi";
import { Button } from "./ui/button";

const DownloadButton = () => {
  return (
    <Button
      variant="outline"
      size="lg"
      className="uppercase flex items-center gap-2"
    >
      <a href="/assets/cv/cv.pdf" download className="flex items-center gap-2">
        <span>Download CV</span>
        <FiDownload className="text-xl" />
      </a>
    </Button>
  );
};

export default DownloadButton;
