import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
    // pages: {
    //     signIn: '/'
    // },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    callbacks: {
        async jwt({ token }) {
          token.userRole = "admin"
          return token
        },
    },
    // secret: "asdfghjkl456"
})

export { handler as GET, handler as POST }