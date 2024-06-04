import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";

import ProductCta from "./product-cta.component";
import ProductCustomization from "./product-customization.component";
import ProducDescription from "./product-desc.component";

import ProductImg1 from '../../assets/products/1.jpg';
import ProductImg3 from '../../assets/products/2.jpg';
import ProductImg4 from '../../assets/products/3.jpg';
import ProductImg5 from '../../assets/products/4.jpg';
import ProductImg6 from '../../assets/products/5.jpg';

import './product-page.styles.css';


const ProductPageComponent = () => {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: false,
        slidesToShow: 1,
        lazyLoad: 'ondemand',
        slidesToScroll: 1
    };

    return (
        <div>
            <div className="product-page-wrapper">
                {/* product slider */}
                <div className="product-page-left-side">
                    <div className="product-img-container">
                        <Slider {...settings}>
                            <div className="cards-basic product-gallery-card">
                                <img src= {ProductImg1} alt="CategoryImg 1"/>
                            </div>

                            <div className="cards-basic product-gallery-card">
                                <img src= {ProductImg3} alt="CategoryImg 1"/>
                            </div>

                            <div className="cards-basic product-gallery-card">
                                <img src= {ProductImg4} alt="CategoryImg 1"/>
                            </div>

                            <div className="cards-basic product-gallery-card">
                                <img src= {ProductImg5} alt="CategoryImg 1"/>
                            </div>

                            <div className="cards-basic product-gallery-card">
                                <img src= {ProductImg6} alt="CategoryImg 1"/>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className="product-page-right-side">
                    <div className="product-price-container d-flex jc-space-btw al-item-cen">
                        <div className="mt-2">
                        <h6 className="mb-1 mt-3">Al Zahra Veils</h6>
                            <div className="d-flex jc-space-btw al-item-cen">
                                <div><h4>Mint Green- Flowy Organza Shimmer Hijab</h4></div>
                                <div>
                                    <span className="mt-2 f-size-1"><FontAwesomeIcon icon="fa-solid fa-arrow-up-from-bracket" /></span>
                                    <span className="mt-2 f-size-1"><FontAwesomeIcon icon="fa-regular fa-heart" /></span>
                                </div>
                            </div>
                            <p>INR 450.00</p>
                        </div>
                    </div>
                    <div>
                        <p>5 reviews</p>
                    </div>
                    <div>
                    <form className="mt-2 mb-3">
                        <p>Choose your favourite Fabric</p>
                        <label>
                            Cotton
                            <input type="radio" name="test" value="small"  defaultChecked />
                        </label>

                        <label>
                            Rayon
                            <input type="radio" name="test" value="big" />
                        </label>

                        <label>
                            Crepe
                            <input type="radio" name="test" value="big" />
                        </label>
                    </form>
                    </div>
                    {/* product info */}
                    <ProductCustomization />
                    {/* product cta */}
                    <ProductCta />
                    {/* product description */}
                    <ProducDescription />  
                </div>
            </div>     
        </div>
    )
}
    
export default ProductPageComponent;