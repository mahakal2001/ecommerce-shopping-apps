import React, { Fragment, useEffect } from 'react';
import { MdShoppingBasket } from "react-icons/md";
import "./Home.css";
import Product from "./ProductCard"
import MetaData from '../layout/MetaData';
import { clearErrors, getProduct } from "../../actions/productaction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";


const Home = () => {

    const alert = useAlert();
    const dispatch = useDispatch();
    const { loading, error, products } = useSelector(           //productsCount
        (state) => state.products
    );

    useEffect(() => {
        // eta Alert kora ho6a
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }


        dispatch(getProduct());
    }, [dispatch, error, alert]);
    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <MetaData title="ECOMMERCE" />
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
                        {products && products.map(product => (
                            <Product product={product} />
                        ))}
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

export default Home;