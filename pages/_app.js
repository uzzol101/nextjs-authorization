import React from 'react';
import Router from 'next/router'
import App, { Container } from 'next/app';
import nextCookie from 'next-cookies'
import { login } from '../helper/auth'

class MyApp extends App {
    static async getInitialProps({ req, res, Component, ctx }) {
        let pageProps = {}
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <Component {...pageProps} />
            </Container>
        );
    }
}

export default MyApp;