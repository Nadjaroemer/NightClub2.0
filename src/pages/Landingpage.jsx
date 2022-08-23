import Headline from "../components/Headline";
import Footer from "../components/Footer";


import restaurantImageTo from "../assets/content-img/reastaurant_1.jpg";
import restaurantImageOne from "../assets/content-img/thumb1.jpg";
import restaurantImageThree from "../assets/content-img/thumb2.jpg";

export default function Landingpage(){
  return(
    <div>
    <Headline headline="WELCOME IN THE NIGHTCLUB" />
        <div className="flex pt-24 justify-center">
          <img
            src={restaurantImageOne}
            alt="drinks at table"
            className="pr-16"
          />
          <img src={restaurantImageTo} alt="bruschetta" className="pr-16" />
          <img src={restaurantImageThree} alt="bar" />
        </div>

        <Headline headline="EVENTS OF THE MONTH" />
        <Headline headline="NIGHT CLUB GALLERY" />
        <Headline headline="RECENT BLOG" />
        <Footer />
        </div>
  )
}