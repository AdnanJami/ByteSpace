import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { RegisterForm } from "@/components/auth/RegisterForm";
import { getSessionUser } from "@/lib/auth/session";

export const metadata: Metadata = {
  title: "Create an Account — ByteSpace",
  description: "Create your ByteSpace account.",
};

export default async function SignupPage() {
  if (await getSessionUser()) redirect("/");

  return (
    <AuthLayout
      promoTitle="Sign up and come in"
      promoDescription="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <RegisterForm />
    </AuthLayout>
  );
}
