import React from 'react';

const Spinner = () => {
    return (
        <div className='w-full text-center bg-black/10 backdrop-blur-md mt-2 rounded-lg py-5'>
            <button className="btn btn-circle btn-xl bg-black/25 border-0 loading"></button>
        </div>
    );
};

export default Spinner;