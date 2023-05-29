import EmailForm from "./emailForm";
import GithubBtn from "./githubBtn";
import GoogleBtn from "./googleBtn";

const Page = () => {
  return (
    <div className="mt-5 grid place-items-center">
      <EmailForm />
      <GithubBtn />
      <GoogleBtn />
    </div>
  );
};

export default Page;
