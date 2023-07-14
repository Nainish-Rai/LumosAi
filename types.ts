export interface Main {
  title: string;
  link: string;
  snippet: string;
}
export interface Dictionary {
  word: null;
  phonetic: null;
  audio: null;
  definitions: any[];
  examples: any[];
}
export interface ImagesMain {
  height: number;
  image: string;
  source: Source;
  thumbnail: string;
  title: string;
  url: string;
  width: number;
}

export enum Source {
  Bing = "Bing",
}

export interface FeaturedSnippet {
  title: null;
  description: null;
  url: null;
}

export interface KnowledgePanel {
  type: string;
  title: string;
  description: string;
  url: null;
  metadata: Metadata[];
  books: any[];
  tv_shows_and_movies: any[];
  ratings: Rating[];
  available_on: any[];
  images: Image[];
  songs: any[];
  socials: any[];
  demonstration: null;
  lyrics: null;
}

export interface Image {
  url: string;
}

export interface Metadata {
  title: string;
  value: string;
}

export interface Rating {
  name: string;
  rating: string;
}

export interface Location {
  title: null;
  distance: null;
  map: null;
}

export interface PeopleAlsoSearch {
  title: string;
  thumbnail: string;
}

export interface Result {
  title: string;
  description: string;
  url: string;
  is_sponsored: boolean;
  favicons: Favicons;
}

export interface Favicons {
  high_res: string;
  low_res: string;
}

export interface Time {
  hours: null;
  date: null;
}

export interface Translation {
  source_language: null;
  target_language: null;
  source_text: null;
  target_text: null;
}

export interface UnitConverter {}

export interface Weather {
  location: null;
  forecast: null;
  precipitation: null;
  humidity: null;
  temperature: null;
  wind: null;
  image: null;
}

export interface ImageMain {
  id: string;
  url: string;
  width: number;
  height: number;
  color: string;
  preview: Preview;
  origin: Origin;
}

export interface Origin {
  title: string;
  website: Website;
}

export interface Website {
  name: string;
  domain: string;
  url: string;
}

export interface Preview {
  url: string;
  width: number;
  height: number;
}
