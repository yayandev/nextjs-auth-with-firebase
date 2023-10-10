import { NextResponse } from "next/server";

const privateRoute = ["/"];
const publicRoute = ["/sign-in", "/sign-up"];

export function middleware(req) {
  const pathname = req.nextUrl.pathname;
  const token = req.cookies.get("token");

  if (!token && privateRoute.includes(pathname)) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  if (token && publicRoute.includes(pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/sign-in", "/sign-up"],
};
