import { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { listPosts } from "@/graphql/queries";
import Link from "next/link";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const postData = await API.graphql({
      query: listPosts,
    });
    setPosts(postData.data.listPosts.items);
  }

  const style = {
    title: "text-sky-400 text-3xl font-bold tracking-wide mt-6 mb-2",
    post: {
      div: "cursor-pointer border-b border-gray-300 mt-8 pb-4",
      title: "text-xl font-semibold",
      username: "text-gray-500 mt-2",
    },
  };

  return (
    <div>
      <h1 className={style.title}>Home</h1>
      {posts.map((post, index) => (
        <Link key={index} href={`/posts/${post.id}`}>
          <div className={style.post.div}>
            <h2 className={style.post.title} key={index}>
              {post.title}
            </h2>
            <p className={style.post.username} key={index}>
              Author: {post.username}
            </p>
            {/*<p key={index}>{post.content}</p>*/}
          </div>
        </Link>
      ))}
    </div>
  );
}
