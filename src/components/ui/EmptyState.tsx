import type { ReactNode } from "react";

export interface EmptyStateProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-gray-200 px-6 py-12 text-center">
      <p className="text-label-l text-ink">{title}</p>
      {description && <p className="text-body-s text-gray-700">{description}</p>}
      {action}
    </div>
  );
}
