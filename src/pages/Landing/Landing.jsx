import React from 'react';
import Hero from '../../components/Hero/Hero';
import Layout from '../../components/Layout/Layout';
import AdCard from '../../components/AdCard/AdCard';
import RECENT_ADS from '../../constants/recentAds';
import FAQ from '../../constants/faq';
import Accordion from '../../components/Accordion/Accordion';
import Button from '../../components/Button/Button';
import { BUTTON_TEXT } from '../../constants/button';

export default function Landing() {
    return (
        <Layout>
            <Hero />
            {RECENT_ADS.map((ad, i) => (
                <AdCard
                    key={ad.title}
                    title={ad.title}
                    content={ad.content}
                    image={ad.image}
                    index={i}
                />
            ))}
            <div>
                <h3 className="text-white text-center font-bold text-3xl m-2">Frequently Asked Questions</h3>
            </div>
            <div className="max-w-screen-md mx-auto">
                {FAQ.map((question) => (
                    <Accordion
                        key={question.title}
                        title={question.title}
                        content={question.content}
                    />
                ))}
                <div className="mt-8">
                    <p className="text-white text-center mx-2">Ready to watch? Enter your email to create or restart your membership.</p>
                    <form className="flex flex-col items-center">
                        <input
                            className="my-4 p-2 w-4/6"
                            type="email"
                            placeholder="Email address"
                        />
                        <Button text={BUTTON_TEXT.GET_STARTED} />
                    </form>
                </div>
            </div>
        </Layout>
    );
}
