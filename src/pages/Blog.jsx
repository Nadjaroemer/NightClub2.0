export default function Blog(props) {
  return (
    <section>
      <div>
        {props.latestBlogPost ? <div key={props.latestBlogPost.id}>Blog post id: {props.latestBlogPost.id}</div> : null}
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
