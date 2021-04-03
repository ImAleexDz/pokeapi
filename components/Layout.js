import React from 'react'
import Head from 'next/head'

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>Pokedex</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
            </Head>

            <div id="content">
                {props.children}
            </div>

        </div>
    )
}

export default Layout
