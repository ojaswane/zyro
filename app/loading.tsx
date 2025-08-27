import React from 'react'
import { BarLoader } from 'react-spinners'

const loading = () => {
    return (
        <div>
            {/* <PuffLoader /> */}

            <div className='flex justify-center items-center h-screen bg-black  '>
                <BarLoader color="#fff6f6" />
            </div>
        </div>
    )
}

export default loading
