import { FaTwitter, FaFacebookF, FaGooglePlusG } from "react-icons/fa";
export default function Testimonials({ image, name, text }) {
  return (
    <div className="flex flex-col justify-center items-center md:pt-14 md:pb-24 md:pl-48 md:pr-48">
      <img className="shrink-0" src={image} alt="guest" />
      <p className="uppercase text-2xl pt-8 pb-8">{name}</p>
      <p className="text-center text-xl">{text}</p>
      <div className="flex pt-10">
        <div className="border-2 border-white w-12 h-12 flex justify-center items-center ">
          <FaFacebookF size="1.5rem" />
        </div>
        <div className="flex border-2 border-white w-12 h-12 justify-center items-center ml-8">
          <FaTwitter size="1.5rem" />
        </div>
        <div className="flex border-2 border-white w-12 h-12 justify-center items-center ml-8">
          <FaGooglePlusG size="1.5rem" />
        </div>
      </div>
    </div>
  );
}
