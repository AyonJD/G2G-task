
import React from 'react';

const Login = () => {
    return (
        <div class="sign-in-container">
            <form>
                <h1>Sign In</h1>
                <div class="social-links">
                    <div>
                        <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    </div>
                    <div>
                        <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    </div>
                    <div>
                        <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                    </div>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button class="form_btn">Sign In</button>
            </form>
        </div>
    );
};

export default Login;
