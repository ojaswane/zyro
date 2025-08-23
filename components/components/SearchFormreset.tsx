"use client"
import React from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
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
        <Link href='/' className="flex mx-1">
            <X className="size-5" />
        </Link>
    </button>
  )
}

export default SearchFormreset