import React from 'react';
import { BUTTON_TEXT } from '../../constants/button';
import Button from '../Button/Button';

export default function LoginForm() {
    return (
        <main className="h-screen bg-black flex justify-center items-center">
            <form className="flex text-center flex-col align-center justify-center w-5/6 h-96 mt-8 bg-zinc-500 rounded-md
             md:w-3/6 lg:w-2/6"
            >
                <label htmlFor="username" className="text-2xl my-4">
                   Username
                    <input
                        type="text"
                        name="username"
                        className="w-5/6 rounded-md my-2 outline-red-600"
                    />
                </label>
                <label htmlFor="password" className="text-2xl my-4 ">
                   Password
                    <input
                        type="password"
                        name="password"
                        className="w-5/6 rounded-md my-2 outline-red-600"
                    />
                </label>
                <div className="text-center my-4">
                    <Button text={BUTTON_TEXT.LOGIN} />
                </div>
            </form>
        </main>
    );
}
