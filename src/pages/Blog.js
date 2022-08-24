import axios from "axios";
import { useEffect, useState } from "react";

const SELECTED_BLOG_POST_ID = 3;

export default function Blog() {
  const [latestBlogPost, setLatestBlogPost] = useState();
  const [comments, setComments] = useState();

  useEffect(() => {
    const fetchBlogPosts = () => {
      axios
        .get(
          `${process.env.REACT_APP_NIGHTCLUB_APP_BASE_URL}/blogposts/${SELECTED_BLOG_POST_ID}`
        )
        .then((response) => {
          setLatestBlogPost(response.data);
        });
    };

    const fetchComments = () => {
      axios
        .get(
          `${process.env.REACT_APP_NIGHTCLUB_APP_BASE_URL}/blogposts/${SELECTED_BLOG_POST_ID}/comments`
        )
        .then((response) => {
          setComments(response.data);
        });
    };

    fetchBlogPosts();
    fetchComments();
  }, [setLatestBlogPost]);

  return (
    <section>
      <div>
        {latestBlogPost ? <div>Blog post id: {latestBlogPost.id}</div> : null}
      </div>

      <div>
        {comments
          ? comments.map((comment) => {
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
