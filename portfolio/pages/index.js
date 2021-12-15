import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";

export default function Index() {
  return (
    <>
      <HomeContent />
      {/* <div className="ml-5">
        <img src="https://img.icons8.com/ios-filled/50/000000/laptop.png" />
      </div> */}
      <h1 className=" px-2 py-2 text-xl font-semibold text-clay">
        Nice to meet you!
      </h1>
      <h1 className=" px-2 py-2 text-lg font-semibold">
        I'm currently a Computer Science undergraduate at Queens College in NYC.
      </h1>
      <h1 className=" px-2 py-2 text-lg font-semibold">
        I've always tried getting out of my comfort zone as an undergraduate. As
        a result, I've had many different technical experiences, and as a result
        I have a diverse skillset.
      </h1>
      <h1 className=" px-2 py-2 text-lg font-semibold">
        Programming Languages: Java, Python, C++, JavaScript Frameworks: Flask,
        Next.js, React
      </h1>
    </>
  );
}

Index.getLayout = function getLayout(page, keyFromAppJS) {
  return (
    <>
      <Header onPage={"index"} key={keyFromAppJS} />
      {page}
    </>
  );
};
