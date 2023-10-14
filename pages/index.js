import { useRouter } from 'next/router';


function HomePage() {
  const router = useRouter();

  const navigateToProducts = () => {
    router.push('/products');
  };

  return (
    <div className="bg-white">
      <h1>Welcome to the E-Commerce App</h1>
      <button onClick={navigateToProducts}>View Products</button>
    </div>
  );
}

export default HomePage;
