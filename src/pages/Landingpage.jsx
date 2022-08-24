import Headline from "../components/Headline";
import Testimonials from "../components/Testimonials";
import BlogPost from "../components/BlogPost";
import EmailSubscriptionForm from "../components/EmailSubscriptionForm"

//import restaurantImageTwo from "../assets/content-img/restaurant_1.jpg"
import restaurantImageOne from "../assets/content-img/thumb1.jpg";
import restaurantImageThree from "../assets/content-img/thumb2.jpg";
import testimonialThree from "../assets/content-img/testimonial_3.jpg";
import blogPostOne from "../assets/content-img/blog_full1.jpg";
import blogPostTwo from "../assets/content-img/blog_full2.jpg";
import blogPostThree from "../assets/content-img/blog_full3.jpg";
import NightClubMainOffers from "../components/NightClubMainOffers";
import MainOffers from "../components/MainOffers";



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
          <img src={restaurantImageThree}alt="bruschetta" className="pr-16" />
          <img src={restaurantImageThree} alt="bar" />
        </div>
        <MainOffers/>

        <Headline headline="EVENTS OF THE MONTH" />
        <Headline headline="NIGHT CLUB GALLERY" />

        <Testimonials
        image={testimonialThree}
        name="Alex"
        text="There are many variations of passages of Lorem ipsum available, but the majority have suddered aæteration in som form, by injected humour, or randomised words which don*t look even slightly believable. If you are going to uyse a passage of Lorem Ipsum you ned to be sure there isn*t anything embarrising hidden in the middle of the text"/>
        
        <Headline headline="RECENT BLOG" />

        <div className="flex pl-24 pr-24">
        <BlogPost
        image={blogPostOne}
        headline="More than 20 Yea..."
        author="Admin"
        comments="3 Comments"
        date="16 Nov 2018"
        text="It is long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
        />

        <BlogPost
        image={blogPostTwo}
        headline="More than 20 Yea..."
        author="Admin"
        comments="3 Comments"
        date="16 Nov 2018"
        text="It is long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
        />

        <BlogPost
        image={blogPostThree}
        headline="More than 20 Yea..."
        author="Admin"
        comments="3 Comments"
        date="16 Nov 2018"
        text="It is long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
        />
        </div>
        <EmailSubscriptionForm/>
    </div>
        
        

  )
}