import { useEffect } from 'react';
import { useRouter } from 'next/router';
import 'styles/globals.css';
import { CartProvider } from './CartContext';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // This will log the router instance when the app loads.
    console.log(router);
  }, []);

  return (
    <CartProvider>
      <Component {...pageProps} router={router} />
    </CartProvider>
  );
}

export default MyApp;
