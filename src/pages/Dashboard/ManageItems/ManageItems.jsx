import Sectiontitle from "../../../components/Sectiontitle/Sectiontitle";
import useMenu from "../../../hooks/useMenu";

const ManageItems = () => {
    const [menu] = useMenu();
    console.log(menu);

    const handleDeleteItem = (item)=>{

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
                            menu.map((item, index)=> <tr key={item._id}>
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
                                    <button className="btn btn-secondary btn-sm">Update</button>
                                </th>
                                <th>
                                    <button onClick={()=>handleDeleteItem(item)} className="btn btn-secondary btn-xs">Delete </button>
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