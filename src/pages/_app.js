import "@/styles/globals.css";
import Layout from "@/components/layout";
import { useEffect } from 'react'; // Importa useEffect
import { useRouter } from 'next/router'; // Importa useRouter
import Script from 'next/script'; // Importa el componente Script

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', 'GTM-TTMF4MPH', {
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
      {/* Google Analytics Scripts */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=GTM-TTMF4MPH`} // Reemplaza con tu Measurement ID
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GTM-TTMF4MPH', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      {/* Layout y Componentes */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}