import { useLoaderData } from "react-router-dom";
import Sectiontitle from "../../../components/Sectiontitle/Sectiontitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const UpdateItem = () => {
    const { _id, name, category, recipe, price } = useLoaderData();


    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic()
    const axisoSecure = useAxiosSecure()
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to Imagebb and get the url 
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            // Now send the data to server 
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axisoSecure.patch(`/menu/${_id}`, menuItem)
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                // show success message 
                // reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} updated to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log(res.data);
    }


    return (
        <div>
            <Sectiontitle heading='Update Items' subHeading='---Refresh Info---'></Sectiontitle>

            <div>

                <div className="ml-8 mb-20 bg-gray-100 p-10 rounded-xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="">

                        <div>
                            <label className="label">
                                <span className="label-text">Recipe Name*</span>

                            </label>
                            <input defaultValue={name}
                                {...register("name")} type="text" placeholder="Recipe Name" className="input input-bordered w-[850px] " required />
                        </div>

                        <div className="flex gap-5">
                            {/* Category  */}
                            <div>
                                <label className="label">
                                    <span className="label-text">Category*</span>
                                </label>
                                <select defaultValue={category}
                                    {...register("category")}
                                    className="select select-bordered w-[415px] " required
                                >
                                    <option disabled value='default' selected>Select a Category</option>
                                    <option value="salad">Salad</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="soup">Soup</option>
                                    <option value="dessert">Dessert</option>
                                    <option value="drinks">Drinks</option>
                                </select>
                            </div>


                            {/* Price  */}

                            <div>
                                <label className="label">
                                    <span className="label-text">Price*</span>

                                </label>
                                <input defaultValue={price}
                                    {...register("price")} type="number" placeholder="Price" className="input input-bordered w-[415px] " />
                            </div>
                        </div>

                        <div className="form-control w-[850px]">
                            <label className="label">
                                <span className="label-text">Recipe Details</span>

                            </label>
                            <textarea defaultValue={recipe}
                                {...register("recipe")} className="textarea textarea-bordered h-24" placeholder="Details" required></textarea>
                        </div>

                        <div className="my-4">
                            <input {...register("image")} type="file" className="file-input w-full max-w-xs" />
                        </div>

                        <button className="btn btn-secondary">Update Items</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateItem;