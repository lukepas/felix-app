import React from 'react';
import Button from '../Button/Button';
import MovieCard from '../MovieCard/MovieCard';
import { BUTTON_TEXT } from '../../constants/button';

export default function MovieList() {
    // const [movies, setMovies] = useState([]);

    // const getMovieList = async () => {
    //     const response = await movieRepository.getAll;
    //     setMovies(response);
    // };

    // useEffect(() => {
    //     getMovieList();
    // }, []);

    const movies = [
        {
            title: 'Avengers: Endgame',
            image: 'https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
            description: "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
            id: 'cbcd32-Avengers:-4f12eb',
            video: 'https://www.youtube.com/embed/TcMBFSGVi1c',
            free: true,
        },
        {
            title: 'Incredibles 2',
            image: 'https://image.tmdb.org/t/p/original/9lFKBtaVIhP7E2Pk0IY1CwTKTMZ.jpg',
            description: 'Elastigirl springs into action to save the day, while Mr. Incredible faces his greatest challenge yet – taking care of the problems of his three children.',
            id: 'af888b-Incredibles-0f6258',
            video: 'https://www.youtube.com/embed/i5qOzqD9Rms',
            free: true,
        },
    ];

    return (
        <div className="p-4 bg-black grid content-center justify-center gap-8">
            {movies.map((movie) => (
                <MovieCard
                    key={movie.title}
                    title={movie.title}
                    image={movie.image}
                    description={movie.description}
                />
            ))}
            <Button text={BUTTON_TEXT.GET_MORE_CONTENT} />
        </div>
    );
}
