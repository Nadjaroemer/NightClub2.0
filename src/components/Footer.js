import { IconBase } from "react-icons";
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
    <section className="pl-56 pr-56">
      <div className="flex justify-between pb-28">
        <section>
          <Adress />
        </section>
        <section>
          <h2 className="uppercase text-[#ff2a70] pb-10">Recent Posts</h2>
          <div className="pb-20">
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
          <h2 className="uppercase text-[#ff2a70] pb-10">Recent Posts</h2>
          <div className="pb-20">
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

      <section className="flex justify-between items-center sm:flex-wrap text-base pb-24">
        <p className="capitalize">Stay Connected with us night Club</p>

        <div className="flex">
          <div className="border-2 border-white w-12 h-12 flex justify-center items-center ">
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
