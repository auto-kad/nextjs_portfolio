import Header from "../components/Header";

export default function Projects() {
  return (
    <>
      <div className="mt-20 px-4">
        <h1 className="font-semibold text-xl text-clay">Projects</h1>
        <div className="px-4">
          <ul className="list-disc">
            <li className="text-xl">
              Venture: Project made during the 2021 CTP Hackathon. Was made to
              address the theme of helping to transition to pre-pandemic life.
              It lets you find nearby events, such as concerts, festivals, and
              more. nearby events.
              <ul className="list-disc ml-10">
                <li>
                  Won Overall Winner, Best SWE Practices, Best Back-End awards.
                </li>
                <li>
                  <a
                    className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                    href="https://devpost.com/software/venture-4pmz9x"
                  >
                    Project posting on DevPost
                  </a>
                </li>
              </ul>
            </li>
            <li className="text-xl mt-2">
              TabbyStash: Web app integrated with Google Chrome Extension. Lets
              you save tabs in your browser window and store them in a web app
              to view later, by using the extension.
              <ul className="list-disc ml-10">
                <li>Being built with Next.js, Flask, and PostgreSQL</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

Projects.getLayout = function getLayout(page, keyFromAppJS) {
  return (
    <>
      <Header onPage={"projects"} key={keyFromAppJS} />
      {page}
    </>
  );
};
