import React from 'react';

const Sectiontitle = ({heading, subHeading}) => {
    return (
        <div className='w-4/12 mx-auto '>
            <p className='text-[#D99904] text-center mb-2'>{subHeading }</p>
            <h3 className='text-5xl font-semibold mb-5 border-y-4 p-3 text-center'>{heading}</h3>
        </div>
    );
};

export default Sectiontitle;