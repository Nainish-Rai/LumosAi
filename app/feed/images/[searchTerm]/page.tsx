/* eslint-disable @next/next/no-img-element */
"use client";
import { ImagesMain, Main, Result } from "@/types";
import { useState } from "react";
import { useParams } from "next/navigation";
import { imagesApi } from "../../../../utils/api";
import ResultsCard from "@/app/components/ResultsCard";
import SkeletonSearchPage from "@/app/components/Skeleton/SkeletonSearchPage";
import ImagesFeed from "@/app/containers/ImagesFeed";

type Props = {};
type searchApi = {
  data: ImagesMain[];
  isError: boolean;
  isLoading: boolean;
};

function page({}: Props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { searchTerm } = useParams();

  const { data, isLoading, isError }: searchApi = imagesApi(searchTerm);
  if (isError) return "An error has occurred.";
  if (isLoading) return <SkeletonSearchPage />;
  return (
    <div className="w-full ">
      <div className="w-full px-5  mx-auto">
        <ImagesFeed data={data} />
      </div>
    </div>
  );
}

export default page;
