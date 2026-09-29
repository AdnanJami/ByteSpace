"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ApiError } from "@/lib/api/client";
import { register as registerUser, registerSchema, type RegisterInput } from "@/lib/api/auth";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function RegisterForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: { fullName: "", email: "", password: "" },
  });

  async function onSubmit(data: RegisterInput) {
    try {
      await registerUser(data);
      router.push("/");
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
        <p className="text-label-m text-primary">Create an Account</p>
        <h2 className="text-heading-s text-ink">Welcome to ByteSpace</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <Input
            label="Full Name"
            placeholder="Jamie Davis"
            autoComplete="name"
            error={errors.fullName?.message}
            {...register("fullName")}
          />
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
            autoComplete="new-password"
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
            Continue
          </Button>
        </div>
      </form>

      <p className="text-center text-body-m text-gray-700">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-primary hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
