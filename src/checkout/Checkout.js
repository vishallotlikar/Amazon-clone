import React from 'react'
import Subtotal from '../subtotal/Subtotal'
import "./Checkout.css"

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/teaser1/unrec/PC/Jupiter_Teaser20_1_UNREC-PC_06.jpg"
                alt=""/>
                <div>
                    <h2 className="checkout__title">
                        Your shopping Basket
                    </h2>
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
