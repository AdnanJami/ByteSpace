"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { ApiError } from "@/lib/api/client";
import { login, loginSchema, type LoginInput } from "@/lib/api/auth";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { SocialLogin } from "./SocialLogin";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  async function onSubmit(data: LoginInput) {
    try {
      await login(data);
      router.push(searchParams.get("next") ?? "/");
      router.refresh();
    } catch (error) {
      setError("root", {
        message:
          error instanceof ApiError
            ? error.message
            : "Something went wrong, please try again.",
      });
    }
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-1">
        <p className="text-label-m text-primary">Sign In</p>
        <h2 className="text-heading-s text-ink">Welcome Back</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <Input
            type="email"
            label="Email"
            placeholder="designer@example.com"
            autoComplete="email"
            error={errors.email?.message}
            {...register("email")}
          />
          <Input
            type="password"
            label="Password"
            placeholder="********"
            autoComplete="current-password"
            error={errors.password?.message}
            {...register("password")}
          />
        </div>

        {errors.root?.message && (
          <p role="alert" className="text-body-s text-red-600">
            {errors.root.message}
          </p>
        )}

        <div className="flex justify-end">
          <Button type="submit" loading={isSubmitting}>
            Sign In
          </Button>
        </div>
      </form>

      <SocialLogin />

      <p className="text-center text-body-m text-gray-700">
        New user?{" "}
        <Link href="/signup" className="font-medium text-primary hover:underline">
          Create an account
        </Link>
      </p>
    </div>
  );
}
