import Animatetext from "../components/Animatetext";
import Searchcomponent from "../components/Searchcomponent";
export default async function Home({ searchParams }: { searchParams: Promise<{ query: string }> }) {
  const query = (await searchParams).query;

  return (
    <>
      <div className="flex items-center h-screen w-full flex-col bg-white ">
        <div className="my-20 font-bold  text-black text-6xl  w-1/2">
          <h2 className="text-center  font-lobster">Turn Your Ideas <Animatetext />
            <br /> Reality</h2>
          <div className="text-gray-500 text-center text-xl mt-10 font-light">
            Connect with investors, showcase your vision, and build the future. Join thousands of entrepreneurs who are already making their mark.
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-black text-2xl font-bold text-center ">Discover People</h1>
          <p className="text-lg font-light text-gray-500 mt-10">Find entrepreneurs, investors, and innovators in your field</p>

          <Searchcomponent query={query} />
        </div>

        <div >
          {/* <div className="bg-gray-200">ffv</div> */}
        </div>
      </div>
    </>
  );
}
