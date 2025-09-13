"use client";

import { X } from "lucide-react";

function SearchFormreset() {
  return (
    <button
      type="reset"
      className="flex mx-1"
      aria-label="Reset search"
    >
      <X className="size-5" />
    </button>
  );
}

export default SearchFormreset;
