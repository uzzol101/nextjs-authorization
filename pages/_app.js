import React from 'react';
import Router from 'next/router'
import App, { Container } from 'next/app';
import nextCookie from 'next-cookies'
import { login } from '../helper/auth'
class MyApp extends App {
    static async getInitialProps({ req, res, Component, ctx }) {
        let pageProps = {}
        let {token} = nextCookie(ctx)
        // console.log('__app token ', token, ctx.res)
        const publicPage = ['/login', '/signup', '/']
        if (!token && ! publicPage.includes(ctx.pathname) && ctx.req) {
            ctx.res.writeHead(302, {Location:"/login"})
            ctx.res.end()
        }
        const path = ctx.pathname
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps, token, path };
    }

    render() {
        const { Component, pageProps } = this.props;
        pageProps.token = this.props.token
        if (!this.props.token && this.props.path !== '/login' ) {
            Router.push('/login')
        }
        return (
            <Container>
                <Component {...pageProps} />
            </Container>
        );

    }
}

export default MyApp;