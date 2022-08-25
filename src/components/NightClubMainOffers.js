import Overlay from "./Overlay";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IoBeer, IoRestaurant } from "react-icons/io5";

export default function NightClubMainOffers() {
  const [hoverItemIndex, setHoverItemIndex] = useState(null);

  const mainOffers = [
    {
      imgUrl: "./assets/content-img/restaurant_1.jpg",
      icon: <IoBeer />,
      heading: "NIGHT CLUB",
    },
    {
      imgUrl: "./assets/content-img/restaurant_2.jpg",
      icon: <IoRestaurant />,
      heading: "RESTAURANT",
    },
    {
      imgUrl: "./assets/content-img/thumb2.jpg",
      icon: <IoBeer />,
      heading: "BAR",
    },
  ];

  // ANIMATIONS
  const iconAnimation = {
    initial: {
      opacity: 0.5,
      scale: 0.6,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0,
    },
  };
  const headingAnimation = {
    initial: {
      opacity: 0,
      scale: 0.6,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7 },
    },
    exit: {
      opacity: 0,
      scale: 0.6,
    },
  };
  const descriptionAnimation = {
    initial: {
      opacity: 0,
      x: 60,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 },
    },
    exit: {
      opacity: 0,
      x: 30,
    },
  };

  return (
    <>
      <div className="flex flex-wrap justify-center gap-9">
        <p>Hello world</p>
        {mainOffers.map((offer, i) => (
          <motion.section
            className="w-{451px} h-{577px} relative grid place-content-center"
            key={i}
            style={{
              backgroundImage: `url(${offer.imgUrl})`,
            }}
            onHoverStart={() => setHoverItemIndex(i)}
            onHoverEnd={() => setHoverItemIndex(null)}
          >
            <AnimatePresence>
              {hoverItemIndex === i && (
                <>
                  <Overlay key="overlay" opacity={1} />
                  <motion.div
                    key="icon"
                    className="icon"
                    variants={iconAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {offer.icon}
                  </motion.div>
                  <motion.h2
                    className="mainOfferHeading"
                    variants={headingAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {offer.heading}
                  </motion.h2>
                  <motion.p
                    className="max-w-{370px} text-gray-300 z-10 text-center"
                    variants={descriptionAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                  </motion.p>
                </>
              )}
            </AnimatePresence>
          </motion.section>
        ))}
      </div>
    </>
  );
}
