import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="gr">
        <Head>
          {/* <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" /> */}
          <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap" rel="stylesheet" />
          <meta charSet="utf-8"/>
          <meta name="description" content="Website for it support in lesvos mytilene"/>
          <meta name="viewport" content="width=device-width"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>{`
          body {
            font-family: 'Roboto', serif;
          }
          .logo {
            font-family: 'Nunito', 'sans-serif';
          }
        `}</style>
      </Html>
    )
  }
}

export default MyDocument