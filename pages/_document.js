import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="el-gr">
        <Head>
          <meta charSet="utf-8"/>
          <meta name="description" content="Website for it support in lesvos mytilene"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>{`
          body {
            font-family: 'Arial';
          }
          // .logo {
          //   font-family: 'Nunito', 'sans-serif';
          // }
        `}</style>
      </Html>
    )
  }
}

export default MyDocument