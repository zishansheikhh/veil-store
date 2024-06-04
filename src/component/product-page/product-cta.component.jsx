import { Link } from "react-router-dom";
import './product-page.styles.css';

const ProductCta = () => {

  return (
    <div>
      <div className="product-page-cta-container d-grid">
        {/* checkout button */}
        <Link to="/checkout" className="btn checkout-button-outlined">
        Add to cart
        </Link>
        <Link to="/checkout" className="btn checkout-button">
        Buy Now (Cash on Delivery available)
        </Link>
      </div>
     </div>
  );
};

export default ProductCta;