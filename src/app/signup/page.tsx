import type { Metadata } from "next";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { RegisterForm } from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: "Create an Account — ByteSpace",
  description: "Create your ByteSpace account.",
};

export default function SignupPage() {
  return (
    <AuthLayout
      promoTitle="Sign up and come in"
      promoDescription="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
    >
      <RegisterForm />
    </AuthLayout>
  );
}
