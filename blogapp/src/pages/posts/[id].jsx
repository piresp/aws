import { API } from "aws-amplify";
import { useRouter } from "next/router";
import reactMarkdown from "react-markdown";
import "../../../configureAmplify";
import { listPosts, getPost } from "@/graphql/queries";

export default function Post({ post }) {
  const router = useRouter();

  const style = {
    title: "text-5xl mt-4 font-semibold tracing-wide",
    username: "text-sm font-light my-4",
    div: {
      content: "mt-8"
    }
  };

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className={style.title}>{post.title}</h1>
      <p className={style.username}>By {post.username}</p>
      <div className={style.div.content}>
        <p reactMarkdown="prose">{post.content}</p>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const postData = await API.graphql({
    query: listPosts,
  });

  const paths = postData.data.listPosts.items.map((post) => ({
    params: {
      id: post.id,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const postData = await API.graphql({
    query: getPost,
    variables: { id },
  });

  return {
    props: {
      post: postData.data.getPost,
    },
    revalidate: 1,
  };
}
