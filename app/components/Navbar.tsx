// Navbar.tsx (Server Component)
import React from "react";
import Link from "next/link";
import { auth } from "@/auth"; // ✅ server-side helper
import Authbutton from "./Authbutton"; // 👈 new client component

const Navbar = async () => {
  const session = await auth();

  return (
    <header className=" shadow-md px-5 py-3 font-work-sans border-b border-gray-300 bg-black text-white">
      <nav className="flex justify-between items-center ">
        <Link href="/" className="text-2xl font-bold font-monaco">
          Zyro
        </Link>

        {/* Pass session to Client Component */}
        <Authbutton session={session} />
      </nav>
    </header>
  );
};

export default Navbar;
