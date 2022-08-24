export default function Blog(props) {
  return (
    <section>
      <div>
        {props.latestBlogPost ? <div>Blog post id: {props.latestBlogPost.id}</div> : null}
      </div>

      <div>
        {props.comments
          ? props.comments.map((comment) => {
              return (
                <div>
                  <div>here is an image</div>
                  {comment.content}
                </div>
              );
            })
          : null}
      </div>
    </section>
  );
}
