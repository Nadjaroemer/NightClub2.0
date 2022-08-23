import { motion } from "framer-motion";
import headerImageOne from "../assets/bg/header_bg_1.jpg";
import line from "../assets/bottom_line2.png";
import logo from "../assets/icon/Logo.svg";
//import headerImageTo from "../assets/bg/header_bg_2.jpg";

export default function Hero() {
  {
    /*const heroImages = ["header_bg_1.jpg", "header_bg_2.jpg"];

  function getRandomImage(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  const heroImagePicker = () =>
`../assets/bg/${heroImages[getRandomImage(0, 2)]}`;*/
  }
  const logoAnimation = {
    initial: {
      rotateX: 95,
      opacity: 0,
    },
    animate: {
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };
  const sloganAnimation = {
    initial: {
      opacity: 0,
      y: -50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative">
      <img
        className="w-screen h-screen z-0"
        src={headerImageOne}
        alt="Night Club"
      />
      {/* left: 0; right: 0; margin-left: auto; margin-right: auto; */}

      <div className="absolute z-30 right-0 left-0 top-1/2 flex flex-col items-center">
        <motion.img
          src={logo}
          alt="logo"
          variants={logoAnimation}
          initial="initial"
          animate="animate"
        />

        <motion.div
          className="flex flex-col items-center"
          variants={sloganAnimation}
          initial="initial"
          animate="animate"
        >
          <h2 className=" text-[color:white] place-self-center text-4xl uppercase tracking-widest">
            Have a good time
          </h2>
          <img src={line} alt="night club logo" />
        </motion.div>
      </div>
    </section>
  );
}
