import Image from "next/image";
import { FC } from "react";

interface Props {
  params: {
    id: string | number;
  };
}

export async function generateStaticParams() {
    const res =
    await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}
  `);
    const data = await res.json(); 
    return data.results.map((movie: any) => ({
        movie: movie.id.toString()
    }))
}

const Movie = async ({ params: { id } }: Props) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_KEY}`
  );
  const data = await res.json();
  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <div>
      <p>{data.title}</p>
      <p>{data.release_date}</p>
      <p>{data.runtime} minutes</p>
      <h2 className="bg-green-500 p-3 rounded">{data.status}</h2>
      <Image src={imagePath + data.poster_path} width={100} height={100} alt="" />
    </div>
  );
};

export default Movie;
