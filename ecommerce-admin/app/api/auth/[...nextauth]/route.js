import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/lib/mongodb"

const admins = ["mateenunez@gmail.com"]

const handler = NextAuth({
  providers: [
    // ...add more providers here
    GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
    })
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    session: ({session}) => {
      if (admins.includes(session.user?.email)) {
      return session }
      else {return ;}
  }
  }
})

export { handler as GET, handler as POST }