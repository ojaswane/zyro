import Animatetext from "../../components/components/Animatetext";
import Searchcomponent from "../../components/components/Searchcomponent";
import StartupCard from "../../components/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [

    {
      _createdAt: new Date().toISOString(),
      title: "Test Post",
      description: "This is a test post",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/049/191/168/small_2x/a-modern-workspace-featuring-advanced-technology-including-a-holographic-calendar-and-illuminated-data-streams-creating-an-innovative-and-dynamic-environment-for-productivity-photo.jpg",
      views: 10,
      author: { _id: 1 },
      _id: 1,
      categories: "Tech",
      name: "Test Author"
    },
  ];

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center w-full px-4 md:px-8 lg:px-16 my-16 md:my-20">
        <div className="w-full max-w-4xl text-center">
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-lobster font-bold leading-tight">
            Turn Your Ideas Into
            <div className="w-full">
              <Animatetext />
            </div>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl font-light mt-6 md:mt-10 px-2">
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

        <ul className="mt-8 md:mt-10 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full px-50">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} posts={post} />
            ))
          ) : (
            <p className="text-gray-500">No results found</p>
          )}
        </ul>
      </section>
    </div>
  );
}
