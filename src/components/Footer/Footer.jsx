import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-black flex flex-col min-h-[10vh] items-center justify-center px-4 md:flex-row md:justify-between">
            <p className="text-white text-center text-sm my-2">We care about your entertainment. Copyright © 2019–2021 felix.com</p>
            <div className="bg-[url('/src/assets/pictures/credit-cards.png')] h-8 w-36 mb-2 bg-contain bg-no-repeat" />
        </footer>
    );
}
