import { Html, Head, Main, NextScript } from 'next/document'

import React from 'react';

const Document = () => {
    return (
        <Html>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

export default Document;
