// import React, { useContext } from 'react';
import useCart from '../../../hooks/useCart';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
// import { AuthContext } from '../../../providers/AuthProvider';

const Cart = () => {
    const [cart, refetch] = useCart()
    console.log(cart);
    // const {loading } = useContext(AuthContext);
    const totalPrice = cart?.reduce((total, item) => total + item.price, 0)
    const axiosSecure = useAxiosSecure()

    const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              
                axiosSecure.delete(`/carts/${id}`)
                .then(res =>{
                    console.log(res.data);
                    if(res.data.deletedCount>0){
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    }
                })
            }
          });
    }

    return (
        <div className=''>
            <div className='flex justify-evenly mb-8'>
                <h2 className='text-4xl '>Items {cart.length}</h2>
                <h2 className='text-4xl '>Total Price {totalPrice}</h2>
                <button className='btn btn-secondary'>Pay</button>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            cart.map((item, index)=> <tr key={item._id}>
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </td>
                                <td>
                                   {item.name}
                                </td>
                                <td>$ {item.price}</td>
                                <th>
                                    <button onClick={()=>handleDelete(item._id)} className="btn btn-secondary btn-xs">Delete </button>
                                </th>
                            </tr>)
                        }
                        
                        {/* row 2 */}
                        

                    </tbody>
                   

                </table>
            </div>
        </div>
    );
};

export default Cart;