import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const SocialLogin = () => {

    const {googleSignIn} = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate();

    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/')
            })
        })
    }
    return (
        <div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn btn-outline bg-[#FF3811] text-white w-full mb-3 mt-3">
                    Google
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;