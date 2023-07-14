/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Image, ImagesMain } from "@/types";

type Props = {
  data: ImagesMain[];
};

function ImagesFeed({ data }: Props) {
  return (
    <div className=" w-full flex  bg-gray-100 dark:bg-zinc-900 mt-6 py-4 rounded-3xl flex-wrap">
      {data &&
        data.map((item: ImagesMain, index: number) => {
          return (
            <Dialog key={index}>
              <DialogTrigger
                className={`p-1 xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2  w-full  `}
              >
                <img
                  src={item.thumbnail}
                  key={index}
                  className={` rounded hover:opacity-70 duration-150 cursor-pointer w-full h-full object-cover `}
                  width={item.width}
                  height={item.height}
                  alt="img"
                />
              </DialogTrigger>
              <DialogContent className="w-96 ">
                <a href={item.url} target="_blank">
                  <img
                    src={item.url}
                    className="w-fit"
                    height={item.height}
                    alt="s"
                  />
                </a>
              </DialogContent>
            </Dialog>
          );
        })}
    </div>
  );
}

export default ImagesFeed;
