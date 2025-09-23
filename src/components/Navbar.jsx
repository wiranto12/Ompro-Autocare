import React from "react";
import Logo from "../../src/assets/img/Logo.png";

const Navbar = () => {
  return (
    <header className="bg-blue-950 bottom-6 shadow-md z-10">
      <div className=" mx-auto flex h-16 max-w-screen-4xl items-center gap-8 px-10 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center justify-between md:justify-between text-white">
          <a class="block" href="/">
            <span class="sr-only">Home</span>
            <img src={Logo} alt="Ompro-Logo" className="w-28" />
          </a>

          <button class="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 lg:hidden ">
            <span class="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="hidden lg:flex flex-row justify-end space-x-16 font-medium text-sm ">
            <a href="/">Produk Kami</a>
            <a href="/">Tentang Kami</a>
            <a href="/">E-Commers</a>
            <a href="/">Artikel</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
