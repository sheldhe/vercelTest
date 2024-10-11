import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export const metadata = {
  title: "Movie Detail",
};

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log;
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]); // 두개 한번에 실행
  // movie가 실행된 후, videos가 실행됨 .
  return (
    <div>
      <Suspense fallback={<>loding</>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<>loding</>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
