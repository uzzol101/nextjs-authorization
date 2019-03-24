import React from 'react';
import App, { Container } from 'next/app';
import nextCookie from 'next-cookies'
import Router from 'next/router'
class MyApp extends App {
    static async getInitialProps({ req, res, Component, ctx }) {
        let pageProps = {}
        const {token} = nextCookie(ctx)
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        
        // list unauthorized page here
        const unAuthorizedPage = ['/register', '/']
        let noAuthorizationNeeded = unAuthorizedPage.includes(ctx.pathname)

        // for pages that don't need authorization
        if (noAuthorizationNeeded) {
            return {pageProps}
        }

        // pages that requires authorization
        if (typeof token == 'undefined' || token == 'null'){
            // server side
            if (ctx.res && ctx.pathname !=='/login') {
                ctx.res.writeHead(302, {Location: '/login'})
                ctx.res.end()
                return {pageProps}
            } else {
                // browser side 
               if (ctx.pathname !== '/login') {
                Router.push('/login')
               }
            }
        }
        return { pageProps};
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