import React from 'react';
import { useForm } from 'react-hook-form';

const Signup = () => {
    const { register, handleSubmit, formState: { errors }, trigger } = useForm();

    const onSubmitParam = async data => {
        console.log(data)

    }
    return (
        <div className="sign-up-container">
            <form onSubmit={handleSubmit(onSubmitParam)}>
                <h1>Create Account</h1>
                <div className="social-links">
                    <div>
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                    </div>
                    <div>
                        <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                    </div>
                    <div>
                        <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                    </div>
                </div>
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name"
                    {...register("name", {
                        required: true,
                        minLength: {
                            value: 3, message: 'Minimum 3 character required'
                        }
                    })}

                    onKeyUp={() => {
                        trigger('name')
                    }}
                />
                {/* {errors?.firstname?.type === "required" && <p className='text-red-500 text-sm'>First Name is required</p>}
                <p className='text-red-500 text-sm'>{errors?.firstname?.message}</p> */}


                <input type="email" placeholder="Email"
                    {...register("email", {
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Please enter a valid Email"
                        }
                    })}
                    onKeyUp={(e) => {
                        trigger('email')
                    }}
                />
                {/* <p className='text-red-500 text-sm'>{errors?.email?.message}</p> */}



                <input type="password" placeholder="Password"
                    {...register('password', {
                        required: 'Password is required',
                        pattern: {
                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                            message: "Minimum eight characters, at least one letter and one number"
                        }
                    })}
                    onKeyUp={() => {
                        trigger('password')
                    }}
                />
                {/* <p className='text-red-500 text-sm'>{errors?.password?.message}</p> */}


                <button type="submit" className="form_btn">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;