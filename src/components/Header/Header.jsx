import React from 'react';
import Button from '../Button/Button';
import { BUTTON_TEXT } from '../../constants/button';

export default function Header() {
    return (
        <header className="flex justify-between bg-black items-center h-16">
            <div className="m-4">
                <h3 className="text-5xl font-medium text-red-600">F</h3>
            </div>
            <div className="m-4">
                <Button text={BUTTON_TEXT.LOGIN} />
            </div>
        </header>
    );
}
