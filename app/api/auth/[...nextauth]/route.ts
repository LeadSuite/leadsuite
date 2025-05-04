import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
import { compare } from "bcrypt";

const handler = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const client = await clientPromise;
        const user = await client.db().collection("users").findOne({ email: credentials?.email });

        if (!user || !user.hashedPassword) return null;

        if (!credentials) return null;
        const isValid = await compare(credentials.password, user.hashedPassword);
        if (!isValid) return null;

        return {
          id: user._id.toString(),
          name: user.name || user.email,
          email: user.email
        };
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin", // custom sign-in page
    newUser: "/signup", // optional
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
