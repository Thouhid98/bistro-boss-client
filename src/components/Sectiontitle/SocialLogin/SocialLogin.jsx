import useAuth from "../../../hooks/useAuth";


const SocialLogin = () => {
    const {googleSignIn} = useAuth()
    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user);
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