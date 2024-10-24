
import { useForm } from 'react-hook-form'
import '../../style/Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };
    return (
        <div className="Logn_bg">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 pt-5 ps-4 Login_col_bg">
                        <h1 className='bg-logotext-custom'>Dashp<span className='text-dark'>Stack</span></h1>
                        <div className="text-center mt-5 pt-5">
                            <img className='Loginimg mt-5' src="./Loginimg.png" alt="Loginimg" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-8 mx-auto Login_col_bg_1 d-flex flex-column align-items-center justify-content-center">
                        <h1 className='bg-logotext-custom'>Dash<span className='text-dark'>Stack</span></h1>
                        <form className="bg-white p-5 shadow-sm rounded Login_From" onSubmit={handleSubmit(onSubmit)}>
                            <h2 className="mb-4">Login</h2>

                            <div className="form-group mb-3">
                                <label className='fw-semibold'>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter Your Email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: "Invalid email address"
                                        }
                                    })}
                                />
                                {errors.email && <p className="text-danger mt-1">{errors.email.message}</p>}
                            </div>

                            <div className="form-group mb-3">
                                <label className='fw-semibold'>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter Password"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters long"
                                        },
                                        maxLength: {
                                            value: 20,
                                            message: "Password cannot exceed 20 characters"
                                        }
                                    })}
                                />
                                {errors.password && <p className="text-danger mt-1">{errors.password.message}</p>}
                            </div>

                            <div className="d-flex align-items-center justify-content-between">
                                <div className="form-check mb-4">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="rememberMe"
                                        {...register("rememberMe")}
                                    />
                                    <label className="form-check-label text_sm_media" htmlFor="rememberMe">Remember Me</label>
                                </div>
                                <div className="mb-4 text-end">
                                    <a href="/forgot-password" className="text-decoration-none bg-logotext-custom text_sm_media">Forgot Password?</a>
                                </div>
                            </div>

                            <div className="text-center mb-3">
                                <button type="submit" className="btn fw-medium Login_button w-100">Sign In</button>
                            </div>
                            <div className="text-center">
                                <p>Don’t have an account? <Link to="/registration" className="text-decoration-none bg-logotext-custom">Registration</Link></p>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login