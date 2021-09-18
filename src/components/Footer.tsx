export default function Footer() {
  return (
    <footer className="px-4 my-5">
      <p className="font-normal text-gray-400">
        {"Powered by  "}
        <a className="font-semibold text-gray-500 hover:text-black" href="https://nextjs.org" target="_blank" referrerPolicy="no-referrer">Next.js</a> 
        {" & "}
        <a className="font-semibold text-gray-500 hover:text-black" href="https://netlifycms.org" target="_blank" referrerPolicy="no-referrer">Netlify CMS</a>
      </p>
      <style jsx>{`
        @media (min-width: 769px) {
          footer {
            margin: 0 auto;
            width: 720px;
          }
        }
      `}</style>
    </footer>
  );
}