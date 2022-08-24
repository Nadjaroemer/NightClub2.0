import { motion } from "framer-motion";
import restaurantImageOne from "../assets/content-img/thumb1.jpg";
import restaurantImageThree from "../assets/content-img/thumb2.jpg";

export default function MainOffers() {
  return (
    <motion.div className="flex pt-24 justify-center">
      <motion.img
        whileHover={{ scale: 0.8 }}
        src={restaurantImageOne}
        alt="drinks at table"
        className="pr-16"
      />
      <img src={restaurantImageOne} alt="bruschetta" className="pr-16" />
      <img src={restaurantImageThree} alt="bar" />
    </motion.div>
  );
}
