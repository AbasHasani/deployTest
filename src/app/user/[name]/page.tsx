import { redirect } from "next/navigation";

const Page = ({ params }: { params: { name: string } }) => {
  redirect(`/user/${params.name}/product`);
  console.log(params)
  return <h1>Redirecting..</h1>;
};

export default Page;
