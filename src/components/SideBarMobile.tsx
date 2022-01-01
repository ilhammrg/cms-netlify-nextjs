import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { PostByYear } from "../lib/posts";

const DirectoryItem = (prop: { post: PostByYear }) => {
  const router = useRouter();
  const [isCollapse, setIsCollapse] = useState(false);
  function collapse() {
    setIsCollapse(!isCollapse);
  }

  useEffect(() => {
    const findPost = prop.post.posts.find(
      (item) => item.slug === router.query.post
    );
    if (findPost) {
      setIsCollapse(true);
    } else {
      setIsCollapse(false);
    }
  }, [prop.post.year, router]);

  return (
    <li>
      <button onClick={collapse} className='directory-item-parent'>
        {isCollapse ? "📂 " : "📁 "}
        {prop.post.year}
      </button>
      <ul
        className='child-list'
        style={{
          display: isCollapse ? "block" : "none",
        }}
      >
        {prop.post.posts.map((item, index) => {
          return (
            <li key={index}>
              <Link href={`/posts/${item.slug}`}>
                <a
                  className={`directory-item-link ${
                    router.query.post === item.slug ? "active" : ""
                  }`}
                  title={item.title}
                >
                  {"📝 "}
                  {item.title}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
      <style jsx>
        {`
          .active {
            background-color: rgba(52, 211, 153, 0.2);
          }

          .directory-item-parent {
            cursor: pointer;
            color: #222;
            font-size: 1.1rem;
            font-weight: 700;
            padding: 2px 8px;
            margin-bottom: 5px;
            border-radius: 7.5px;
            transition: 0.05s;
          }

          .directory-item-parent:hover {
            background-color: #eeecec;
          }

          .child-list {
            padding-left: 10px;
          }

          .child-list li {
            margin-bottom: 5px;
          }

          .directory-item-link {
            cursor: pointer;
            color: #222;
            font-size: 1rem;
            font-weight: 600;
            padding: 2px 8px;
            border-radius: 7.5px;
            transition: 0.05s;
            width: fit-content;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
            display: -webkit-box !important;
            -webkit-line-clamp: 1 !important;
            -webkit-box-orient: vertical !important;
          }

          .directory-item-link:hover {
            background-color: #eeecec;
          }
        `}
      </style>
    </li>
  );
};

export default function SideBarDesktop(prop: {
  postsByYear: PostByYear[];
  setShowFolder;
}) {
  const router = useRouter();

  if (router.pathname.startsWith("/posts")) {
    return (
      <>
        <aside className='container'>
          <button
            onClick={() => prop.setShowFolder(false)}
            className='mobile-folder'
          >
            {"❎"}
          </button>
          <div className='header'>
            <Link href='/'>
              <a className='header-link'>🏠 Home</a>
            </Link>
          </div>
          <div className='directory'>
            <nav className='directory-nav'>
              <ul>
                {prop.postsByYear.map((item, index) => (
                  <DirectoryItem key={index} post={item} />
                ))}
              </ul>
            </nav>
          </div>
        </aside>
        <style jsx>
          {`
            .container {
              display: block;
              position: fixed;
              top: 0;
              right: 0;
              left: 0;
              bottom: 0;
              padding: 15px;
              // width: 100vw;
              // height: 100%;
              background-color: rgb(249, 250, 251);
            }

            .mobile-folder {
              display: block;
              position: fixed;
              right: 10px;
              top: 10px;
              font-size: 1.2rem;
              padding: 5px;
            }

            .header {
              margin-bottom: 0.3rem;
            }

            .header-link {
              color: #222;
              font-size: 1.1rem;
              font-weight: 700;
              padding: 1.5px 11px;
              border-radius: 7.5px;
              transition: 0.05s;
            }

            .header-link:hover {
              background-color: #eeecec;
            }

            .directory {
              padding: 0.2rem;
            }

            .directory-title {
              color: #444;
              font-size: 0.6rem;
              font-weight: 600;
            }

            @media screen and (min-width: 1024px) {
              .container {
                display: none;
              }
            }
          `}
        </style>
      </>
    );
  } else {
    return null;
  }
}
