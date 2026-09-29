import { Suspense } from "react";
import type { Metadata } from "next";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Sign In — ByteSpace",
  description: "Sign in to your ByteSpace account.",
};

export default function LoginPage() {
  return (
    <AuthLayout
      promoTitle="Sign in with ease"
      promoDescription="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <Suspense>
        <LoginForm />
      </Suspense>
    </AuthLayout>
  );
}
