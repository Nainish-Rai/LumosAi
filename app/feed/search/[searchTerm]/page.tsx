/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { searchApi } from "../../../../utils/api";
import ResultsCard from "@/app/components/ResultsCard";
import SkeletonSearchPage from "@/app/components/Skeleton/SkeletonSearchPage";
import { Main, Result } from "@/types";
import RouteBar from "@/app/containers/RouteBar";
import AiResult from "@/app/containers/AiResult";
import SearchFeed from "@/app/containers/SearchFeed";

type Props = {};
type searchApi = {
  data: Main[];
  isError: boolean;
  isLoading: boolean;
};

function page({}: Props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { searchTerm } = useParams();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [page, setPage] = useState<number>(0);
  const options = {
    page: page,
    safe: false,
    additional_params: {
      hl: "en",
    },
  };

  const { data, isLoading, isError }: searchApi = searchApi(
    searchTerm,
    options
  );
  if (isError) return "An error has occurred.";
  if (isLoading) return <SkeletonSearchPage />;
  return (
    <div className="w-full">
      <div className="w-full max-w-7xl mx-auto">
        <SearchFeed
          searchTerm={searchTerm}
          data={data}
          // knowledge_panel={data.knowledge_panel}
          // alsoSearch={data.people_also_search}
        />
      </div>
    </div>
  );
}

export default page;
