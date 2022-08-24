import axios from "axios";
import { useEffect, useState } from "react";

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState();

  useEffect(() => {
    const fetchBlogPosts = () => {
      axios
        .get(`${process.env.REACT_APP_NIGHTCLUB_APP_BASE_URL}/blogposts`)
        .then((response) => {
          setBlogPosts(response.data);
        });
    };
    fetchBlogPosts();
  }, [setBlogPosts]);

  return (
    <div>
      {blogPosts
        ? blogPosts.map((blogPost) => {
            return <div>Blog post id: {blogPost.id}</div>;
          })
        : null}
    </div>
  );
}
