import React from 'react';
import { BUTTON_TEXT } from '../../constants/button';
import Button from '../Button/Button';

export default function Hero() {
    return (
        <section className="bg-[url('/src/assets/pictures/hero-pattern.jpg')] h-96 bg-cover bg-no-repeat">
            <div className="flex flex-col items-center content-center justify-center h-full">
                <h4 className="text-2xl text-white font-semibold m-4">Wanna more Content?</h4>
                <Button text={BUTTON_TEXT.GET_ACCESS} />
            </div>
        </section>
    );
}
