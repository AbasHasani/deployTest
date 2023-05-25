import { FC } from "react";

interface Props {
  id: string;
}

const Post: FC<Props> = ({ id }) => {
  return <p>{id}</p>;
};

export default Post;
