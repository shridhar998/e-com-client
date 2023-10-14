import { useRouter } from 'next/router';

function ProductDetails() {
  const router = useRouter();
  const { productId } = router.query;

  // Fetch product details based on the productId (e.g., from an API).
  // Replace the example product data with your actual data retrieval logic.
  const product = {
    id: productId,
    name: 'Sample Product',
    description: 'This is a sample product description.',
    price: '$19.99',
  };

  if (!productId) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductDetails;
