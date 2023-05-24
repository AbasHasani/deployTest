import Image from "next/image";
import Link from "next/link";
import Movie from "./Movie";
export default async function Home() {
  const res =
    await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}
  `);
  const data = await res.json();
  return (
    <main className="max-w-6xl overflow-hidden mx-auto">
      <h1>Hello next 13</h1>
      <div className="grid gap-16 grid-cols-fluid">
        {data.results.map((movie: any) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
      <Link href="/about">About</Link>
    </main>
  );
}
