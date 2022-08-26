// import { FaTwitter, FaFacebookF, FaGooglePlusG } from "react-icons/fa";
// export default function Testimonials({ image, name, text }) {
//   return (
//     <div className="flex flex-col justify-center items-center md:pt-14 md:pb-24 md:pl-48 md:pr-48">
//       <img className="shrink-0" src={image} alt="guest" />
//       <p className="uppercase text-2xl pt-8 pb-8">{name}</p>
//       <p className="text-center text-xl">{text}</p>
//       <div className="flex pt-10">
//         <div className="border-2 border-white w-12 h-12 flex justify-center items-center ">
//           <FaFacebookF size="1.5rem" />
//         </div>
//         <div className="flex border-2 border-white w-12 h-12 justify-center items-center ml-8">
//           <FaTwitter size="1.5rem" />
//         </div>
//         <div className="flex border-2 border-white w-12 h-12 justify-center items-center ml-8">
//           <FaGooglePlusG size="1.5rem" />
//         </div>
//       </div>
//     </div>
//   );
// }

import axios from "axios";
import { useEffect, useState } from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { FaFacebookF, FaTwitter } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState();
  useEffect(() => {
    if (testimonials) return;
    (async () => {
      const { data } = await axios(
        `${process.env.REACT_APP_NIGHTCLUB_APP_BASE_URL}/testimonials`
      );
      setTestimonials(data);
    })();
  }, [testimonials]);

  // === STYLE ===
  const testimonialContainerStyle = css`
    width: 100%;
    display: grid;
    justify-content: center;
    padding-top: 60px;
    color: white;
    text-align: center;
    & > img {
      margin: 0 auto;
    }
    & > h2 {
      font-size: 28px;
      font-weight: 400;
      margin: 1.5rem 0;
    }
    & > p {
      max-width: 1100px;
    }
  `;
  const someIconContainerStyle = css`
    display: flex;
    margin: 1.5rem auto;
    & > * + * {
      margin-left: 1.5rem;
    }
  `;
  const someIconStyle = css`
    width: 47px;
    height: 47px;
    border: 2px solid white;
    display: grid;
    place-content: center;
  `;
  // SWIPER STYLE
  const myPaginationStyle = css`
    text-align: center;
    width: 100%;
    margin-top: 2.5rem;
    & > * + * {
      margin-left: 0.5rem;
    }
    & .swiper-pagination-bullet {
      width: 20px;
      height: 20px;
      border-radius: 0;
      background: white;
      opacity: 1;
    }
    & .swiper-pagination-bullet-active {
      background: #ff2a70;
    }
  `;
  return (
    <div>
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          el: ".my-pagination-testimonials",
          clickable: true,
          renderBullet: (i, className) => {
            return `<span class="${className}"></span>`;
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {testimonials?.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div css={testimonialContainerStyle}>
              <img src={testimonial.asset.url} alt={testimonial.name} />
              <h2>{testimonial.name}</h2>
              <p>{testimonial.content}</p>
              <div css={someIconContainerStyle}>
                <a
                  href={testimonial.facebook}
                  target="_blank"
                  rel="noreferrer"
                  css={someIconStyle}
                >
                  <FaFacebookF />
                </a>
                <a
                  href={testimonial.twitter}
                  target="_blank"
                  rel="noreferrer"
                  css={someIconStyle}
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="my-pagination-testimonials" css={myPaginationStyle} />
    </div>
  );
};

export default Testimonials;
