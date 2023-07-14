import { KnowledgePanel, Main, PeopleAlsoSearch, Result } from "@/types";
import React from "react";
import ResultsCard from "../components/ResultsCard";
import KnowledgeCard from "./KnowledgeCard";
import AiResult from "./AiResult";
import AlsoSearch from "./AlsoSearch";

interface NewType {
  data: Main[];
  searchTerm: string;
}

type Props = NewType;

function SearchFeed({ data, searchTerm }: Props) {
  return (
    <div className="flex flex-col md:flex-row p-2 lg:p-0">
      <div className="text-primary w-full lg:w-[70%] lg:m-4 rounded-3xl shadow-md  bg-gray-50 dark:bg-neutral-900  ">
        {data &&
          data.map((item: Main, index: number) => {
            return (
              <ResultsCard
                key={index}
                title={item.title}
                url={item.link}
                description={item.snippet}
              />
            );
          })}
      </div>
      <div className="w-full lg:w-[35%]">
        <AiResult searchTerm={searchTerm} />
        {/* {knowledge_panel && <KnowledgeCard data={knowledge_panel} />}
        {alsoSearch && <AlsoSearch data={alsoSearch} />} */}
      </div>
    </div>
  );
}

export default SearchFeed;
