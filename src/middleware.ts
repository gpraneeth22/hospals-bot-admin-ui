export { default } from "next-auth/middleware"

// export const config = { matcher: ["/dashboard"] }
// export default withAuth({
//     callbacks: {
//       authorized({ req, token }) {
//         // `/admin` requires admin role
//         if (req.nextUrl.pathname === "/dashboard") {
//           return token?.userRole === "admin"
//         }
//         // `/me` only requires the user to be logged in
//         return !!token
//       },
//     },
//   })

export const config = { matcher: ["/dashboard"] }