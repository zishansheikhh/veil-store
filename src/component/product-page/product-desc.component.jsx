import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import './product-page.styles.css';

const ProducDescription = () => {

    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (index) => {
      if (openDropdown === index) {
        setOpenDropdown(null);
      } else {
        setOpenDropdown(index);
      }
    };
  
    const getDropdownIcon = (index) => {
      return openDropdown === index ? faChevronDown : faChevronRight;
    };

    return (
        <><div><p>Wrap yourself in luxury with our Mint Green Flowy Organza Shimmer Hijab. Our elegant hijab features a light and airy flow, adding a touch of shimmer to your outfit. Made from high quality organza material, it's perfect for any occasion and will elevate your style to the next level. Feel confident and glamorous with every wear.</p></div><div className="description-dropdown">
            <div className="dropdown-header" onClick={() => toggleDropdown(1)}>
                Care Instructions &nbsp;
                <FontAwesomeIcon icon={getDropdownIcon(1)} />
            </div>
            {openDropdown === 1 && (
                <p className="dropdown-content">We recommend using only mild detergent and cold water to wash hijabs. Do not wring hijabs to avoid damaging the fabric. Make sure to iron them on the reverse side to maintain the quality of the material on the front side.</p>
            )}

            <div className="dropdown-header" onClick={() => toggleDropdown(2)}>
                Return and Refund &nbsp;
                <FontAwesomeIcon icon={getDropdownIcon(2)} />
            </div>
            {openDropdown === 2 && (
                <><p className="dropdown-content">We offer 7 days hassle-free returns. Return Policies may vary based on products and promotions.</p><ul>
                    <ol>Refunds for Prepaid orders would directly be initiated to source account and COD order will be refunded in the form of COUPON CODE ONLY</ol>
                    <ol>Defective Products, Wrong Products or Damaged Products issue should be raised within 24 hrs of delivery</ol>
                    <ol>All Orders wherein FREE Products included are not eligible for Return
                        For more details on our Returns Policies, please click here․</ol>
                </ul></>
            )}

            <div className="dropdown-header" onClick={() => toggleDropdown(3)}>
                Disclaimer &nbsp;
                <FontAwesomeIcon icon={getDropdownIcon(3)} />
            </div>
            {openDropdown === 3 && (
                <div>
                    <p className="dropdown-content">
                        We attempt to display product images as accurately as possible. However, due to lighting and different devices you might be using, the colour in the image may vary slightly from the product's actual colour.
                    </p>
                </div>
            )}
        </div></>
    )
}
    
export default ProducDescription;