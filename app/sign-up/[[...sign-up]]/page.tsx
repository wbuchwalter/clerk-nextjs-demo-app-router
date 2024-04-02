"use client";
import { SignUp } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const params = useSearchParams();
  const redirectURL = params.get("redirect_url") || "/dashboard";
  return (
    <div className="flex justify-center py-24">
      <SignUp signInUrl="/sign-in" redirectUrl={redirectURL} />
    </div>
  );
}
