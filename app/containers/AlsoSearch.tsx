/* eslint-disable @next/next/no-img-element */
"use client";
import { PeopleAlsoSearch } from "@/types";
import React from "react";
import { useRouter } from "next/navigation";

type Props = {
  data: PeopleAlsoSearch[];
};

function AlsoSearch({ data }: Props) {
  const router = useRouter();
  return (
    <div className="p-4">
      <div className=" bg-gray-100 shadow-md p-4 rounded-3xl dark:bg-zinc-900  ">
        <h4 className=" font-medium">People Also Search For</h4>
        <div className=" flex mt-2">
          {data.map((item: PeopleAlsoSearch, index: number) => {
            return (
              <div
                key={index}
                onClick={() => {
                  router.push(`/feed/search/${item.title}`);
                }}
                className="w-1/4 hover:opacity-70 cursor-pointer"
              >
                <div className="w-full p-1">
                  <img
                    src={item.thumbnail}
                    className=" object-cover rounded-lg"
                    alt="s"
                  />
                </div>
                <h4 className="text-xs text-primary px-1 font-semibold">
                  {item.title}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AlsoSearch;
