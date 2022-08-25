import blogPostImage from "../assets/content-img/blog_full3.jpg";

export default function Blog(props) {
  return (
    <section className="flex flex-col pl-8 pr-8 md:pt-48 md:pl-48 md:pr-48">
      <img src={blogPostImage} alt="Blogpost"className="pt-8 pb-8"/>
      <div>
        {props.latestBlogPost ? <h1 key={props.latestBlogPost.id} className="uppercase text-xl md:text-2xl">{props.latestBlogPost.title}</h1> : null}
        <div className="flex flex-wrap text-[#ff2a70] text-xl"><p className="uppercase">by: </p> {props.latestBlogPost.author}<p> /3 comments/</p><p>16 Nov 2018</p></div>
        <div className="pt-2 md:pt-5 text-sm md:text-lg">{props.latestBlogPost.content}</div>
      </div>

      <div>
        {props.comments
          ? props.comments.map((comment) => {
              return (
                <div>
                  <div key={comment}>here is an image</div>
                  {comment.content}
                </div>
              );
            })
          : null}
      </div>
    </section>
  );
}
