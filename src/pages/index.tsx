import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import Socials from "../components/Socials";
import Writings from "../components/Writings";
import { listPostContent, PostContent } from "../lib/posts";

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent(1, 10);
  return {
    props: {
      posts,
    },
  };
};

type Props = {
  posts: PostContent[],
}

export default function Index({ posts }: Props) {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="flex flex-col justify-start items-start py-5 md:py-16 px-4">
        <section className="flex flex-col justify-start items-start">
          <h1 className="typewriter font-bold text-3xl mb-3 mx-0 pr-1">Hi, I'm Ilham 👋🏻</h1>
          <Socials />
          <p className="font-light text-2xl">I made this website to post my writings, document my projects, also other boring stuff that you might won't be interested :)</p>
        </section>
        <Writings posts={posts} />
      </div>
      <style jsx>{`
        .typewriter {
          overflow: hidden; /* Ensures the content is not revealed until the animation */
          border-right: .15em solid #2c3e50; /* The typwriter cursor */
          white-space: nowrap; /* Keeps the content on a single line */
          animation: 
            typing 3.5s steps(40, end),
            blink-caret .75s step-end infinite;
        }

        /* The typing effect */
        @keyframes typing {
          from { width: 0 }
          to { width: 230px }
        }

        /* The typewriter cursor effect */
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #2c3e50; }
        }
      `}</style>
    </Layout>
  );
}
