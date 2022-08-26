export default function RecentPosts({ image, text, date }) {
  return (
    <div className="flex items-center">
      <img src={image} alt="recent blogpost" />
      <div className="md:pl-8">
        <p className="pb-5">{text}</p>
        <p className="text-[#ff2a70] "> {date}</p>
      </div>
    </div>
  );
}
