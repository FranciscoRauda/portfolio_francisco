import "@/styles/globals.css";
import Layout from "@/components/layout";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script'; // Importamos Script para manejo adecuado en Next.js
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', 'G-XM9DC9ENN7', {  // Aquí usa tu Measurement ID de Google Analytics
        page_path: url,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Portfolio de Francisco</title>
        <meta name="description" content="Portafolio de diseño y desarrollo web de Francisco. Muestra de proyectos de diseño gráfico, desarrollo web, fotografía y más." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Incluir el script externo de Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-XM9DC9ENN7"
      />

      {/* Script personalizado para inicializar Google Analytics */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XM9DC9ENN7');
          `,
        }}
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
