import { getServerSession } from "next-auth";
import LoginButton from "@/components/login";
import { redirect, useRouter } from "next/navigation";

export default async function Home() {
  
  return (
    <div className="h-screen text-center flex flex-col items-center justify-center">
      <h1 className="text-3xl">Hospals</h1>
      <LoginButton/>
    </div>
  );
}
