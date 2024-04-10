"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function UserAuth() {
  const { data: session } = useSession();

  console.log("session");
  console.log(session);

  if (session && session.user) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("cognito")}>Sign in</button>
    </>
  );
}
