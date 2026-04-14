import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectToDatabase from "./lib/mongoose";
import AdminUser from "./models/AdminUser";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        await connectToDatabase();

        const user = await AdminUser.findOne({ email: credentials.email });
        if (!user) return null;

        const isPasswordValid = await bcrypt.compare(
          credentials.password as string,
          user.password
        );

        if (!isPasswordValid) return null;

        return { 
          id: user._id.toString(), 
          email: user.email, 
          role: user.role,
          name: user.email // NextAuth lubi mieć pole name
        };
      },
    }),
  ],
});
