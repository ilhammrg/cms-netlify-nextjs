import Head from "next/head";
import { useRouter } from "next/router";
// import Navigation from "./Navigation";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  const router = useRouter();

  const Navigation = () => {
    if (router.pathname.startsWith("/posts")) {
      return (
        <nav className="">
          <button 
            onClick={() => router.back()}
            className="bg-white shadow hover:shadow-md px-4 py-1 font-semibold rounded text-sm text-gray-500"
            title="Go back"
          >
            ⬅️ Back
          </button>
          <style jsx>{`
            nav {
              position: sticky;
              top: 0;
              padding: 1rem;
              z-index: 100;
            }

            nav button {
              transition: background-color 0.1s ease;
            }

            @media (min-width: 769px) {
              nav {
                margin: 0 auto;
                width: 720px;
              }
            }
          `}</style>
        </nav>
      );
    } else {
      return null;
    }
  }

  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      </Head>
      <Navigation />
      <main>{children}</main>
      <Footer />
      <style jsx>{`
          .root {
            /* display: block; */
            display: grid;
            grid-template-rows: 1fr auto;
            padding: 2.75rem 0.5rem 1rem 0.5rem;
            box-sizing: border-box;
            /* height: 100%; */
            min-height: 100vh;
          }
          main {
            display: flex;
            min-height: 100%;
          }
          @media (min-width: 769px) {
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
      `}</style>
    </div>
  );
}
