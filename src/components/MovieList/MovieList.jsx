import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import MovieCard from '../MovieCard/MovieCard';
import movieRepository from '../../repositories/movie';
import { BUTTON_TEXT } from '../../constants/button';
import { ROUTE_REDERECT } from '../../constants/routeNames';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

export default function MovieList() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    if (isLoading) {
        return (
            <div className="min-h-[50vh] flex items-center justify-center">
                <LoadingSpinner />
            </div>
        );
    }

    const getMovieList = () => {
        try {
            const response = movieRepository.getAll;
            setMovies(response);
        } catch (err) {
            if (!err.ok) {
                setError(true);
            }
        } finally {
            setLoading(false);
        }
    };

    if (error) {
        navigate(ROUTE_REDERECT.LOGIN);
    }

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
                        description={movie.description}
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
