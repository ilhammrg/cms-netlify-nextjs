import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import SideBarDesktop from "./SideBarDesktop";
import SideBarMobile from "./SideBarMobile";
import { PostByYear } from "../lib/posts";
import React, { useState, useEffect } from "react";

type Props = {
  postsByYear?: PostByYear[];
  children: React.ReactNode;
};
export default function Layout({ postsByYear, children }: Props) {
  const router = useRouter();
  const [showFolder, setShowFolder] = useState(false);

  useEffect(() => {
    setShowFolder(false);
  }, [router]);

  return (
    <div className='root'>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='apple-touch-icon' href='/icon.png' />
        <meta name='theme-color' content='#fff' />
        <script src='https://identity.netlify.com/v1/netlify-identity-widget.js' />
      </Head>
      <main>{children}</main>
      <SideBarDesktop postsByYear={postsByYear} />
      {router.pathname === "/" ? null : (
        <button
          onClick={() => setShowFolder(!showFolder)}
          className='mobile-folder'
        >
          {"📁"}
        </button>
      )}
      {showFolder ? (
        <SideBarMobile
          postsByYear={postsByYear}
          setShowFolder={setShowFolder}
        />
      ) : null}
      <Footer />
      <style jsx>{`
        .root {
          /* display: block; */
          display: grid;
          grid-template-rows: 1fr auto;
          padding: 1rem 0.5rem 1rem 0.5rem;
          box-sizing: border-box;
          /* height: 100%; */
          min-height: 100vh;
        }
        main {
          display: flex;
          min-height: 100%;
        }
        .mobile-folder {
          display: block;
          position: fixed;
          right: 10px;
          top: 10px;
          font-size: 1.2rem;
          padding: 5px;
        }
        @media (min-width: 768px) {
          .root {
            /* display: grid;
              grid-template-column: auto 1fr auto; */
            padding: 0rem 0 1.5rem 0;
          }
          main {
            margin: 0 auto;
            /* flex: 1 0 auto; */
            width: 720px;
          }
        }
        @media (min-width: 1024px) {
          .mobile-folder {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
