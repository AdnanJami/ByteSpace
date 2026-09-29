import { FacebookIcon } from "@/components/ui/icons/FacebookIcon";
import { GoogleIcon } from "@/components/ui/icons/GoogleIcon";
import { cn } from "@/lib/utils";

export interface SocialLoginProps {
  className?: string;
}

export function SocialLogin({ className }: SocialLoginProps) {
  return (
    <div className={cn("flex flex-col gap-10", className)}>
      <div className="flex items-center gap-4">
        <span className="h-px flex-1 bg-gray-200" aria-hidden="true" />
        <span className="text-body-l text-gray-700">or</span>
        <span className="h-px flex-1 bg-gray-200" aria-hidden="true" />
      </div>
      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          disabled
          aria-label="Continue with Facebook (not available in this demo)"
          title="Not available in this demo"
          className="flex size-[72px] items-center justify-center rounded-3xl border border-gray-200 text-black-950 disabled:cursor-not-allowed"
        >
          <FacebookIcon className="size-10" mono />
        </button>
        <button
          type="button"
          disabled
          aria-label="Continue with Google (not available in this demo)"
          title="Not available in this demo"
          className="flex size-[72px] items-center justify-center rounded-3xl border border-gray-200 text-black-950 disabled:cursor-not-allowed"
        >
          <GoogleIcon className="size-9" mono />
        </button>
      </div>
    </div>
  );
}
