import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BUTTON_TEXT } from '../../constants/button';
import localStorageItems from '../../constants/localStorageItems';
import movieRepository from '../../repositories/movie';
import Button from '../Button/Button';
import { ROUTE_REDERECT } from '../../constants/routeNames';

export default function Movie() {
    const [movie, setMovie] = useState({});
    const [watchMovie, setWatchMovie] = useState(false);
    const authToken = localStorage.getItem(localStorageItems.authToken);
    const navigate = useNavigate();
    const { id } = useParams();

    const getMovie = async () => {
        const response = await movieRepository.getById(id, authToken);
        if (response.ok) {
            const result = await response.json();
            return setMovie(result);
        }
        return navigate(ROUTE_REDERECT.NOT_FOUND);
    };

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <section className="flex flex-col justify-center items-center min-h-[80vh] md:flex-row relative">
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
                        <Button
                            text={BUTTON_TEXT.WATCH}
                            onClick={() => setWatchMovie(!watchMovie)}
                        />
                    </div>
                </div>
            </div>
            {watchMovie && <div
                className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] min-h-full bg-black-rgba flex flex-col justify-center items-center "
                aria-hidden="true"
                onClick={() => setWatchMovie(!watchMovie)}
            >
                <iframe
                    className="w-[100vw] md:w-[80vw] h-[50vh]"
                    title={movie.title}
                    src={movie.video}
                    frameBorder="0"
                    allowFullScreen
                />
            </div>}
        </section>
    );
}
