import React from 'react';
import Results from './subviews/Results';
import Numbers from './subviews/Numbers';
import Operators from './subviews/Operators';

export default function Calculator(){
    return(
        <div className="max-w-sm mx-auto bg-black text-white p-6">
            <Results />
            <div className='flex flex-row mt-3 justify-between'>
                <Numbers />
                <Operators />
            </div>
        </div>
    )
}