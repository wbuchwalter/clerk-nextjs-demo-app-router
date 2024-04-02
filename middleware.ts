import { authMiddleware } from "@clerk/nextjs";

// @ts-ignore
export default authMiddleware({
  publicRoutes: ["/"],
  debug: true,
  domain: "www.testpaca.com",
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
