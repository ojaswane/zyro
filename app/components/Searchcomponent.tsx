import Form from 'next/form';
import SearchFormreset from './SearchFormreset';

function Searchcomponent( query: { query: string }) {
  return (


    <Form action="/"  className="w-2xl  mt-8 text-black bg-gray-200 border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-gray-500">
        <input 
            name='query'
            defaultValue= ""
            placeholder='Search for people, ideas, or projects...'
            className='w-full h-full p-3.5'
        />

        <div className='flex gap-2 h-12 absolute w-96 right-20 top-170  justify-end items-center '> 
                {query && <SearchFormreset />}

            <button type="submit" className=" flex items-center justify-center bg-black text-white rounded-full h-8 w-8 mx-2 "> 
                s
            </button>
        </div> 
    </Form>
  )
}

export default Searchcomponent

//  className="w-2xl p-3.5 mt-8 text-black  bg-gray-200 border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"