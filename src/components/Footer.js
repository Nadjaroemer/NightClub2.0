import { IconBase } from "react-icons";
import {
  FaTwitter,
  FaFacebookF,
  FaGooglePlusG,
  FaSkype,
  FaBloggerB,
} from "react-icons/fa";

export default function Footer() {
  return (
    <section className="flex justify-between sm:flex-wrap text-base">
      <p className="capitalize">Stay Connected with us night Club</p>

      <div className="flex">
        <div className="border-2 border-white w-14 h-14 flex justify-center items-center ">
          <FaFacebookF size="1.5rem" />
        </div>
        <div className="flex border-2 border-white w-14 h-14 justify-center items-center ml-8">
          <FaTwitter size="1.5rem" />
        </div>
        <div className="flex border-2 border-white w-14 h-14 justify-center items-center ml-8">
          <FaGooglePlusG size="1.5rem" />
        </div>
        <div className="flex border-2 border-white w-14 h-14 justify-center items-center ml-8">
          <FaSkype size="1.5rem" />
        </div>
        <div className="flex border-2 border-white w-14 h-14 justify-center items-center ml-8">
          <FaBloggerB size="1.5rem" />
        </div>
      </div>

      <p>CopyRight @ 2018 NightClub psd template all right</p>
    </section>
  );
}
