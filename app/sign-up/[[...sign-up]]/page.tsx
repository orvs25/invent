import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
    title: "Sign Up | FullStock"
}

import { SignUp } from "@clerk/nextjs";

export default function SignupPage() {
    return (
        <div className="flex items-center justify-center flex-col">
            <Image
            src="/UASTP.png"
            height="200"
            width="200"
            alt="uas"
            />
            <SignUp appearance={{ variables: { colorPrimary: "#0F172A" } }} />
        </div>
    )
}