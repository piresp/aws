import { postsByUsername } from "@/graphql/queries";
import { API, Auth } from "aws-amplify";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function MyPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const { username } = await Auth.currentAuthenticatedUser();
    const postData = await API.graphql({
      query: postsByUsername,
      variables: { username },
    });
    setPosts(postData.data.postsByUsername.items);
  }

  async function deletePost(id) {
    await API.graphql({
      query: deletePost,
      variables: { input: { id } },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
  }

  const style = {
    h1: "text-3xl font-semibold tracking-wide mt-6 mb-2",
    post: {
      div: "cursor-pointer border-b border-gray-300 mt-8 pb-4",
      title: "text-xl font-semibold",
      author: "text-gray-500 mt-2",
    },
  };

  return (
    <div>
      <h1 className={style.h1}>My Posts</h1>
      {posts.map((post, index) => (
        <Link key={index} href={`/posts/${post.id}`}>
          <div className={style.post.div}>
            <h2 className={style.post.title}>{post.title}</h2>
            <p className={style.post.author}>Author: {post.username}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
