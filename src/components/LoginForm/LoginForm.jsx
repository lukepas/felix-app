import React from 'react';
import { Link } from 'react-router-dom';
import { BUTTON_TEXT } from '../../constants/button';
import { ROUTE_REDERECT } from '../../constants/routeNames';
import Button from '../Button/Button';

export default function LoginForm() {
    return (
        <main className="min-h-[80vh] bg-black flex justify-center items-center bg-[url('/src/assets/pictures/hero-pattern.jpg')] bg-cover bg-no-repeat">
            <form className="flex text-center flex-col justify-center w-5/6 h-[430px] mt-8 bg-black-rgba rounded-md
             md:w-3/6 lg:w-2/6"
            >
                <p className="text-white font-bold text-2xl">Sign in</p>
                <div className="flex flex-col items-center justify-center">
                    <input
                        type="text"
                        name="username"
                        className="w-5/6 md:w-3/6 rounded-md my-2 outline-red-600 placeholder-gray-400"
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        name="password"
                        className="w-5/6 md:w-3/6 rounded-md my-2 outline-red-600 placeholder-gray-400"
                        placeholder="Password"
                    />
                </div>
                <div className="text-center my-4">
                    <Button text={BUTTON_TEXT.LOGIN} />
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
