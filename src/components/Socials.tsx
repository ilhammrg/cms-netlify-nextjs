export default function Socials() {
  return (
    <ul className="mb-3">
      <li className="inline-block">
        <a className="mr-1 font-semibold text-green-400" href="https://twitter.com/ilmuhammadrg" target="_blank">Twitter</a>{"|"}
      </li>
      <li className="inline-block">
        <a className="mx-1 font-semibold text-green-400" href="https://linkedin.com/in/ilham-gunawan" target="_blank">LinkedIn</a>{"|"}
      </li>
      <li className="inline-block">
        <a className="ml-1 font-semibold text-green-400" href="https://github.com/ilhammrg" target="_blank">GitHub</a>
      </li>
      <style jsx>
        {`
          a:hover {
            opacity: 0.7;
          }
        `}
      </style>
    </ul>
  );
}