import React from 'react'
import { BarLoader } from 'react-spinners'

const loading = () => {
    return (
        <div>
            {/* <PuffLoader /> */}

            <div className='flex justify-center items-center h-screen'>
                <BarLoader />
            </div>
        </div>
    )
}

export default loading
