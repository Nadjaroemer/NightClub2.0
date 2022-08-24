import { motion } from "framer-motion";

export default function Overlay({ opacity, props }) {
  const overlayAnimation = {
    initial: {
      top: "-110px",
      bottom: "-110px",
      opacity: 0,
    },
    animate: {
      top: "0px",
      bottom: "0px",
      opacity: 1,
      transition: { damping: 5 },
    },
    exit: {
      top: "-110px",
      bottom: "-110px",
      opacity: 0,
    },
  };

  return (
    <motion.div
      className="absolute top-0 bottom-0 left-0 right-0 border-pink-700 bg-slate-900 truncate"
      variants={overlayAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    ></motion.div>
  );
}
