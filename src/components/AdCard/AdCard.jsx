import React from 'react';
import PropTypes from 'prop-types';
import RECENT_ADS from '../../constants/recentAds';
import numberServices from '../../services/number';

export default function AdCard({
    title, content, image, index,
}) {
    const cardLenght = index + 1;

    return (
        <>
            <div className="bg-zinc-800 h-3 w-full" />
            <section className="flex flex-col items-center justify-center h-[480px] md:flex-row">
                <div className="flex flex-col items-center justify-center ">
                    <h3 className="text-white text-center font-bold text-3xl m-2 md:w-[440px] md:text-5xl md:text-left">{title}</h3>
                    <p className="text-white text-center text-lg md:w-[440px] md:text-left md:font-bold">{content}</p>
                </div>
                <div className={`h-[250px] w-[370px] my-4 object-contain ${numberServices.isEven(cardLenght) && 'md:order-first'}`}>
                    <img src={image} alt="" className="h-full w-full" />
                </div>
            </section>
            <div>
                {RECENT_ADS.length === cardLenght && <div className="bg-zinc-800 h-3 w-full" /> }
            </div>
        </>
    );
}

AdCard.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
};
