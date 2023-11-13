
const FoodCard = ({item}) => {
    console.log(item);
    const {image, recipe, name,price} = item;
    return (
        <div className="mb-4">
            <div className="max-w-xs rounded-md shadow-md bg-white text-black  h-[600px]">
                <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <p className="bg-slate-800 text-white absolute -mt-64 p-3">${price}</p>
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl text-black font-semibold tracki">{name}</h2>
                        <p className="text-black ">{recipe}</p>
                    </div>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-[#D99904] text-white">Add to Cart</button>
                </div>
            </div>
          

        </div>
    );
};

export default FoodCard;