import Form from 'next/form';
import SearchFormreset from '../../components/ui/SearchFormreset';
import { Search } from 'lucide-react';
function Searchcomponent(query: { query: string }) {
  return (


    <Form action="/" className="w-2xl  mt-8 text-black bg-gray-200 border-gray-400 rounded focus:outline-none focus:ring-0 ">
      <div className='flex '>
        <input
          name='query'
          defaultValue=""
          placeholder='Search for people, ideas, or projects...'
          className=' w-full h-full p-3.5'
        />

        {query && <SearchFormreset />}
        <button type="submit" className='' >
          <Search className='size-5 mx-3' />
        </button>
      </div>
    </Form>
  )
}

export default Searchcomponent
