import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { BUTTON_TEXT } from '../../constants/button';
import { ROUTE_REDERECT } from '../../constants/routeNames';

export default function Header() {
    return (
        <header className="flex justify-between bg-black items-center min-h-[10vh]">
            <div className="m-4">
                <Link to={ROUTE_REDERECT.DEFAULT}>
                    <h3 className="text-5xl font-medium text-red-600">F</h3>
                </Link>
            </div>
            <div className="m-4">
                <Link to={ROUTE_REDERECT.LOGIN}>
                    <Button text={BUTTON_TEXT.LOGIN} />
                </Link>
            </div>
        </header>
    );
}
