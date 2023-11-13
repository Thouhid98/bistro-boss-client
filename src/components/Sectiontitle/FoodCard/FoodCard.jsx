
const FoodCard = ({item}) => {
    console.log(item);
    const {image, recipe, name,price} = item;
    return (
        <div className="mb-8 mt-6 mr-4">
            <div className="max-w-xs rounded-md shadow-md bg-white text-black  h-[550px]">
                <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <p className="bg-slate-800 text-white absolute -mt-64 p-3">${price}</p>
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-2xl w-[300px] text-black font-semibold tracki">{name}</h2>
                        <p className="text-black w-[280px] h-[70px]">{recipe}</p>
                    </div>
                    <button className="btn btn-outline bg-slate-800 btn-warning border-0 border-b-4">Add To Cart</button>

                </div>
            </div>
          

        </div>
    );
};

export default FoodCard;