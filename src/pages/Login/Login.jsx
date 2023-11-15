import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import loginImg from '../../assets/others/authentication2.png'
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled ] = useState(true)
    const { signinUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    
    useEffect(()=>{
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

         // user SignIn firebase 
         signinUser(email, password)
         .then(result => {
             console.log(result.user);
             Swal.fire({
                 title: 'Success!',
                 text: 'Login Successfull',
                 icon: 'success',
                 confirmButtonText: 'Cool'
             })
             navigate(from, {replace:true});
             e.target.reset();
         })
         .catch(error => {
             console.log(error);
             Swal.fire({
                 title: 'warning!',
                 text: 'Invalid UserId or Password',
                 icon: 'warning',
                 confirmButtonText: 'Cool'
             })
         })
    }

    const handleValidateCaptcha = () =>{
        const user_captcha_value = captchaRef.current.value;

        if (validateCaptcha(user_captcha_value)==true) {
            setDisabled(false)
        }
        
   
    }

    return (
        <div >
            <div className="flex ml-40 gap-8 mb-20 p-12">
                <div className="">
                    <img className="w-[400px] h-[350px] my-16" src={loginImg} alt="" />
                </div>
                <div className="border lg:w-[500px] rounded-lg p-12 h-[500px]">
                    <h2 className="text-4xl text-center my-4 text-[#444444] font-bold">Login</h2>
                    <div>

                        <form onSubmit={handleLogin}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-medium">Email </span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-medium">Confirm Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            </div>

                            {/* Using Captcha  */}
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>

                                <input ref={captchaRef} type="text" name='captcha' placeholder="Type The Captcha" className="input input-bordered" required />

                                <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2'>Validate</button>

                            </div>

                            {/* <Link to='/login'> */}
                            <div className="form-control mt-6">
                                <button disabled={disabled} className="btn bg-[#D99904] text-white">LogIn</button>
                            </div>

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-base ml-40 text-center">Or Sign In with</a>
                            </label>
                        </form>

                        <div>

                            {/* <button onClick={handleGoogleSignIn} className="btn btn-outline bg-[#FF3811] text-white w-full mb-3 mt-3">
                            Google
                        </button> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;