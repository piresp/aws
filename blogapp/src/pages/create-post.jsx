import { withAuthenticator } from "@aws-amplify/ui-react";
import { useState, useRef, React } from "react";
import { API } from "aws-amplify";
import { useRouter } from "next/router";
import { v4 as uuid } from "uuid";
import { createPost } from "@/graphql/mutations";

import dynamic from "next/dynamic";
const SimpleMde = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

import "easymde/dist/easymde.min.css";

const initialState = { title: "", content: "" };
function CreatePost() {
  const [post, setPost] = useState(initialState);
  const { title, content } = post;
  const router = useRouter();

  function onChange(e) {
    setPost(() => ({
      ...post,
      [e.target.name]: e.target.value,
    }));
  }

  async function createNewPost() {
    if (!title || !content) return;
    const id = uuid();
    post.id = id;

    await API.graphql({
      query: createPost,
      variables: { input: post },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    router.push(`/posts/${id}`)
  }

  const style = {
    title: "text-3xl font-semibold tracking-wide mt-6",
    input:
      "border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2",
    button: "mb-4 bg-blue-600 text-white font-semibold px-8 py-2 rounded-lg",
  };

  return (
    <div>
      <h1 className={style.title}>Create new Post</h1>
      <input
        onChange={onChange}
        name="title"
        placeholder="Title"
        value={post.title}
        className={style.input}
      />
      <SimpleMde
        value={post.content}
        onChange={(value) => setPost({ ...post, content: value })}
      />
      <button type="button" className={style.button} onClick={createNewPost}>
        Create Post
      </button>
    </div>
  );
}

export default withAuthenticator(CreatePost);
