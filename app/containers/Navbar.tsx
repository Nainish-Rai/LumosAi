"use client";
import React, { useState, useEffect } from "react";
import { ModeToggle } from "../components/ModeToggle";
import Searchbar from "../components/Searchbar";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {};

function Navbar({}: Props) {
  const path = usePathname();
  console.log(path);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY <= 25) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  useEffect(() => {
    changeNavbarColor();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeNavbarColor);
  });
  return (
    <nav
      className={` ${
        colorChange
          ? "h-16 border-b-0"
          : "h-fit  border-b border-b-white/20 p-2 bg-background/60 backdrop-blur-lg shadow-lg"
      } duration-150 fixed z-30 w-full top-0  `}
    >
      <div className="flex justify-between h-full items-center mx-auto px-5 w-full max-w-6xl">
        <div className="flex w-full -ml-32 gap-5">
          {path != "/" && (
            <Link href={"/"}>
              {" "}
              <h1 className=" font-bold text-3xl">Lumos // </h1>
            </Link>
          )}
          {!(path == "/") ? <Searchbar /> : null}
        </div>
        <div className="text-gray-100 ml-auto mx-10 cursor-pointer">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
