import { Link } from 'react-router-dom';
import Productimg from '../../assets/products/11_0_demon-slayer---kimetsu-no-yaiba-be0079c9c0054fcc952384138fc686fd.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Orderscard = () => {
  const orders = [
    {
      name: 'Jujutsu Kaisen Tshirt',
      description: 'Customized t-shirt',
      price: 'Rs. 490',
      status: 'Dispatched',
    },
    {
        name: 'Demon slayer Tshirt',
        description: 'Customized t-shirt',
        price: 'Rs. 550',
        status: 'Packed',
    },
  ];

  return (
    <div>
        <div className="page-navigation-bar">
            <h2 className="ml-2 default-header"><Link to='/'><FontAwesomeIcon icon="fa-solid fa-arrow-left-long" /></Link> &nbsp;My Orders</h2>
        </div>
        <div className="container-fluid m-auto">
        <div className="orders-card-wrapper mt-2">
            {orders.map((order, index) => (
            <div className="cards-basic orders-card" key={index}>
                <img src={Productimg} alt="" />
                <div>
                <h4>{order.name}</h4>
                <p>{order.description}</p>
                <p>{order.price}</p>
                <p>Status: <span>{order.status}</span></p>
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>
  );
};

export default Orderscard;