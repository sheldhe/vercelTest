import { API_URL } from "../app/(home)/page";

async function getMovie(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 10000));
  //   const response = await fetch(`${API_URL}/${id}`);
  //   return response.json();
  throw new Error("일부러 에러");
}

interface MovieInfoProps {
  id: string;
}

export default async function MovieInfo({ id }: MovieInfoProps) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
