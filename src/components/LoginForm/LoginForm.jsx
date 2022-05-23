import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BUTTON_TEXT } from '../../constants/button';
import { ROUTE_REDERECT } from '../../constants/routeNames';
import movieRepository from '../../repositories/movie';
import Button from '../Button/Button';

export default function LoginForm() {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        const { value, name } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const response = movieRepository.loginUser(userData);
        if (!response.ok) setError(true);
    };

    return (
        <main className="min-h-[80vh] bg-black flex justify-center items-center bg-[url('/src/assets/pictures/login_bg.jpg')] bg-cover bg-no-repeat">
            <form
                className="flex text-center flex-col justify-center w-5/6 h-[430px] mt-8 bg-black-rgba rounded-md
             md:w-3/6 lg:w-2/6"
                onSubmit={handleSubmit}
            >
                <p className="text-white font-bold text-2xl">Sign in</p>
                <div className="flex flex-col items-center justify-center">
                    <input
                        type="text"
                        name="username"
                        value={userData.username}
                        className="w-5/6 md:w-3/6 rounded-md my-2 placeholder-gray-400 p-2"
                        placeholder="Email"
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        value={userData.password}
                        className="w-5/6 md:w-3/6 rounded-md my-2 placeholder-gray-400 p-2"
                        placeholder="Password"
                        onChange={handleChange}
                    />
                </div>
                {error && <p className="text-red-700">You&apos;ve entered wrong email or password</p>}
                <div className="text-center my-4">
                    <Button
                        text={BUTTON_TEXT.LOGIN}
                        type="submit"
                    />
                </div>
                <div>
                    <p className="text-gray-400">New to Felix?</p>
                    <Link to={ROUTE_REDERECT.LOGIN}>
                        <p className="text-white font-bold">Sign up now!</p>
                    </Link>
                </div>
            </form>
            <div />
        </main>
    );
}
