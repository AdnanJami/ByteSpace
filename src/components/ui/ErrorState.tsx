import { Button } from "./Button";

export interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({
  message = "Something went wrong. Please try again.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div
      role="alert"
      className="flex flex-col items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 px-6 py-12 text-center"
    >
      <p className="text-body-m text-gray-700">{message}</p>
      {onRetry && (
        <Button type="button" variant="outline" size="sm" onClick={onRetry}>
          Try again
        </Button>
      )}
    </div>
  );
}
