import React, { Suspense, use } from 'react';
import Categories from '../Categories/Categories';

const categoryPromise = fetch(`categories.json`).then(res => res.json());

const LeftAside = () => {

    const categories = use(categoryPromise);
    console.log(categories);
    



    return (
        <div>
            <h1 className='font-bold text-xl uppercase mb-4'>Categories ({ categories.length})</h1>
            <div>
                <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                    <div className='grid grid-cols-1 gap-3'>
                    {
                        categories.map(category => <Categories category={category}></Categories>)
                    }
                        
                    </div>
                </Suspense>
            </div>
        </div>
    );
};

export default LeftAside;