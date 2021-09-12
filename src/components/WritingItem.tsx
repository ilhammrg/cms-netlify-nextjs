import Link from "next/link";
import { parseISO } from "date-fns";
import { PostContent } from "../lib/posts";
import Date from "./Date";

type Props = {
  post: PostContent,
}

export default function WritingItem({ post }: Props) {

  function setWritingIcon(tags: string[]) {
    if (tags.includes("article")) {
      return `📝`;
    } else if (tags.includes("document")) {
      return `📕`;
    } else if (tags.includes("projects")) {
      return `👨🏻‍💻`;
    } else if (tags.includes("works")) {
      return `👨🏻‍💻`;
    } else if (tags.includes("dev")) {
      return `🛠️`;
    } else {
      return `📝`;
    }
  }

  return (
    <li className="my-3">
      <Link href={`/posts/${post.slug}`}>
        <a 
          className="font-semibold text-lg text-gray-700 border-b-2 border-green-300 border-opacity-0 hover:border-opacity-100 hover:text-green-400"
          title={post.title}
        >
          {setWritingIcon(post.tags)} <Date date={parseISO(post.date)} />: {post.title}
        </a>
      </Link>
      <style jsx>{`
        a {
          width: fit-content;
          overflow: hidden !important;
          text-overflow: ellipsis !important;
          display: -webkit-box !important;
          -webkit-line-clamp: 1 !important;
          -webkit-box-orient: vertical !important;
        }
      `}</style>
    </li>
  );
}