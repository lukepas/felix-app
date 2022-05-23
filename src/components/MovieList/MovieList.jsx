import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import MovieCard from '../MovieCard/MovieCard';
import movieRepository from '../../repositories/movie';
import textServices from '../../services/text';
import localStorageItems from '../../constants/localStorageItems';
import { BUTTON_TEXT } from '../../constants/button';

export default function MovieList() {
    const [movies, setMovies] = useState([]);
    const authToken = localStorage.getItem(localStorageItems.authToken);

    const getMovieList = async () => {
        const response = await movieRepository.getAll(authToken);
        const result = await response.json();
        setMovies(result);
    };

    useEffect(() => {
        getMovieList();
    }, []);

    return (
        <>
            <div className="p-4 bg-black grid justify-center items-center gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-screen-xl mx-auto">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.title}
                        title={movie.title}
                        image={movie.image}
                        description={textServices.slicedDescription(movie.description)}
                        id={movie.id}
                    />
                ))}
            </div>
            <div className="text-center">
                <Button text={BUTTON_TEXT.GET_MORE_CONTENT} />
            </div>
        </>
    );
}
