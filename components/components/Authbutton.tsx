"use client";

import React from "react";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";

import { Session } from "next-auth";

const NavbarClient = ({ session }: { session: Session | null }) => {
  return (
    <div className="flex items-center gap-4 ">
      {session?.user ? (
        <>
          <Link href="/startup/create">Create Startup</Link>
          <button onClick={() => signOut()}>Logout</button>
          <Link href={`/user/${session.user.id}`}>
            {session.user.name}
          </Link>
        </>
      ) : (
        <button onClick={() => signIn("github")}>Login</button>
      )}
    </div>
  );
};

export default NavbarClient;
