import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state w
  return (
    <div className="fixed top-0 w-full items-center flex justify-between  bg-gray-50 mb-1 p-2  border-2 border-b-3 shadow-md shadow-cyan-100 border-b-blue-300  ">
      <div>
        <h1 className="  text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-sky-400 to-indigo-800">
          Pradeep
        </h1>
      </div>

      <div className=" px-4  mr-4 flex  ">
        <div>
          <h1 className="text-xl hover:border-b-2 hover:border-b-blue-300 hover:text-blue-500  hidden lg:block font-semibold p-2 m-1">
            <a href="#">Home</a>
          </h1>
        </div>
        <div>
          <h1 className="text-xl hover:border-b-2 hover:border-b-blue-300 hover:text-blue-500  hidden lg:block font-semibold p-2 m-1">
            About <a onClick={(e)=>e.preventDefault()} href=".about"></a>
          </h1>
        </div>
        <div>
          <h1 className="text-xl hover:border-b-2 hover:border-b-blue-300 hover:text-blue-500  hidden lg:block font-semibold p-2 m-1">
            Skills
          </h1>
        </div>
        <div>
          <h1 className="text-xl hover:border-b-2 hover:border-b-blue-300 hover:text-blue-500  hidden lg:block font-semibold p-2 m-1">
            Projects
          </h1>
        </div>
        <div>
          <h1 className="text-xl hover:border-b-2 hover:border-b-blue-300 hover:text-blue-500  font-semibold hidden lg:block p-2 m-1">
            Contact
          </h1>
        </div>
      
      <div className="flex items-center justify-between border-b border-gray-400 ">
      {/* <a href="/">
        <img src="https://designbygio.it/images/logo.png" alt="logo" />
      </a> */}
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/about">About</a> <Link to={'/About'}>ok</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/portfolio">Portfolio</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>

       
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
      </div>
      </div>
    
  );
};

export default Navbar;
