import React from 'react';
import Hero from '../../components/Hero/Hero';
import Layout from '../../components/Layout/Layout';
import MovieList from '../../components/MovieList/MovieList';

export default function Home() {
    return (
        <Layout>
            <Hero />
            <MovieList />
        </Layout>
    );
}
