"use client"

import { signIn } from "next-auth/react"

const GithubBtn = () => {
    return <button
    onClick={() => signIn("github")}
      className="p-1 px-3 bg-form-blue text-light-blue rounded-md"
    >Sign in with guthub</button>
}

export default GithubBtn