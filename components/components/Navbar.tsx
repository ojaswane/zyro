// Navbar.tsx (Server Component)
import React from "react";
import Link from "next/link";
import { auth } from "@/auth"; 
import Authbutton from "./Authbutton"; 

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-5 py-3  bg-transparent backdrop-blur-sm text-white">
      <nav className="flex justify-between items-center px-20 ">
        <Link href="/" className="text-2xl font-bold font-monaco">
          Zyro
        </Link>
        <Authbutton session={session} />
      </nav>
    </header>

  );
};

export default Navbar;
