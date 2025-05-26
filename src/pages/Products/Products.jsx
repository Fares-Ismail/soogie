import { lazy, Suspense } from "react";
const Product = lazy(() => import("../../components/Product/Product"));
import { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {

const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching products data from JSON file
    axios.get('/data/Api.json')
      .then(response => {
        if (response.data && Array.isArray(response.data.products)) {
          setProducts(response.data.products);
        } else {
          setError('Invalid data format');
        }
        setLoading(false);
      })
      .catch(err => {
  setError(err?.message || 'Something went wrong');
  setLoading(false);
});
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
  
     <div className='py-20 px-2 sm:px-18 lg:px-20'>
            <Suspense fallback={<div>Loading Products...</div>}>
    
              <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
              {products.length === 0 ? (
      <div>No products available</div>
    ) : (
      products.slice(-8).map(product => (
        <Product
          key={product.id}
          product={{
            image: product.image,
            name: product.name,
            price: product.price,
            id: product.id
          }}
        />
      ))
    )}
              </div>
            </Suspense>
          </div>
  );
};

export default Products;
