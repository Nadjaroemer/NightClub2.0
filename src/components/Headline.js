import line from "../assets/bottom_line2.png";

export default function Headline({ headline }) {
  return (
    <div className="grid grid-col-1 grid-row-3 align-center justify-center">
      <h1 className="pt-28 tracking-[0.075em] font-bold uppercase text-center text-4xl">
        {headline}
      </h1>
      <img src={line} alt="line" className="pt-8 place-self-center" />
    </div>
  );
}
