import React from 'react'
import Product from '../product/Product'
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/OnePlus/8T/GW/Oct1/V252166690_Rush-Wireless-OnePlus_8T_Tall_hero_1500x600._CB402939876_.jpg"
                alt="" />

            <div className="home__row">
                <Product
                    id={5165}
                    title="Lorem ipsum, or lipsum as it is sometimes known."
                    price={29.99}
                    image="https://m.media-amazon.com/images/I/41p0PLiCyeL._AC_SR400,600_.jpg"
                    rating={5} 
                />

                <Product
                    title="Lorem ipsum, or lipsum as it is sometimes known."
                    price={29.99}
                    image="https://m.media-amazon.com/images/I/41p0PLiCyeL._AC_SR400,600_.jpg"
                    rating={3} 
                />
            </div>

            <div className="home__row">
                <Product />
                <Product />
                <Product />
            </div>

            <div className="home__row">
                <Product />
            </div>
        </div>
    )
}

export default Home
