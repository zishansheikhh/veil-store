import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FooterSection from "../../component/footer/footer.component";
import { Link } from 'react-router-dom';

import './collectionpage.styled.css';

const CollectionHomepage = () => {

    return (
        <div>
            <meta name="description" content="Elevate your style with our exclusive collection at Trend Stitchers. Find the perfect pieces to enhance your wardrobe today." />
            <meta name="keywords" content="custom tshirt, anime tshirt, marvel tshirt, oversized tshirt, dc tshirt" />


            <div className="page-navigation-bar">
                <h2 className="ml-2 default-header"><Link to='/'><FontAwesomeIcon icon="fa-solid fa-arrow-left-long" /></Link> &nbsp;Our Collection</h2>
            </div>

            <div className='container m-auto'>
                <div className='collection-grid-wrapper'>
                    <div className='col-left'>
                        <div className='cards-basic collection-banner-card anime card-height-1'>
                            <div className='collection-title'><h3>Women's Oversized T-Shirt</h3></div>
                        </div>
                        <div className='cards-basic collection-banner-card marvel card-height-2'>
                            <div className='collection-title'><h3>Anime T-Shirt</h3></div>
                        </div>
                        <div className='cards-basic collection-banner-card mtshirt card-height-1'>
                            <div className='collection-title'><h3>Women's Oversized Shirt</h3></div>
                        </div>
                        <div className='cards-basic collection-banner-card womenshirt card-height-2'>
                            <div className='collection-title'><h3>Anime Collection</h3></div>
                        </div>
                    </div>
                    <div className='col-right'>
                        <div className='cards-basic collection-banner-card bitmoji card-height-2'>
                            <div className='collection-title'><h3>Couple T-Shirt</h3></div>
                        </div>
                        <div className='cards-basic collection-banner-card womentshirt card-height-1'>
                            <div className='collection-title'><h3>Men's Oversized Shirt</h3></div>
                        </div>
                        <div className='cards-basic collection-banner-card menshirt card-height-2'>
                            <div className='collection-title'><h3>Anime Collection</h3></div>
                        </div>
                        <div className='cards-basic collection-banner-card modest card-height-1'>
                            <div className='collection-title'><h3>Modest Collection</h3></div>
                        </div>
                    </div>
                </div>
                <div className='mb-5'><br /></div>
            </div>
            <FooterSection />
        </div>
    )
}
    
export default CollectionHomepage;