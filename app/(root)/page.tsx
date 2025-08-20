export default function Home() {
  return (
    <>
      <div className="flex items-center h-screen w-full flex-col bg-white ">
        <div className="my-20 font-bold  text-black text-6xl  w-1/2">
          <h2 className="text-center">Turn Your Ideas Into <br /> Reality</h2>
          <div className="text-gray-500 text-center text-xl mt-10 font-light">
            Connect with investors, showcase your vision, and build the future. Join thousands of entrepreneurs who are already making their mark.
          </div>
        </div>

        <div className="flex flex-col items-center">
            <h1 className="text-black text-2xl font-bold text-center ">Discover People</h1>
            <p className="text-lg font-light text-gray-500 mt-10">Find entrepreneurs, investors, and innovators in your field</p>


            <input type="search" placeholder="search by name , company , location or category... " className="w-2xl p-3.5 mt-8 text-black  bg-gray-200 border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"/>
             <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
        </div>
      </div>
    </>
  );
}
