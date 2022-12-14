import Headline from "../components/Headline";
import Testimonials from "../components/Testimonials";
import BlogPost from "../components/BlogPost";
import EmailSubscriptionForm from "../components/EmailSubscriptionForm";
import testimonialThree from "../assets/content-img/testimonial_3.jpg";
import blogPostOne from "../assets/content-img/blog_full1.jpg";
import blogPostTwo from "../assets/content-img/blog_full2.jpg";
import blogPostThree from "../assets/content-img/blog_full3.jpg";
import EventsOfTheMonth from "../components/EventsOfTheMonth";
import NightClubMainOffers from "../components/NightClubMainOffers";
import Gallery from "../components/Gallery";

export default function Landingpage(props) {
  // props.blogPosts
  return (
    <div className="bg-black pl-8 pr-8">
      <Headline headline="WELCOME IN THE NIGHTCLUB" />
      <NightClubMainOffers />
      <Headline headline="EVENTS OF THE MONTH" />
      <EventsOfTheMonth />
      <Headline headline="NIGHT CLUB GALLERY" />
      <Gallery />
      <Testimonials
        image={testimonialThree}
        name="Alex"
        text="There are many variations of passages of Lorem ipsum available, but the majority have suddered ateration in som form, by injected humour, or randomised words which don*t look even slightly believable. If you are going to uyse a passage of Lorem Ipsum you ned to be sure there isn*t anything embarrising hidden in the middle of the text"
      />

      <Headline headline="RECENT BLOG" />

      <div className="flex flex-wrap md:flex-nowrap md:pl-24 md:pr-24">
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
      <EmailSubscriptionForm />
    </div>
  );
}
