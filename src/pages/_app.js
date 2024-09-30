import "@/styles/globals.css";
import Layout from "@/components/layout";
import { useEffect } from 'react';
import { useRouter } from 'next/router';


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
    <html lag= "en " >
      <head>
        <script>
         src="https://www.googletagmanager.com/gtag/js?id=G-XM9DC9ENN7"
        </script>
        <script id="gooogle analitics">
        { `
window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XM9DC9ENN7');
`}
        </script>

      </head>

    </html>
     
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}