"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ApiError } from "@/lib/api/client";
import { newsletterSchema, subscribeToNewsletter, type NewsletterInput } from "@/lib/api/newsletter";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setError,
  } = useForm<NewsletterInput>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  async function onSubmit(data: NewsletterInput) {
    try {
      await subscribeToNewsletter(data);
      reset({ email: "" }, { keepIsSubmitSuccessful: true });
    } catch (error) {
      setError("email", {
        message:
          error instanceof ApiError
            ? error.message
            : "Something went wrong, please try again.",
      });
    }
  }

  if (isSubmitSuccessful) {
    return (
      <p role="status" className="text-body-m text-gray-700">
        Thanks for subscribing! Check your inbox to confirm.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-start"
    >
      <div className="flex-1 sm:max-w-[376px]">
        <Input
          type="email"
          label="Email address"
          hideLabel
          placeholder="Enter your email"
          error={errors.email?.message}
          {...register("email")}
        />
      </div>
      <Button type="submit" loading={isSubmitting} className="shrink-0">
        Subscribe
      </Button>
    </form>
  );
}
