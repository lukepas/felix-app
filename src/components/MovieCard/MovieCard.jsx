import React from 'react';
import PropTypes from 'prop-types';
import { slicedDescription } from '../../services/text';
import Button from '../Button/Button';
import { BUTTON_TEXT } from '../../constants/button';

export default function MovieCard({ title, description, image }) {
    return (
        <div className="bg-zinc-800 w-80">
            <div className="h-96">
                <img
                    className="h-full w-full object-cover"
                    src={image}
                    alt={title}
                />
            </div>
            <div>
                <h4 className="text-white text-center font-medium text-xl my-2">{title}</h4>
                <p className="text-white mx-2 text-center text-sm">{slicedDescription(description)}</p>
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
};
