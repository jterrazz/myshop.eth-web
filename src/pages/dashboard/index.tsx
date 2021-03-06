import React from 'react';
import getConfig from 'next/config';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { Home } from '~/components/templates/Home';
import { TheNavBarContainer } from '~/components/organisms/TheNavBar';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

const HomePage = () => (
    <div>
        <Head>
            <title>Home - {getConfig().publicRuntimeConfig.app.pageTitle}</title>
        </Head>

        <TheNavBarContainer>
            <Home />
        </TheNavBarContainer>
    </div>
);

export default HomePage;
