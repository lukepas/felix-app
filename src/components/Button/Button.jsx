import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ text }) {
    return (
        <button
            type="button"
            className="text-white bg-red-600 py-2 px-10 font-bold rounded-lg"
        >
            {text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
};
