import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/action';
import Products from './Products';

const ProductList = () => {
  const products = useSelector((state) => state.settings.products);
  const categories = useSelector((state) => state.settings.categories);
  const searchProduct = useSelector((state)=> state.settings.searchProduct || '');
  const loading = useSelector((state) => state.settings.loading);
  const error = useSelector((state) => state.settings.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if(products.length > 0) {
    return (
        <Products products={products} categories={categories} searchProduct={searchProduct}/>
    )
  }
  
}

export default ProductList