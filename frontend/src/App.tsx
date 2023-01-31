import { useEffect, useState } from 'react';
import './App.css'
import FilterCard from './components/FilterCard'
import Header from './components/Header'
import ListingCard from './components/ListingCard';
import { ProductDTO } from './moldes/ProductDTO';
import * as productService from './services/product-service';

function App() {
  const MIN_PRICE = 0;
  const MAX_PRICE = Number.MAX_VALUE
  const [products, setProducts] = useState<ProductDTO[]>(productService.findByPrice(MIN_PRICE, MAX_PRICE));

  return (
    <>
      <Header />
      <section id='content'>
        <FilterCard />
        <div className='container'>
          <div className='container-card-prod'>
            {
              products.map(
                product => <ListingCard key={product.id} products={product} />
              )
            }
          </div>
        </div>

      </section>

    </>
  );
}

export default App
