import Headline from "../components/Headline";
import Testimonials from "../components/Testimonials";

import restaurantImageTo from "../assets/content-img/reastaurant_1.jpg";
import restaurantImageOne from "../assets/content-img/thumb1.jpg";
import restaurantImageThree from "../assets/content-img/thumb2.jpg";
import testimonialThree from "../assets/content-img/testimonial_3.jpg"


export default function Landingpage() {
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

        <Testimonials
        image={testimonialThree}
        name="Alex"
        text="There are many variations of passages of Lorem ipsum available, but the majority have suddered aæteration in som form, by injected humour, or randomised words which don*t look even slightly believable. If you are going to uyse a passage of Lorem Ipsum you ned to be sure there isn*t anything embarrising hidden in the middle of the text"/>
        
        </div>

  )
}