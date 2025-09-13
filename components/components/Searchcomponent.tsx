import SearchFormreset from "./SearchFormreset";
import { Search } from "lucide-react";

function Searchcomponent({ query }: { query: string }) {
  return (
    <form
      action="/"
      className="search-form w-2xl mt-8 text-black bg-gray-200 border-gray-400 rounded focus:outline-none focus:ring-0"
    >
      <div className="flex">
        <input
          name="query"
          defaultValue={query ?? ""}
          placeholder="Search for people, ideas, or projects..."
          className="w-full h-full p-3.5"
        />
        {query && <SearchFormreset />}
        <button type="submit">
          <Search className="size-5 mx-3" />
        </button>
      </div>
    </form>
  );
}

export default Searchcomponent;
