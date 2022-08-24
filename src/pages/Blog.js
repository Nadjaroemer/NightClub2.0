import axios from "axios";
import { useEffect, useState } from "react";

const selectedBlogPostId = 1;

const arr = [1, 2, 3, 4, 5];
const filteredArr = arr.filter((element) => {
  if (element === 2 || element === 4) {
    return true;
  }
  return false;
});
console.log("filteredArr: ", filteredArr);

export default function Blog() {
  const [latestBlogPost, setLatestBlogPost] = useState();

  useEffect(() => {
    const fetchBlogPosts = () => {
      axios
        .get(
          `${process.env.REACT_APP_NIGHTCLUB_APP_BASE_URL}/blogposts/${selectedBlogPostId}`
        )
        .then((response) => {
          setLatestBlogPost(response.data);
        });
    };

    const fetchComments = () => {};

    fetchBlogPosts();
    fetchComments();
  }, [setLatestBlogPost]);

  return (
    <div>
      {latestBlogPost ? <div>Blog post id: {latestBlogPost.id}</div> : null}
    </div>
  );
}
