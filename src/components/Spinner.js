import React from 'react'
import loading from './hug.gif'

const Spinner = () => {

    return (
        <div className='text-center my-5'>
            <img className='my-3' src={loading} alt="loading" style={{ height: '50px' }} />
        </div>
    )
}

export default Spinner
