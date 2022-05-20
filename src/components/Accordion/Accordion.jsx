/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Accordion({ title, content }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="">
            <div
                className="flex justify-between bg-zinc-800 items-center mb-2"
                onClick={() => setIsActive(!isActive)}
            >
                <div className="text-white text-xl h-14 flex items-center pl-8 font-bold">{title}</div>
                <div className="text-white text-xl h-14 flex items-center pr-8">{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className="text-white text-left bg-zinc-800 pl-8 mb-2 p-4">{content}</div>}
        </div>
    );
}

Accordion.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};
