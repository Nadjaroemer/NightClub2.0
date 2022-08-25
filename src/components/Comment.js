import commentImage from "../assets/content-img/testimonial_2.jpg";
export default function Comment(props) {
  return (
    <div className="flex items-center">
      <img src={commentImage} alt="recent blogpost" />
      <div className="pl-8">
        <div>
          <p className="pb-5">{props.comments.name}</p>
          <p className="text-[#ff2a70] "> {props.comments.date}</p>
        </div>
      </div>
      <p>{props.comments.content}</p>
    </div>
  );
}
