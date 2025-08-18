    import React from 'react'
    import Link from 'next/link'
    import { auth } from '@/auth'
    import { signIn, signOut } from 'next-auth/react'
    const Navbar = async () => {
        const session = await auth()
        return (
            <header className="bg-white shadow-md px-5 py-3 font-work-sans">
                <nav className='flex justify-between items-center text-black'>
                    <Link href='/' className='text-2xl font-bold'>
                        Zyro
                    </Link>

                    <div className='flex items-center gap-4 text-black'>
                        {session && session?.user ? (
                            <>
                                <Link href='/startup/create'>
                                    <span>Create Startup</span>
                                </Link>

                                <button onClick={signOut}>
                                    <span>Logout</span>
                                </button>

                                <Link href={`user/${session?.user?.id}`}>
                                    <span>{session?.user?.name}</span>
                                </Link>
                            </>
                        ): (
                            <>
                                <form action= { async () => {
                                    "use server";

                                    await signIn('github')
                                }}>
                                    <button type='submit'>
                                        Login
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </nav>
            </header>
        )
    }

    export default Navbar