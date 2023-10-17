import { useRouter } from 'next/router';
import Footer from './Footer';
import Products from './products';
import Image from 'next/image';
const logofont = require("../assets/icons/IMG11.png");

function HomePage() {
  const router = useRouter();

  const navigateToProducts = () => {
    router.push('/products');
  };

  return (
    <main className="bg-[#713f12]">
      <div className='flex justify-center mt-4'>
        <Image src={logofont} alt="fe" width={340} height={300} />
      </div>
      
      <Products/>
      <div className='flex justify-center'>
      <button className="bg-white text-lg rounded-md p-3 text-red-600 my-4 font-bold " onClick={navigateToProducts}>View Products</button>
      </div>
      <Footer/>
    </main>
  );
}

export default HomePage;
