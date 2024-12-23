"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, User } from "lucide-react";

import menuData from "../../datatest/menuItems.json";
const menuItems = menuData.menuItems;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Added state for dropdown menu
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Dummy state for demonstration
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-800">
                Logo
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  pathname === item.href
                    ? "border-indigo-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center relative">
            {" "}
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out"
            >
              <User className="mr-2 h-4 w-4" />
              ข้อมูลสมาชิก
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            {isDropdownOpen && (
              <div className=" absolute right-0 mt-[9.5rem] w-48 rounded-md shadow-lg">
                <div className="py-1 bg-white rounded-md shadow-xs relative">
                  <button
                    onClick={() => setIsDropdownOpen(false)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                    aria-label="Close menu"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {isLoggedIn ? (
                    <>
                      <div className="px-4 py-2">
                        <p className="text-sm font-medium text-gray-900">
                          ชื่อผู้ใช้
                        </p>
                        <p className="text-sm text-gray-500">
                          email@example.com
                        </p>
                      </div>
                      <button
                        onClick={() => setIsLoggedIn(false)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        ออกจากระบบ
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => setIsLoggedIn(true)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        เข้าสู่ระบบ
                      </button>
                      <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        สมัครสมาชิก
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  pathname === item.href
                    ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <User className="h-10 w-10 text-gray-400" />
              </div>
              <div className="ml-3">
                {isLoggedIn ? (
                  <>
                    <div className="text-base font-medium text-gray-800">
                      ชื่อผู้ใช้
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      email@example.com
                    </div>
                  </>
                ) : (
                  <div className="text-base font-medium text-gray-800">
                    ข้อมูลสมาชิก
                  </div>
                )}
              </div>
            </div>
            <div className="mt-3 space-y-1">
              {isLoggedIn ? (
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  ออกจากระบบ
                </button>
              ) : (
                <>
                  <button
                    onClick={() => setIsLoggedIn(true)}
                    className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  >
                    เข้าสู่ระบบ
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
                    สมัครสมาชิก
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
