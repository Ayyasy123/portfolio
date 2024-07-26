import { motion } from "framer-motion";

// variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate the reversed index for staggred delay
const revereIndex = (index) => {
  const totalstep = 6;
  return totalstep - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* render 6 motion div, each representing a step of the stairs
  
  each div will have the same animation defined by the stairtransition. 
  object data="the delay for each div is calculate sinomically based on its reveresd index.
  creating a staggered effect with decreasing delay foar each subsequent step
  */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: revereIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
