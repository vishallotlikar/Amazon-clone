import React from 'react'
import { useStateValue } from '../StateProvider';
import Subtotal from './subtotal/Subtotal'
import "./Checkout.css"
import CheckoutProduct from './checkoutProduct/CheckoutProduct';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    
    console.log('This is the basket >>>', JSON.stringify(basket))

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/teaser1/unrec/PC/Jupiter_Teaser20_1_UNREC-PC_06.jpg"
                alt=""/>
                <div>
                    {user ? <h3>Hello, {user?.email}</h3> : ''}
                    <h2 className="checkout__title">
                        Your shopping Basket
                    </h2>

                    {/* Checkout product */}
                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}/>
                    ))}
                    
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
