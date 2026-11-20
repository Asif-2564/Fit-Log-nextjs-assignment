import React from 'react';
import { Exercise } from '@/types/allFitType';
import AllFitCard from './AllFitCard';

const AllFitData = async({fitData}:{fitData:Exercise[]}) => {

    return (
        <div className="continer mx-auto mt-10 mb-10">
            <h1 className="text-3xl">
                THE LIBRARY
            </h1>
            <p className='text-gray-400'>Twelve lifts covering every major muscle group.</p>
            <div>
                <h1>Product showcasing here</h1>
                <div className='grid grid-cols-3 gap-2'>
                    {
                    fitData.map(
                        fitData=><AllFitCard key={fitData.id} data={fitData}/>
                    )
                    }
                </div>

            </div>
        </div>
        
    );
};

export default AllFitData;