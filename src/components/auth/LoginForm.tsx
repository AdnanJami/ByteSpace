"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ApiError } from "@/lib/api/client";
import { login, loginSchema, type LoginInput } from "@/lib/api/auth";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { SocialLogin } from "./SocialLogin";

export interface LoginFormProps {
  /** Same-site path to return to after signing in. */
  redirectTo?: string;
}

export function LoginForm({ redirectTo = "/" }: LoginFormProps) {
  const router = useRouter();

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
      router.push(redirectTo);
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
    <div className="flex h-full flex-col">
      <div className="flex flex-col">
        <p className="text-body-l text-primary">Sign In</p>
        <h2 className="text-heading-s text-ink sm:text-heading-m">Welcome Back</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-9 flex flex-col gap-6">
        <div className="flex flex-col gap-[21px]">
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
          <Button type="submit" loading={isSubmitting} className="text-label-l">
            Sign In
          </Button>
        </div>
      </form>

      <SocialLogin className="mt-10 sm:mt-[73px]" />

      <p className="mt-10 text-center text-body-m text-gray-700 lg:mt-auto">
        New user?{" "}
        <Link href="/signup" className="text-primary hover:underline">
          Create an account
        </Link>
      </p>
    </div>
  );
}
