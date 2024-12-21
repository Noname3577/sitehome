"use client";

import Link from "next/link";
import React, { useState } from "react";

function Header_top() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="flex border-b py-4 px-4 sm:px-10 bg-white font-sans min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center gap-4 w-full max-w-6xl mx-auto">
        <a href="javascript:void(0)" className="max-sm:hidden">
          <img
            src="https://placehold.co/1200x300"
            alt="logo"
            className="w-36"
          />
        </a>
        <a href="javascript:void(0)" className="hidden max-sm:block">
          <img
            src="https://readymadeui.com/readymadeui-short.svg"
            alt="logo"
            className="w-9"
          />
        </a>

        <div
          id="collapseMenu"
          className={`lg:!flex lg:flex-auto lg:ml-12 ${  } max-lg:hidden max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}
        >
          <button
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
          </button>

          <div className="lg:flex lg:flex-auto max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <ul className="lg:flex lg:gap-x-8 max-lg:space-y-2">
              <li className="mb-6 hidden max-lg:block">
                <a href="javascript:void(0)">
                  <img
                    src="https://readymadeui.com/readymadeui.svg"
                    alt="logo"
                    className="w-36"
                  />
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <Link
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] text-[#007bff] block font-bold text-[15px] underline"
                >
                  หน้าแรก
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <Link
                  href="javascript:void(0)"
                  className="text-gray-600 block font-bold text-[15px] hover:text-[#007bff] hover:underline"
                >
                  คอร์สเรียน
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <Link
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] hover:underline text-gray-600 block font-bold text-[15px]"
                >
                  คู่มือ
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <Link
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] hover:underline text-gray-600 block font-bold text-[15px]"
                >
                  blog
                </Link>
              </li>
            </ul>

            <ul className="lg:flex lg:items-center ml-auto max-lg:block lg:space-x-8">
              <li className="max-lg:border-b max-lg:py-3 max-lg:mt-2">
                <Link
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] hover:underline text-gray-600 block font-bold text-[15px]"
                >
                  เกี่ยวกับ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-l border-[#333] h-6 max-lg:hidden"></div>

        <div className="flex items-center ml-auto space-x-4">
          <Link
            href="javascript:void(0)"
            className="hover:text-[#007bff] hover:underline text-gray-600 block font-bold text-[15px]"
          >
            เข้าสู่ระบบ
          </Link>
          <Link href="javascript:void(0)">
            <button className="px-4 py-2 text-sm rounded font-semibold text-white border-2 border-[#1d294f] bg-[#1d294f] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#1d294f]">
              สมัครสมาชิก
            </button>
          </Link>

          <button id="toggleOpen" className="lg:hidden" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 50 50"
            >
              <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header_top;
