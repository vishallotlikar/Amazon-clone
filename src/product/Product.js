import React from 'react'
import "./Product.css"
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useStateValue } from '../StateProvider';

function Product({ id, title, price, image, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    // console.log('This is the basket >>>', basket)

    const addToBasket = () => {
        // Dispatch the item into the data layer.
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }

    return (
        <div className="product">
            <div className="product__into">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p><StarIcon /></p>
                    ))}
                </div>
            </div>
            <img src={image} alt=""/>

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
