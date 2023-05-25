import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/db";
// import { prisma } from "@/db";

const authOptions: NextAuthOptions = {
  providers: [
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     username: { label: "Username", type: "text", placeholder: "jsmith" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials, req) {
    //     const user = { name: credentials?.username, id: "id", email: "email" };
    //     if (true) {
    //       return user;
    //     }
    //     return null;
    //   },
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    signIn: async ({ profile, account }) => {
      if (account?.provider == "google") {
        const user = await prisma.user.findUnique({
          where: { email: profile?.email },
        });
        if (!user && profile?.email && profile?.name) {
          await prisma.user.create({
            data: { name: profile?.name, email: profile?.email },
          });
        }
      }
      return true;
    },
  },
};

const handeler = NextAuth(authOptions);
export { handeler as GET, handeler as POST };
