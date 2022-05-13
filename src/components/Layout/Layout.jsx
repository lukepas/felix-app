import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="bg-black">
                {children}
            </main>
            <Footer />
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
};
