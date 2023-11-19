import { useForm } from "react-hook-form";
import Sectiontitle from "../../../components/Sectiontitle/Sectiontitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const Additems = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic()
    const axisoSecure = useAxiosSecure()
    const onSubmit = async(data) => {
        console.log(data)
        // image upload to Imagebb and get the url 
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
        if(res.data.success){
            // Now send the data to server 
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axisoSecure.post('/menu', menuItem)
            console.log(menuRes.data);
            if(menuRes.data.acknowledged == true){
                // show success message 
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log(res.data);
    }
    return (
        <div>
            <Sectiontitle heading='Add Items' subHeading="---What's New ---"></Sectiontitle>

            <div className="ml-8 mb-20 bg-gray-100 p-10 rounded-xl">
                <form onSubmit={handleSubmit(onSubmit)} className="">

                    <div>
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>

                        </label>
                        <input {...register("name")} type="text" placeholder="Recipe Name" className="input input-bordered w-[850px] " required />
                    </div>

                    <div className="flex gap-5">
                        {/* Category  */}
                        <div>
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select {...register("category")}
                                className="select select-bordered w-[415px] "required
                            >
                                <option disabled selected>Select a Category</option>
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
                            <input {...register("price")} type="number" placeholder="Price" className="input input-bordered w-[415px] " />
                        </div>
                    </div>

                    <div className="form-control w-[850px]">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>

                        </label>
                        <textarea {...register("recipe")} className="textarea textarea-bordered h-24" placeholder="Details" required></textarea>
                    </div>

                    <div className="my-4">
                        <input {...register("image")} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn btn-secondary">Add Items</button>
                </form>
            </div>
        </div>
    );
};

export default Additems;