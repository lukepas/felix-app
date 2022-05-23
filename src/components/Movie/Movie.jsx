import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BUTTON_TEXT } from '../../constants/button';
import localStorageItems from '../../constants/localStorageItems';
import movieRepository from '../../repositories/movie';
import Button from '../Button/Button';

export default function Movie() {
    const [movie, setMovie] = useState({});
    const authToken = localStorage.getItem(localStorageItems.authToken);
    const { id } = useParams();

    const getMovie = async () => {
        const response = await movieRepository.getById(id, authToken);
        const result = await response.json();
        setMovie(result);
    };

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <section className="flex flex-col justify-center items-center min-h-[80vh] md:flex-row">
            <div className="h-[390px] md:h-[500px]">
                <img
                    src={movie.image}
                    alt={movie.title}
                    className="h-full w-full object-cover p-4"
                />
            </div>
            <div className="md:w-2/6 md:max-h-96 md:m-4">
                <h2 className="text-white text-center font-bold text-2xl">{movie.title}</h2>
                <p className="text-white m-4 text-left">{movie.description}</p>
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
