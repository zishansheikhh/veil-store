import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './product-list.styles.css';

import HeartIcon from '../../assets/interface-icons/love.png';
import ProductImg1 from '../../assets/products/1.jpg';
import ProductImg3 from '../../assets/products/2.jpg';
import ProductImg4 from '../../assets/products/4.jpg';
import ProductImg5 from '../../assets/products/3.jpg';
import ProductImg6 from '../../assets/products/6.jpg';

const productList = [
    {
        id: 1,
        image: ProductImg1,
        price: 'INR 599',
        title: 'Mint Green- Flowy Organza Shimmer Hijab'
    },
    {
        id: 2,
        image: ProductImg3,
        price: 'INR 599',
        title: 'Mint Green- Flowy Organza Shimmer Hijab'
    },
    {
        id: 3,
        image: ProductImg4,
        price: '350/-',
        title: 'Mint Green- Flowy Organza Shimmer Hijab'
    },
    {
        id: 4,
        image: ProductImg5,
        price: 'INR 599',
        title: 'Mint Green- Flowy Organza Shimmer Hijab'
    },
    {
        id: 5,
        image: ProductImg6,
        price: 'INR 599',
        title: 'Mint Green- Flowy Organza Shimmer Hijab'
    },
    {
        id: 6,
        image: ProductImg1,
        price: 'INR 599',
        title: 'Mint Green- Flowy Organza Shimmer Hijab'
    },
];

const ProductList = () => {
    return (
        <div className='container-fluid m-auto'>
            <h3 className="mt-1 d-flex al-item-cen default-header">Trending</h3>
            <div className="product-list-container mb-5">
                {productList.map((product) => (
                    <div className="product-card-wrapper" key={product.id}>
                    <Link to="/product-page">
                        <div className="cards-basic product-card">
                            <img src={product.image} alt={`Product ${product.id}`} />
                        </div>
                        <div className="product-action d-flex jc-center">
                            <span className="w-100">{product.title}</span>
                        </div>
                        <div className="product-info d-flex jc-space-btw">
                            <p>{product.price}</p>
                        </div>
                    </Link>

                    <div className="product-cta-wrapper d-flex jc-center">
                        <Link className="product-cta" to="/user-profile">Add to cart</Link>
                        <Link to="/user-profile">
                            <img className="" src={HeartIcon} alt="Trend Stitchers user profile" />
                        </Link>
                    </div>
                    </div>
                ))}
            </div>

            <h3 className="mt-4 d-flex al-item-cen default-header">Most Purchased</h3>
            <div className="product-list-container mb-5">
                {productList.map(product => (
                    <Link to='/product-page' key={product.id}>
                        <div className="product-card-wrapper">
                            <div className="cards-basic product-card">
                                <img src={product.image} alt={`Product ${product.id}`} />
                            </div>
                            <div className="product-info d-flex jc-space-btw">
                                <p>{product.price}</p>
                                <span><FontAwesomeIcon icon={["far", "heart"]} /></span>
                            </div>
                            <div className="product-action d-flex jc-center">
                                <span className="w-100">{product.title}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <h3 className="mt-4 d-flex al-item-cen default-header">Accessories</h3>
            <div className="product-list-container mb-5">
                {productList.map(product => (
                    <Link to='/product-page' key={product.id}>
                        <div className="product-card-wrapper">
                            <div className="cards-basic product-card">
                                <img src={product.image} alt={`Product ${product.id}`} />
                            </div>
                            <div className="product-info d-flex jc-space-btw">
                                <p>{product.price}</p>
                                <span><FontAwesomeIcon icon={["far", "heart"]} /></span>
                            </div>
                            <div className="product-action d-flex jc-center">
                                <span className="w-100">{product.title}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

        
    );
}

export default ProductList;