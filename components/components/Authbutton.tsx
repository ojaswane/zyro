"use client";

import React from "react";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { toast, Toaster } from 'react-hot-toast';
import { Session } from "next-auth";

const NavbarClient = ({ session }: { session: Session | null }) => {

  const handleLogout = async () => {
    try {
      await signOut({ redirect: false });
      toast.success("🚪 Logged out successfully", { duration: 2000 });
    } catch (error) {
      console.error("Error during sign out:", error);
      toast.error("Failed to log out!");
    }
  };

  const handleLogin = async () => {
    try {
      await signIn("google", { redirect: false });
      toast.success("Logged in successfully ✅", { duration: 2000 });
    }
    catch (error) {
      console.error("Error during log in:", error);
      toast.error("Failed to log in!");
    }
  }

  return (
    <div className="flex items-center gap-4 ">
      {session?.user ? (
        <>
          <Link href="/startup/create">Create Startup</Link>
          <button onClick={handleLogout}>Logout</button>
          <Link href={`/user/${session.user.id}`}>
            {session.user.name}
          </Link>
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}

      < Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default NavbarClient;
