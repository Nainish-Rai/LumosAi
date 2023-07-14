import React from "react";
import SkeletonSearchCard from "./SkeletonSearchCard";

type Props = {};

function SkeletonSearchPage({}: Props) {
  return (
    <div className="w-full h-screen -z-30 pt-4 mx-auto max-w-6xl">
      <div className="w-full md:w-[70%]">
        <SkeletonSearchCard />
        <SkeletonSearchCard />
        <SkeletonSearchCard />
        <SkeletonSearchCard />
        <SkeletonSearchCard />
        <SkeletonSearchCard />
        <SkeletonSearchCard />
        <SkeletonSearchCard />
      </div>
    </div>
  );
}

export default SkeletonSearchPage;
