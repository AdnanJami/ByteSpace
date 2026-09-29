import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { LoginForm } from "@/components/auth/LoginForm";
import { getSessionUser } from "@/lib/auth/session";
import { safeRedirectPath } from "@/lib/auth/safeRedirectPath";

export const metadata: Metadata = {
  title: "Sign In — ByteSpace",
  description: "Sign in to your ByteSpace account.",
};

export default async function LoginPage({ searchParams }: PageProps<"/login">) {
  const { next } = await searchParams;
  const redirectTo = safeRedirectPath(typeof next === "string" ? next : undefined);

  if (await getSessionUser()) redirect(redirectTo);

  return (
    <AuthLayout
      promoTitle="Sign in with ease"
      promoDescription="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <LoginForm redirectTo={redirectTo} />
    </AuthLayout>
  );
}
