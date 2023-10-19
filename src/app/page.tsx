import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react";
import LoginButton from "@/components/login";

export default async function Home() {
  const session = await getServerSession()
  console.log(session)
  return (
    <div className="h-screen text-center flex flex-col items-center justify-center">
      <h1 className="text-3xl">Hospals</h1>
      <LoginButton/>
    </div>
  );
}
