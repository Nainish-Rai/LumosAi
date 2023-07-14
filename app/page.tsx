import React from "react";
import Navbar from "./containers/Navbar";
import HomeSearchBar from "./components/HomeSearchBar";

type Props = {};

function page({}: Props) {
  return (
    <div className=" bg-background dark:bg-black h-screen w-full ">
      <Navbar />

      <div className="w-full h-[94%] flex flex-col items-center justify-center">
        <h1 className="font-bold text-6xl my-10">Lumos // </h1>
        <HomeSearchBar />
      </div>
    </div>
  );
}

export default page;
