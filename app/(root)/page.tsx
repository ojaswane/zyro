import Animatetext from "../../components/components/Animatetext";
import Searchcomponent from "../../components/components/Searchcomponent";
import StartupCard from "../../components/components/StartupCard";
import DarkVeil from '@/Animation/Background';
import { client } from "../../sanity/lib/client";
import STARTUP_QUERY from "../../sanity/lib/quries";

// Define the StartupCardType type based on the expected post structure
type StartupCardType = {
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  image: string;
  views: number;
  category: string;
  author: {
    _id: string;
    name: string;
    image: string;
    bio: string;
  };
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  // ✅ Await searchParams (Next.js 15 requirement)
  const { query = "" } = await searchParams;

  // Fetch posts from Sanity
  const rawPosts = await client.fetch(STARTUP_QUERY);

  // Map and sanitize data
  type RawPostType = {
    _id: string;
    _createdAt: string;
    title: string;
    description: string;
    image?: { asset?: { url?: string } } | string;
    views?: number;
    category?: string;
    author?: {
      _id?: string;
      name?: string;
      image?: { asset?: { url?: string } } | string;
      bio?: string;
    };
  };

  const posts: StartupCardType[] = (rawPosts as RawPostType[]).map((post: RawPostType) => ({
    _id: post._id,
    _createdAt: post._createdAt,
    title: post.title,
    description: post.description,
    image:
      typeof post.image === "string"
        ? post.image
        : post.image?.asset?.url ?? "/window.svg",
    views: post.views ?? 0,
    category: post.category ?? "",
    author: {
      _id: post.author?._id ?? "",
      name: post.author?.name ?? "",
      image:
        typeof post.author?.image === "string"
          ? post.author?.image
          : post.author?.image?.asset?.url ?? "/default-avatar.png",
      bio: post.author?.bio ?? "",
    },
  }));

  console.log("Posts fetched:", posts);

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-black text-white">
      <section className="relative flex flex-col items-center justify-center w-full px-4 md:px-8 lg:px-16 min-h-screen ">
        {/* DarkVeil Background */}
        <div className="absolute inset-0 z-0">
          <DarkVeil />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-4xl text-center ">
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-lobster font-semibold leading-tight">
            Turn Your Ideas Into
            <div className="flex justify-center">
              <Animatetext />
            </div>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl font-light mt-10 md:mt-10 px-2">
            Connect with investors, showcase your vision, and build the future.
            Join thousands of entrepreneurs who are already making their mark.
          </p>
        </div>
      </section>

      {/* DISCOVER PEOPLE SECTION */}
      <section className="flex flex-col items-center w-full px-4 md:px-8 lg:px-16 mt-16 md:mt-20">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
          Discover People
        </h1>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg font-light text-center mt-4 md:mt-6 max-w-2xl">
          Find entrepreneurs, investors, and innovators in your field.
        </p>

        <div className="mt-8 sm:mt-10 w-full max-w-2xl">
          <Searchcomponent query={query} />
        </div>
      </section>

      {/* STARTUPS SECTION */}
      <section className="w-full  md:px-8 lg:px-16 mt-16 md:mt-20 flex flex-col items-center px-32">
        <p className="text-lg sm:text-xl md:text-2xl font-bold self-start">
          {query ? `Search results for "${query}"` : "Trending Startups"}
        </p>

        <ul>
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post._id} posts={post} />
            ))
          ) : (
            <p>No results found</p>
          )}
        </ul>
      </section>
    </div>
  );
}
