"use client"
import React from 'react'
import Link from 'next/link'
function SearchFormreset() {

    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement;
        if (form) {
            form.reset();
        }
    }
    // This function resets the form when the button is clicked
  return (
    <button type="reset" onClick={reset}>
        <Link href='/' className="flex items-center justify-center bg-black text-white rounded-full h-8 w-8 mx-1">
            X
        </Link>
    </button>
  )
}

export default SearchFormreset