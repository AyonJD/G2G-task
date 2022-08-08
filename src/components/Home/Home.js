import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
    const user = useAuthState(auth);
    console.log(user)
    const navigate = useNavigate();

    return (
        <div className='md:flex justify-center mt-10 items-center text-center'>
            <h1 className='inline-block text-xl font-semibold text[] mr-6'>Welcome, <span className='text-[green] text-2xl font-semibold'>{user[0]?.displayName}</span></h1>
            <button className='inline-block btn btn-primary' onClick={() => {
                navigate('/');
                signOut(auth);
            }}>Log Out</button>
        </div>
    );
};

export default Home;