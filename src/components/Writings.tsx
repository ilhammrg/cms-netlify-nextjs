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
      <ul className="list-outside list-disc ml-4">
        {posts.map((post, index) => <WritingItem key={index} post={post} />)}
        {/* <li className="my-3">
          <Link href="/posts">
            <a className="font-semibold text-lg text-gray-700 hover:underline hover:text-green-400">📝 '21: Reset Otak</a>
          </Link>
        </li>
        <li className="my-3">
          <Link href="/posts">
            <a className="font-semibold text-lg text-gray-700 hover:underline hover:text-green-400">📝 '21: Banting Setir Part 1</a>
          </Link>
        </li> */}
      </ul>
    </section>
  );
}