import React from 'react';
import PropTypes from 'prop-types';
import RECENT_ADS from '../../constants/recentAds';

export default function AdCard({
    title, content, image, index,
}) {
    const totalCardLenght = index + 1;

    return (
        <section className="flex flex-col items-center">
            <div className="bg-zinc-800 h-3 w-full" />
            <div>
                <h3 className="text-white text-center font-bold text-3xl m-2">{title}</h3>
                <p className="text-white text-center text-lg">{content}</p>
            </div>
            <div className="h-[250px] w-[370px] my-4 object-contain">
                <img src={image} alt="" className="h-full w-full" />
            </div>
            {RECENT_ADS.length === totalCardLenght && <div className="bg-zinc-800 h-3 w-full" /> }
        </section>
    );
}

AdCard.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
};
