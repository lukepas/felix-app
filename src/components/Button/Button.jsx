import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ text, onClick, type }) {
    return (
        <button
            // eslint-disable-next-line react/button-has-type
            type={type}
            onClick={onClick}
            className="text-white bg-red-600 py-2 px-10 font-bold rounded-lg"
        >
            {text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
};

Button.defaultProps = {
    onClick: () => {},
    type: 'button',
};
