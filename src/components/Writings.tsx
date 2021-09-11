import Link from "next/link";

export default function Writings() {
  return (
    <section className="my-5">
      <h2 className="my-4 text-xl font-bold">Latest Posts</h2>
      <ul className="list-inside list-disc">
        <li className="my-3">
          <Link href="/posts">
            <a className="font-semibold text-lg text-gray-700 hover:underline hover:text-green-400">📝 '21: Reset Otak</a>
          </Link>
        </li>
        <li className="my-3">
          <Link href="/posts">
            <a className="font-semibold text-lg text-gray-700 hover:underline hover:text-green-400">📝 '21: Banting Setir Part 1</a>
          </Link>
        </li>
      </ul>
    </section>
  );
}