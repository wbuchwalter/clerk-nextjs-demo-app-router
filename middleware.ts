import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// @ts-ignore
export default authMiddleware({
  publicRoutes: ["/"],
  // debug: true,
  async afterAuth(auth, req) {
    if (auth.isPublicRoute) {
      //  For public routes, we don't need to do anything
      return NextResponse.next();
    }

    const url = new URL(req.nextUrl.origin);

    if (!auth.userId) {
      //  If user tries to access a private route without being authenticated,
      //  redirect them to the sign in page
      const initialUrl = new URL(req.url);
      console.log(req.headers);
      url.pathname = `/sign-in`;
      if (initialUrl.pathname) {
        url.search = `?redirect_url=${initialUrl.pathname}`;
      }
      return NextResponse.redirect(url);
    }
  },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
