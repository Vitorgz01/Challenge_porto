import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          {/* Atualizar o caminho do favicon */}
          <link rel="icon" href="/logo-4wheels-vermelho-branco-90px.png" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/logo-4wheels-vermelho-branco-90px.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/logo-4wheels-vermelho-branco-90px.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/logo-4wheels-vermelho-branco-90px.png"
          />
          {/* Manter manifesto se for um PWA */}
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
