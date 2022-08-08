import React from 'react';
import { useForm } from 'react-hook-form';

const Signup = () => {
    const { register, handleSubmit, formState: { errors }, trigger, reset } = useForm();

    const onSubmitParam = data => {
        console.log(data)
        reset();

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
                <small className='text-[#FF4B2B] custom_font_size'>{errors?.name?.message}</small>


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
                <small className='text-[#FF4B2B] custom_font_size'>{errors?.email?.message}</small>


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
                <small className='text-[#FF4B2B] custom_font_size'>{errors?.password?.message}</small>


                <button type="submit" className="form_btn">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;