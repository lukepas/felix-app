import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Layout from '../../components/Layout/Layout';
import { ROUTE_REDERECT } from '../../constants/routeNames';
import { BUTTON_TEXT } from '../../constants/button';

export default function NotFound() {
    return (
        <Layout>
            <section className="min-h-[80vh] flex flex-col items-center justify-center bg-[url('/src/assets/pictures/page_lost.jpg')]">
                <h3 className="text-white font-bold mb-2 text-6xl text-center">Lost your way?</h3>
                <p className="text-white mb-4 text-2xl">
                    Sorry, we can&apos;t find that page.
                    You&apos;ll find lots to expore on the home page.
                </p>
                <Link to={ROUTE_REDERECT.DEFAULT}>
                    <Button text={BUTTON_TEXT.FELIX_HOME} />
                </Link>
            </section>
        </Layout>
    );
}
