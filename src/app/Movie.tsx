import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  title: string;
  id: string | number;
  release_date: string;
  poster_path: string;
}

const Movie: FC<Props> = ({ title, id, release_date, poster_path }) => {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <Link href={`/${id}`}>{title}</Link>
      <h2>{release_date}</h2>
      <Link href={`/${id}`}>
        <p>{imagePath+poster_path}</p>
        <Image src={imagePath + poster_path} width={100} height={100} alt="" />
      </Link>
    </div>
  );
};

export default Movie;
