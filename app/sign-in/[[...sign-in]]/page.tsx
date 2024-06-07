import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign In | FullStock"
}

import { SignIn } from "@clerk/nextjs";

export default function SigninPage() {
    return (
        <div className="flex items-center justify-center">
            <SignIn appearance={{ variables: { colorPrimary: "#0F172A" } }} />
        </div>
    )
}