import { FacebookIcon } from "@/components/ui/icons/FacebookIcon";
import { GoogleIcon } from "@/components/ui/icons/GoogleIcon";

export function SocialLogin() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <span className="h-px flex-1 bg-gray-200" aria-hidden="true" />
        <span className="text-body-m text-gray-700">or</span>
        <span className="h-px flex-1 bg-gray-200" aria-hidden="true" />
      </div>
      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          disabled
          aria-label="Continue with Facebook (not available in this demo)"
          title="Not available in this demo"
          className="flex size-[72px] items-center justify-center rounded-2xl border border-gray-200 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <FacebookIcon className="size-10" />
        </button>
        <button
          type="button"
          disabled
          aria-label="Continue with Google (not available in this demo)"
          title="Not available in this demo"
          className="flex size-[72px] items-center justify-center rounded-2xl border border-gray-200 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <GoogleIcon className="size-10" />
        </button>
      </div>
    </div>
  );
}
