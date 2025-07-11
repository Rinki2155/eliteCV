import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";


const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  throw new Error("Missing Google OAuth environment variables: GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET");
}

const handler = NextAuth({
  providers:[
    GoogleProvider({
      clientId: clientId,
      clientSecret: clientSecret
    })
  ]
})

export {handler as GET, handler as POST}


