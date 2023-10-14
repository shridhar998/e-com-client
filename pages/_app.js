import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // This will log the router instance when the app loads.
    console.log(router);
  }, []);

  return <Component {...pageProps} router={router} />;
}

export default MyApp;
