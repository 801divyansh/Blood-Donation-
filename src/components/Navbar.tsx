"use client";
import React, { useEffect, useState } from "react";
import { MdBloodtype } from "react-icons/md";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs"; // Updated import for useUser
import { Button } from "./ui/button";
import { BiDonateBlood } from "react-icons/bi";

const Sidebar = ({ isVisible, closeSidebar }: any) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-70 transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed left-0 top-0 w-80 bg-white dark:bg-gray-800 h-full shadow-xl z-50 transform transition-transform ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-5 flex justify-between items-center border-b">
            <Link href="/" className="text-red-600">
              <BiDonateBlood size={30} />
            </Link>
            <button onClick={closeSidebar}>
              <svg
                className="w-6 h-6 text-gray-600 hover:text-red-600 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="flex-1 p-5">
            <ul>
              <li className="mb-3 hover:text-red-600 transition-colors">
                <Link href="/FindBlood">Locate Blood</Link>
              </li>
              <li className="mb-3 hover:text-red-600 transition-colors">
                <Link href="/DonorForm">Donor Registration</Link>
              </li>
              <li className="mb-3 hover:text-red-600 transition-colors">
                <Link href="/OrgForm">Organization Registration</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const { isLoaded, isSignedIn, user } = useUser(); // Use useUser to get user details
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <>
      <nav className="sticky top-0 p-4 flex items-center justify-between bg-white dark:bg-gray-900 shadow-lg z-50">
        <div className="flex items-center p-2 border border-red-600 rounded-full">
          <Link href="/" className="text-red-600">
            <MdBloodtype size={30} />
          </Link>
        </div>
        {screenWidth <= 768 && isSignedIn && (
          <button
            className="text-red-600 focus:outline-none"
            onClick={toggleSidebar}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  sidebarVisible
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        )}
        {screenWidth > 768 && isSignedIn && (
          <div>
            <ul className="flex space-x-6">
              <li className="hover:text-red-600 transition-colors">
                <Link href="/FindBlood">Locate Blood</Link>
              </li>
              <li className="hover:text-red-600 transition-colors">
                <Link href="/DonorForm">Donor Registration</Link>
              </li>
              <li className="hover:text-red-600 transition-colors">
                <Link href="/OrgForm">Organization Registration</Link>
              </li>
            </ul>
          </div>
        )}

        <div className="flex items-center space-x-5">
          {!isSignedIn ? (
            <>
              <Link href="/sign-up">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-600 border-red-600"
                >
                  Sign Up
                </Button>
              </Link>
              <Link href="/sign-in">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-600 border-red-600"
                >
                  Sign In
                </Button>
              </Link>
            </>
          ) : (
            <div className="flex items-center space-x-2">
              <span className="text-red-600">Hello, {user?.firstName}!</span>
              <UserButton afterSignOutUrl="/" />
            </div>
          )}
        </div>
      </nav>
      {screenWidth <= 768 && (
        <Sidebar isVisible={sidebarVisible} closeSidebar={closeSidebar} />
      )}
    </>
  );
};

export default Navbar;
