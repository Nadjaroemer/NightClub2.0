import {
  FaTwitter,
  FaFacebookF,
  FaGooglePlusG,
  FaSkype,
  FaBloggerB,
} from "react-icons/fa";
import Adress from "./Adress";
import RecentPosts from "./RecentPosts";
import recentPostOne from "../assets/content-img/recent_post1.jpg";
import recentPostTwo from "../assets/content-img/recent_post2.jpg";

export default function Footer() {
  return (
    <section className="pl-6 pr-2 md:pl-32 md:pr-32 md:pt-32">
      <div className="flex flex-wrap md:flex-nowrap justify-between md:pb-28">
        <section>
          <Adress />
        </section>
        <section>
          <h2 className="uppercase text-[#ff2a70] md:pb-10">Recent Posts</h2>
          <div className="pb-4 mb:pb-20">
            <RecentPosts
              image={recentPostOne}
              text="Lorem Ipsum is simply dummy text of the printing and typesetting"
              date="April 17, 2018"
            />
          </div>
          <div>
            <RecentPosts
              image={recentPostTwo}
              text="Lorem Ipsum is simply dummy text of the printing and typesetting"
              date="April 17, 2018"
            />
          </div>
        </section>
        <section>
          <h2 className="uppercase text-[#ff2a70] md:pb-10">Recent Posts</h2>
          <div className="pb-4 mb:pb-20">
            <RecentPosts
              image={recentPostTwo}
              text="Lorem Ipsum is simply dummy text of the printing and typesetting"
              date="April 17, 2018"
            />
          </div>
          <div>
            <RecentPosts
              image={recentPostOne}
              text="Lorem Ipsum is simply dummy text of the printing and typesetting"
              date="April 17, 2018"
            />
          </div>
        </section>
      </div>

      <section className="flex  flex-wrap md:flex-nowrap justify-between items-center sm:flex-wrap text-base md:pb-24">
        <p className="capitalize">Stay Connected with us night Club</p>

        <div className="flex">
          <div className="border-2 border-white w-7 md:w-12 h-7 md:h-12 flex justify-center items-center ">
            <FaFacebookF size="1.5rem" />
          </div>
          <div className="flex border-2 border-white w-12 h-12 justify-center items-center ml-8">
            <FaTwitter size="1.5rem" />
          </div>
          <div className="flex border-2 border-white w-12 h-12 justify-center items-center ml-8">
            <FaGooglePlusG size="1.5rem" />
          </div>
          <div className="flex border-2 border-white w-12 h-12 justify-center items-center ml-8">
            <FaSkype size="1.5rem" />
          </div>
          <div className="flex border-2 border-white w-12 h-12 justify-center items-center ml-8">
            <FaBloggerB size="1.5rem" />
          </div>
        </div>

        <p>CopyRight @ 2018 NightClub psd template all right</p>
      </section>
    </section>
  );
}
