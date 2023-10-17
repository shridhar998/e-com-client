import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import 'styles/globals.css';
import { CartProvider } from './CartContext';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    // This will log the router instance when the app loads.
    console.log(router);
  }, []);

  return (
    <CartProvider>
      {isClient ? <Component {...pageProps} router={router} />: 'Prerendered'}
    </CartProvider>
  );
}

export default MyApp;
