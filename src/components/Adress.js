import logo from "../assets/Logo.png";

export default function Adress() {
  return (
    <div>
      <img src={logo} alt="nightclub logo" className="pb-8" />

      <h2 className="uppercase text-[#ff2a70]">Location</h2>
      <p className="pb-8">
        PO Box 16122 Collins Street West victoria 8007 Australia
      </p>

      <h2 className="uppercase text-[#ff2a70]">Opening hours</h2>
      <p className="pb-8">
        PO Box 16122 Collins Street West victoria 8007 Australia
      </p>

      <h2 className="uppercase text-[#ff2a70]">LOCATION</h2>
      <p className="uppercase">Mon-Fri 2 pm to 06 pm</p>
    </div>
  );
}
