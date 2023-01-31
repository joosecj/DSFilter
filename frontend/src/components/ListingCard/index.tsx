import { ProductDTO } from '../../moldes/ProductDTO';
import './styles.css';

type Props = {
  products : ProductDTO;
}

export default function ListingCard({products}: Props) {
  return (
        <div className='card-product'>
          <p className='product-name'>{products.name}</p>
          <p className='product-price'>R$ {products.price}</p>
        </div>
    
  );
}