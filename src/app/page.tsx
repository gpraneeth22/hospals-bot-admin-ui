import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center flex flex-col items-center justify-center">
      <h1 className="text-3xl">Hospals</h1>
      <Button asChild>
        <Link href="http://localhost:5000/auth/google">Sign in with Google</Link>
      </Button>
    </div>
  );
}
