import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const FoodCard = ({item}) => {
    const { user } = useAuth();
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()
    // console.log(item);
    const {_id, image, recipe, name, price} = item;
    

    const handleAddToCart = food =>{
        if(user && user.email){
            console.log(user.email, food);
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                price,
                image
            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    //   Refatch the cart 
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                    
                    
                }
            })


        }
        else{
            Swal.fire({
                title: "Are you sure to add this?",
                text: "Please Login",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state:{from:location}});
                }
              });
        }
    }

    
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
                    <button onClick={()=> handleAddToCart(item)} className="btn btn-outline bg-slate-800 btn-warning border-0 border-b-4">Add To Cart</button>

                </div>
            </div>
          

        </div>
    );
};

export default FoodCard;