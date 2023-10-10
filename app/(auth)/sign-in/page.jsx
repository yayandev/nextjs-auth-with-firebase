"use client";
import { useAuthContext } from "@/context/AuthContext";
import signIn from "@/utils/firebase/signIn";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const PageSignIn = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { result, error } = await signIn(values.email, values.password);

    if (error) {
      console.log(error);
    }

    if (result) {
      console.log(result);
      router.push("/");
    }

    setIsLoading(false);
  };

  return (
    <section className="flex h-screen w-full items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-sm md:border rounded p-3 space-y-3"
      >
        <h1 className="text-center text-xl font-bold">Sign In</h1>
        <input
          required
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          type="email"
          placeholder="Email"
          className="w-full p-2 rounded border focus:outline-none"
        />
        <input
          required
          value={values.password}
          onChange={(e) => setValues({ ...values, password: e.target.value })}
          type="password"
          placeholder="Password"
          className="w-full p-2 rounded border focus:outline-none"
        />
        <button
          disabled={isLoading}
          className="disabled:opacity-75 p-2 w-full rounded bg-blue-500 text-white"
        >
          {isLoading ? "Loading..." : "Sign in"}
        </button>
        <p className="text-center text-sm">
          Don t have an account?{" "}
          <Link href="/sign-up" className="text-blue-500">
            Sign up
          </Link>
        </p>
      </form>
    </section>
  );
};

export default PageSignIn;
