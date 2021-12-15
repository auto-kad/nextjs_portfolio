import Header from "../components/Header";

export default function Experience() {
  return (
    <>
      <div className="mt-20 px-4">
        <h1 className="font-semibold text-xl text-clay">
          A look into my technical experiences:
        </h1>
        <div className="px-4">
          <ul className="list-disc">
            <li className="text-xl mt-2">
              I interned at Northwell Health and worked on updating internal
              security protocols, and did some PHP programming as well
            </li>
            <li className="text-xl mt-2">
              Currently a part of CTP (CUNY Tech Prep), a fullstack training
              program to learn all about web programming
            </li>
            <li className="text-xl mt-2">
              Participated in CodePath's Cybersecurity program and learned about
              the fundamentals of cybersecurity
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

Experience.getLayout = function getLayout(page, keyFromAppJS) {
  return (
    <>
      <Header onPage={"experience"} key={keyFromAppJS} />
      {page}
    </>
  );
};
