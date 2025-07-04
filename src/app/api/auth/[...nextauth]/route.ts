import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // EmailProvider({
    //   server: process.env.EMAIL_SERVER!,
    //   from: process.env.EMAIL_FROM!,
    // }),
  ],
  //  adapter: FirestoreAdapter({
  //     credential: cert({
  //       projectId: process.env.FIREBASE_PROJECT_ID!,
  //       clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
  //       privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, "\n"),

  //     }),
  //   }),
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
