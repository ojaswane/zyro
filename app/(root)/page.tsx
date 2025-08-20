import Image from "next/image";

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


            <input type="search" placeholder="Search " name="" id=""  className="w-96 p-3 mt-6 text-black border-3  border-gray-400 rounded focus:border-gray-400 "/>
        </div>
      </div>
    </>
  );
}
  