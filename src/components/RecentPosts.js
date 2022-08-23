export default function RecentPosts({ image, text, date }) {
  return (
    <div className="flex items-center">
      <img src={image} alt="recent blogpost" />
      <div className="pl-8">
        <p className="pb-5">{text}</p>
        <p>{date}</p>
      </div>
    </div>
  );
}
