import { useRouter } from 'next/router';
import Footer from './Footer';
import Products from './products';


function HomePage() {
  const router = useRouter();

  const navigateToProducts = () => {
    router.push('/products');
  };

  return (
    <div className="bg-white">
      <h1>Welcome to the E-Commerce App</h1>
      <button onClick={navigateToProducts}>View Products</button>
      <Products/>
      <Footer/>
    </div>
  );
}

export default HomePage;
