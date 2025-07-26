import Signin from "@/components/Auth/Signin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Blinkkaro – Simplify Your Daily Services",
  description:
    "Create your Blinkkaro account to book services, hire professionals, and manage events — all in one easy-to-use app made for modern India.",
};

const SigninPage = () => {
  return (
    <>
      <Signin />
    </>
  );
};

export default SigninPage;
