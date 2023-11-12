import React from 'react';

const Menuitem = ({item}) => {
    const {name, recipe, image, price} = item
    return (
        <div className='flex space-x-4'>
            <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[120px]' src={image} alt="" />
            <div>
                <h3 className='uppercase'>{name}-----------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-[#D99904]'>${price}</p>
            <p></p>
        </div>
    );
};

export default Menuitem;