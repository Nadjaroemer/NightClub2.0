import blogPostImage from "../assets/content-img/blog_full3.jpg";
import commentImage from "../assets/content-img/testimonial_1.jpg";
import Headline from "../components/Headline";

export default function Blog(props) {
  return (
    <>
      <Headline headline="Blog Post" />
      <section className="flex flex-col pl-8 pr-8 md:pt-48 md:pl-48 md:pr-48">
        <img src={blogPostImage} alt="Blogpost" className="pt-8 pb-8" />
        {props.latestBlogPost ? (
          <div>
            <h1
              key={props.latestBlogPost.id}
              className="uppercase text-xl md:text-2xl"
            >
              {props.latestBlogPost.title}
            </h1>
            <div className="flex flex-wrap text-[#ff2a70] text-xl">
              <p className="uppercase">by: </p> {props.latestBlogPost.author}
              <p> /3 comments/</p>
              <p>16 Nov 2018</p>
            </div>
            <div className="pt-2 md:pt-5 text-sm md:text-lg">
              {props.latestBlogPost.content}
            </div>
          </div>
        ) : null}

        <div>
          <h2 className="uppercase text-xl md:text-4xl pt-8 md:pt-16">
            3 Comments
          </h2>
          {props.comments
            ? props.comments.map((comment) => {
                return (
                  <div key={comment.name} className="flex pt-5 md:pt-10 ">
                    <img src={commentImage} alt="comment" />
                    <div className="pl-8">
                      <div className="flex">
                        <p className="pb-5">
                          {props.comments.name}
                          {comment.name}
                        </p>
                        <p className="text-[#ff2a70] pl-2 md:pl-5 ">
                          {props.comments.date}
                          {comment.date}
                        </p>
                      </div>
                      <p>
                        {props.comments.content}
                        {comment.content}
                      </p>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
        <h2 className="uppercase text-xl md:text-4xl pt-8 md:pt-24">
          leave a comment
        </h2>
        <section className="md:pt-14">
          <form className="grid grid-cols-2 grid-rows-3 gap-8 ">
            <input
              className="border-2 p-2 bg-transparent md:h-20"
              type="text"
              placeholder="Your Name"
            ></input>
            <input
              className="border-2 p-2 bg-transparent md:h-20"
              placeholder="Your Email"
            ></input>
            <textarea
              className="border-2 p-2 bg-transparent col-span-2"
              placeholder="Comment"
            ></textarea>
            <button className="col-start-2 col-end-3 place-self-end p{t/b}-{10px} pl-8 pr-8 bg-transparent border-white uppercase border-y-4">
              Submit
            </button>
          </form>
        </section>
      </section>
    </>
  );
}
