
import { useState } from 'react';
import registration from '../../../public/registration.png'
import { useForm } from 'react-hook-form'
import "../../style/Registration.css"

const Registration = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
    
 

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };
    return (
        <div className="Logn_bg">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 pt-5 ps-4 Login_col_bg">
                        <h1 className='bg-logotext-custom'>Dash<span className='text-dark'>Stack</span></h1>
                        <div className="text-center mt-5 pt-5">
                            <img className='Loginimg mt-5' src={registration} alt="Loginimg" />
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center justify-content-center p-4">
                        <div className="registration-form">
                            <h2 className="text-center mb-4">Registration</h2>
                            <form onSubmit={handleSubmit}>
                                {/* Name Row */}
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>First Name<span className="required">*</span></label>
                                            <input 
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter First Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Last Name<span className="required">*</span></label>
                                            <input 
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Last Name"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Row */}
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Email Address<span className="required">*</span></label>
                                            <input 
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter Email Address"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Phone Number<span className="required">*</span></label>
                                            <input 
                                                type="tel"
                                                className="form-control"
                                                placeholder="91+"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Location Row */}
                                <div className="row mb-3">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Country<span className="required">*</span></label>
                                            <input 
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Country"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>State<span className="required">*</span></label>
                                            <input 
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter State"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>City<span className="required">*</span></label>
                                            <input 
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter City"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Society Selection */}
                                <div className="form-group mb-3">
                                    <label>Select Society<span className="required">*</span></label>
                                    <select className="form-select">
                                        <option value="">Select Society</option>
                                        <option value="1">Shantigram residency</option>
                                        <option value="2">Russett House Park</option>
                                        <option value="3">Saurya residency</option>
                                        <option value="4">Shamruddh Avenyu</option>
                                        <option value="5">Utsav society</option>
                                        <option value="6">Murlidhar</option>
                                        <option value="7">Shree Sharanam</option>
                                        <option value="8">vasantnagar township</option>
                                    </select>
                                </div>

                                {/* Password Row */}
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <div className="form-group password-group">
                                            <label>Password<span className="required">*</span></label>
                                            <div className="input-group">
                                                <input 
                                                    type={passwordShown ? "text" : "password"}
                                                    className="form-control"
                                                    placeholder="Enter Password"
                                                />
                                                <button 
                                                    type="button"
                                                    className="btn btn-outline-secondary"
                                                    onClick={() => setPasswordShown(!passwordShown)}
                                                >
                                                    {passwordShown ? '🙈' : '👁️'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group password-group">
                                            <label>Confirm Password<span className="required">*</span></label>
                                            <div className="input-group">
                                                <input 
                                                    type={confirmPasswordShown ? "text" : "password"}
                                                    className="form-control"
                                                    placeholder="Confirm Password"
                                                />
                                                <button 
                                                    type="button"
                                                    className="btn btn-outline-secondary"
                                                    onClick={() => setConfirmPasswordShown(!confirmPasswordShown)}
                                                >
                                                    {confirmPasswordShown ? '🙈' : '👁️'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Terms and Conditions */}
                                <div className="form-check mb-3">
                                    <input 
                                        type="checkbox"
                                        className="form-check-input"
                                        id="terms"
                                    />
                                    <label className="form-check-label" htmlFor="terms">
                                        I agree to all the <a href="/terms" className="text-orange">Terms</a> and{' '}
                                        <a href="/privacy" className="text-orange">Privacy Policies</a>
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <button type="submit" className="btn btn-primary w-100 mb-3">
                                    Create Society
                                </button>

                                {/* Login Link */}
                                <p className="text-center">
                                    Already have an account? <a href="/" className="text-orange">Login</a>
                                </p>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Registration








