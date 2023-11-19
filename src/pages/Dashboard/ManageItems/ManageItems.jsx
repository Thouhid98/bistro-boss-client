import Swal from "sweetalert2";
import Sectiontitle from "../../../components/Sectiontitle/Sectiontitle";
import useMenu from "../../../hooks/useMenu";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    console.log(menu);
    const axiosSecure = useAxiosSecure()

    const handleDeleteItem = (id) => {
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

                axiosSecure.delete(`/menu/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
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
        <div>
            <Sectiontitle heading="Manage Items" subHeading='---Hurry Up---'></Sectiontitle>
            <div>

                <div className=''>
                    {/* <div className='flex justify-evenly mb-8'>
                <h2 className='text-4xl '>Image </h2>
                <h2 className='text-4xl '>Total Price </h2>
                <button className='btn btn-secondary'>Pay</button>
            </div> */}
                    <h2>Total Items: {menu.length}</h2>
                    <div className="overflow-x-auto">
                        <table className="table my-4">
                            {/* head */}
                            <thead>
                                <tr className="text-xl text-gray font-semibold">
                                    <th>
                                        #
                                    </th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}

                                {
                                    menu.map((item, index) => <tr key={item._id}>
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

                                        <Link to={`/dashboard/updateitem/${item._id}`}>
                                            <th>
                                                <button className="btn btn-secondary btn-sm">Update</button>
                                            </th>
                                        </Link>

                                        <th>
                                            <button onClick={() => handleDeleteItem(item._id)} className="btn btn-secondary btn-sm">Delete </button>
                                        </th>
                                    </tr>)
                                }

                                {/* row 2 */}


                            </tbody>


                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;