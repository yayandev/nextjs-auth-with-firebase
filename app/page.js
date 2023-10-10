"use client";

import { useAuthContext } from "@/context/AuthContext";
import { LogOut } from "@/utils/firebase/signOut";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user } = useAuthContext();
  const router = useRouter();
  const Logout = async () => {
    const response = await LogOut();

    if (response === true) {
      router.push("/sign-in");
    } else {
      console.log(response);
    }
  };

  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div className=" text-center max-w-sm rounded border p-3 space-y-3">
        <h1 className="font-semibold">Welcome {user?.email.split("@")[0]}</h1>
        <button className="p-2 rounded bg-red-500 text-white" onClick={Logout}>
          Sign out
        </button>
      </div>
    </main>
  );
}
