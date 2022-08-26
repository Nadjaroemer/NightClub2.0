export default function BlogPost({
  image,
  headline,
  author,
  comments,
  date,
  text,
}) {
  return (
    <div className="pl-8 pt-14">
      <img src={image} alt="blog post" />
      <h2 className="uppercase text-2xl pt-8 pb-4">{headline}</h2>
      <div className="flex text-[#ff2a70] text-l pb-6">
        <p className="uppercase ">by:</p>
        <p>{author}/</p>
        <p>{comments}/</p>
        <p>{date}</p>
      </div>
      <p className="text-xl">{text}</p>
    </div>
  );
}
