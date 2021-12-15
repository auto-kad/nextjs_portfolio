import Link from "next/link";

const Header = (props) => {
  return (
    <>
      <header className="mt-5 sm:flex sm:space-between ">
        <nav className="mx-3 py-1 sm:block">
          <ul className="pt-1 sm:flex">
            <li>
              <Link href="/">
                <a
                  className={
                    (props.onPage == "index" ? "hidden " : "") +
                    "px-2 block font-semibold text-xl hover:bg-gray-300"
                  }
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/experience">
                <a
                  className={
                    (props.onPage == "experience" ? "hidden " : "") +
                    "px-2 block font-semibold text-xl hover:bg-gray-300"
                  }
                >
                  Professional experiences
                </a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a
                  className={
                    (props.onPage == "projects" ? "hidden " : "") +
                    "px-2 block font-semibold text-xl hover:bg-gray-300"
                  }
                >
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <Link href="/misc">
                <a
                  className={
                    (props.onPage == "misc" ? "hidden " : "") +
                    "px-2 block font-semibold text-xl hover:bg-gray-300"
                  }
                >
                  Miscellaneous
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
