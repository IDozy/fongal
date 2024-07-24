// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Aquí colocas tus scripts de Google Tag Manager */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-7GTKSVQP0S"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-7GTKSVQP0S');
              `,
            }}
          ></script>
          {/* Fin de los scripts de Google Tag Manager */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
