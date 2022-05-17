import React from 'react';
import { BUTTON_TEXT } from '../../constants/button';
import Button from '../Button/Button';

export default function Movie() {
    const movie = {
        title: 'Avengers: Endgame',
        image: 'https://image.tmdb.org/t/p/original/9lFKBtaVIhP7E2Pk0IY1CwTKTMZ.jpg',
        description: "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
        id: 'cbcd32-Avengers:-4f12eb',
        video: 'https://www.youtube.com/embed/TcMBFSGVi1c',
        free: true,
    };

    return (
        <section className="flex flex-col justify-center items-center min-h-screen md:flex-row">
            <div className="h-96">
                <img
                    src={movie.image}
                    alt={movie.title}
                    className="h-full w-full object-cover p-4"
                />
            </div>
            <div className="md:w-2/6 md:max-h-96 md:m-4">
                <h2 className="text-white text-center font-bold text-2xl">{movie.title}</h2>
                <p className="text-white m-4 text-center">{movie.description}</p>
                <div className="lg:flex lg:justify-center lg:items-center">
                    <div className="text-center m-4">
                        <Button text={BUTTON_TEXT.ADD_TO_FAVORTIES} />
                    </div>
                    <div className="text-center m-4">
                        <Button text={BUTTON_TEXT.WATCH} />
                    </div>
                </div>
            </div>
        </section>
    );
}
