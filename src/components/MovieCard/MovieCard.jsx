import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../storage/movie';
import Button from '../Button/Button';
import { BUTTON_TEXT } from '../../constants/button';
import { ROUTE_REDERECT } from '../../constants/routeNames';
import movieServices from '../../services/movie';

export default function MovieCard({
    title, description, image, id,
}) {
    const { list } = useSelector((state) => state.movie);
    const dispatch = useDispatch();
    const isFavorite = movieServices.isMovieFavorite(list, id);

    return (
        <div className="bg-zinc-800 h-96 w-64">
            <Link to={`${ROUTE_REDERECT.SINGLE_MOVIE}${id}`}>
                <div className="h-1/2">
                    <img
                        className="h-full w-full object-cover"
                        src={image}
                        alt={title}
                    />
                </div>
            </Link>
            <div>
                <Link to={`${ROUTE_REDERECT.SINGLE_MOVIE}${id}`}>
                    <h4 className="text-white mx-2 text-left font-medium text-xl my-2">{title}</h4>
                    <p className="text-white mx-2 text-left text-sm">{description}</p>
                </Link>
            </div>
            <div className="text-center my-4">
                <Button
                    onClick={() => (isFavorite ? dispatch(removeFromFavorites(id))
                        : dispatch(addToFavorites(id)))}
                    text={isFavorite ? BUTTON_TEXT.REMOVE_FROM_FAVORITES
                        : BUTTON_TEXT.ADD_TO_FAVORTIES}
                />
            </div>
        </div>
    );
}

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};
