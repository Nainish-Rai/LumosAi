import google from "googlethis";
import { NextResponse } from "next/server";
export const GET = async (req: Request) => {
  const searchTerm = req.url.slice(req.url.lastIndexOf("/") + 1);
  // get search result using google this search
  try {
    const result = await google.image(searchTerm);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.error();
  }
};
