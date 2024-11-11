// * Node module
import { useState } from "react";

// * Components
import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 w-full h-20 flex items-center border-b border-zinc-600 bg-white dark:bg-zinc-900 dark:border-zinc-400 z-40 dark:bg-gradient-to-b dark:from-zinc-900 dark:to-zinc-900/0 
     "
    >
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr] lg:grid-cols-[1fr,2fr]">
        <h1>
          <a href="/" className="logo">
            <img
              src="/images/light-Logo.svg"
              width={40}
              height={40}
              alt="Sohan Singh"
              className="bg-white "
            />
          </a>
        </h1>

        <div className="flex items-center justify-between gap-3 flex-row-reverse md:flex-row">
          <div className="relative md:justify-self-center flex items-center gap-4">
            <button
              className="menu-btn md:hidden"
              onClick={() => {
                setNavOpen((prevState) => !prevState);
              }}
            >
              <span className="material-symbols-rounded">
                {navOpen ? "close" : "menu"}
              </span>
            </button>
            <Navbar navOpen={navOpen} />
          </div>

          <div className="relative md:justify-self-end md:flex md:items-center md:gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="btn btn-secondary max-md:hidden md:justify-self-end"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
