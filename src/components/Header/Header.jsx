import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { BUTTON_TEXT } from '../../constants/button';
import localStorageItems from '../../constants/localStorageItems';
import { ROUTE_REDERECT } from '../../constants/routeNames';
import userServices from '../../services/user';

export default function Header() {
    const navigate = useNavigate();
    const isUserLoggedIn = userServices.isLoggedIn();

    const handleLoginClick = () => {
        if (isUserLoggedIn) {
            localStorage.removeItem(localStorageItems.authToken);
            return navigate(ROUTE_REDERECT.DEFAULT);
        }
        return navigate(ROUTE_REDERECT.LOGIN);
    };

    return (
        <header className="flex justify-between bg-black items-center min-h-[10vh]">
            <div className="m-4">
                <Link to={isUserLoggedIn ? ROUTE_REDERECT.MOVIES : ROUTE_REDERECT.DEFAULT}>
                    <h3 className="text-5xl font-medium text-red-600">F</h3>
                </Link>
            </div>
            <div className="m-4">
                <Button
                    text={isUserLoggedIn ? BUTTON_TEXT.LOGOUT : BUTTON_TEXT.LOGIN}
                    onClick={handleLoginClick}
                />
            </div>
        </header>
    );
}
