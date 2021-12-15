import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";

export default function Misc() {
  return (
    <>
      <div className="mt-20 px-4">
        <h1 className="font-semibold text-xl text-clay">
          Technical blog recommendations:
        </h1>
        <div className="px-4">
          <ul className="list-disc">
            <li className="text-xl mt-2">
              <a
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                href="http://steve-yegge.blogspot.com/"
              >
                Steve Yegge's blog has some pretty entertaining tech-related
                rants
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

Misc.getLayout = function getLayout(page, keyFromAppJS) {
  return (
    <>
      <Header onPage={"misc"} key={keyFromAppJS} />
      {page}
    </>
  );
};
