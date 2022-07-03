import React, { Fragment } from 'react';
import { MdShoppingBasket } from "react-icons/md";
import "./Home.css";
import Product from "./Product.js"

const product ={
    name: "Blue Berries",
    images: [{url: "https://foodapp-five.vercel.app/static/media/f1.c52686695ee9a5c4cd0d.png"}],
    price: "300",
    _id: "bhim",
}

const Home = () => {
    return (
        <Fragment>
            <div className='banner'>
                <p>Welcome to Ecommerce</p>
                <h1>FIND ECOMMERCE SHOPPING PRODUCT BELOW</h1>

                <a href='#container'>
                    <button>
                        Scroll <MdShoppingBasket />
                    </button>
                </a>

            </div>
            <div></div>

            <h2 className='homeHeading'>Featured Products</h2>

            <div className='container' id='container'>
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} /> 

                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
            </div>
        </Fragment>
    )
}

export default Home;