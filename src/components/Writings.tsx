// import Link from "next/link";
import { PostContent } from "../lib/posts";
import WritingItem from "./WritingItem";

type Props = {
  posts: PostContent[],
}

export default function Writings({ posts }: Props) {
  return (
    <section className="my-5">
      <h2 className="my-4 text-xl font-bold">Latest Posts</h2>
      <ul className="list-outside list-disc ml-4 mb-8">
        {posts.map((post, index) => <WritingItem key={index} post={post} />)}
      </ul>
      {/* <Link href="/posts">
        <a className="font-semibold text-green-400 border-b-2 border-green-300 border-opacity-0 hover:border-opacity-100 hover:opacity-70">
          See All posts 📜
        </a>
      </Link> */}
    </section>
  );
}