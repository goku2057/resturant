import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
    publicRoutes: ["/", "/api/menu", "/api/menu/fetch" , "/cart"],
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
