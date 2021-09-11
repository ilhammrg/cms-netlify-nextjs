import Head from "next/head";
import Navigation from "./Navigation";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
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
      {/* <nav>
        <Navigation />
      </nav> */}
      <main>{children}</main>
      <style jsx>
        {`
          .root {
            display: block;
            padding: 4rem 0;
            box-sizing: border-box;
            height: 100%;
          }
          main {
            display: flex;
            min-height: 100%;
          }
          @media (min-width: 769px) {
            .root {
              display: grid;
              grid-template-column: auto 1fr auto;
            }
            main {
              margin: 0 auto;
              /* flex: 1 0 auto; */
              width: 720px;
            }
          }
        `}
      </style>
    </div>
  );
}
