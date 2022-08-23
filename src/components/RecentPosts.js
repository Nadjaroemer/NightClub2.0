export default function ResentPosts({ image, text, date }) {
  return (
    <div className="flex">
      <img src={image} alt="recent blogpost" />
      <div>
        <p>{text}</p>
        <p>{date}</p>
      </div>
    </div>
  );
}
