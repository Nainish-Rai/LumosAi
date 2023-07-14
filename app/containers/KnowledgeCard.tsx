/* eslint-disable @next/next/no-img-element */
import { KnowledgePanel, Metadata } from "@/types";
import React from "react";

type Props = {
  data: KnowledgePanel;
};

function KnowledgeCard({ data }: Props) {
  return (
    <div className="p-4">
      <div className=" shadow-md bg-gray-100 dark:bg-zinc-900  p-4 rounded-3xl">
        <div className=" border-b border-primary pb-5 px-1">
          <h1 className="text-primary font-semibold text-2xl">{data.title}</h1>
          <p className="text-gray-800 dark:text-gray-100 text-sm">
            {data.type}
          </p>
          <p className="text-xs text-gray-800 dark:text-gray-100 mt-2">
            {data.description}
          </p>

          {data.url && (
            <a
              className="text-xs text-blue-800 dark:text-blue-400  mt-2"
              href={data.url}
            >
              {data.url}
            </a>
          )}
        </div>
        <div className="metadata">
          {data.metadata &&
            data.metadata.map((item: Metadata, index: number) => {
              return (
                <div
                  className="flex space-x-2 items-center p-1 my-1 "
                  key={index}
                >
                  <h3 className="self-start pt-[1px] text-sm text-blue-800 dark:text-blue-400  font-semibold">
                    {item.title} :
                  </h3>
                  <p className="p-1 text-gray-900 dark:text-gray-50 text-xs">
                    {item.value}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default KnowledgeCard;
