import { SignIn } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const params = useSearchParams();
  const redirectURL = params.get("redirect_url") || "/dashboard";
  return (
    <div className="flex justify-center py-24">
      <SignIn signUpUrl="/sign-up" redirectUrl={redirectURL} />
    </div>
  );
}
