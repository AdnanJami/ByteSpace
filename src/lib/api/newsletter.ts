import { z } from "zod";
import { api } from "./client";

export const newsletterSchema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email address"),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;

export function subscribeToNewsletter(input: NewsletterInput): Promise<{ ok: true }> {
  return api<{ ok: true }>("/api/newsletter", {
    method: "POST",
    body: JSON.stringify(input),
  });
}
