/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  url: string;
};

function ResultsCard({ title, description, url }: Props) {
  return (
    <a target="_blank" href={url}>
      <div className="w-full  hover:shadow-lg hover:bg-white dark:hover:bg-neutral-800/50 hover:-translate-y-1 hover:translate-x-1 duration-300 rounded-2xl flex  gap-2 flex-col p-5 px-8">
        <div className="flex items-center space-x-4">
          {/* <img
            src={favicons.high_res}
            className=" rounded-full"
            alt="f"
            height={30}
            width={30}
          /> */}
          <div className="flex flex-col gap-0">
            <h2 className="text-blue-800 dark:text-blue-400 font-semibold text-lg">
              {title}
            </h2>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-xs text-green-800 dark:text-gray-400 hover:text-pink-600 "
            >
              {url}
            </a>
          </div>
        </div>
        <p className="text-primary/80 font-normal text-sm leading-relaxed ">
          {description}
        </p>
      </div>
    </a>
  );
}

export default ResultsCard;
