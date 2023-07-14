/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from "swr";
const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());
// const BASE_URL = "https://nainishlumos.vercel.app/api";

const postFetcher = async (url: string, data: any) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("An error occurred while fetching the data.");
  }

  return response.json();
};

const BASE_URL = "http://127.0.0.1:5328/api";
const API_BASE_URL = process.env.CHAT_API_BASE_URL;

export function searchApi(searchTerm: string, options: any) {
  const address = `https://ddg-api.herokuapp.com/search?query=${searchTerm}`;
  const { data, error, isLoading } = useSWR(address, fetcher);
  return {
    data: data,
    isLoading,
    isError: error,
  };
}

export function imagesApi(searchTerm: string) {
  const { data, error, isLoading } = useSWR(
    `${BASE_URL}/images/${searchTerm}`,
    fetcher
  );
  return {
    data: data,
    isLoading,
    isError: error,
  };
}

export function chatApi(searchTerm: string) {
  const { data, error, isLoading } = useSWR(
    `${API_BASE_URL}/images/${searchTerm}`,
    postFetcher
  );
  return {
    data: data,
    isLoading,
    isError: error,
  };
}
