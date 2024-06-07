
import { Dashboard } from "@/components/homepage/dashboard";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
    <Link href={"/sign-in"}><Button>Sign In</Button></Link>
    <Link href={"/sign-up"}><Button>Sign Up</Button></Link>
    </div>
  );
}
