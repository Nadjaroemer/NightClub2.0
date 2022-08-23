import headerImageOne from "../assets/bg/header_bg_1.jpg";
//import headerImageTo from "../assets/bg/header_bg_2.jpg";

export default function Hero() {
  {
    /*const heroImages = ["header_bg_1.jpg", "header_bg_2.jpg"];

  function getRandomImage(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  const heroImagePicker = () =>
`../assets/bg/${heroImages[getRandomImage(0, 2)]}`;*/
  }

  return (
    <section className="relative">
      <img
        className="w-screen h-screen z-0"
        src={headerImageOne}
        alt="Night Club"
      />
      {/* left: 0; right: 0; margin-left: auto; margin-right: auto; */}

      <div className="absolute z-30 right-0 left-0 top-1/2 flex flex-col items-center">
        <div>
          <img src="./src/assets/icon/Logo_main.svg" alt="Main Logo" />
        </div>
        <div className="flex flex-col items-center">
          <h2 className=" text-[color:white] place-self-center text-2xl">
            Have a good time
          </h2>
          <img src="/src/assets/bottom_line2.png" alt="night club logo" />
        </div>
      </div>
    </section>
  );
}
