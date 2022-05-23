import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { BUTTON_TEXT } from '../../constants/button';
import { ROUTE_REDERECT } from '../../constants/routeNames';

export default function MovieCard({
    title, description, image, id,
}) {
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
                    <h4 className="text-white text-center font-medium text-xl my-2">{title}</h4>
                    <p className="text-white mx-2 text-center text-sm">{description}</p>
                </Link>
            </div>
            <div className="text-center my-4">
                <Button text={BUTTON_TEXT.ADD_TO_FAVORTIES} />
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
