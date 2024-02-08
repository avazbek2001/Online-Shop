import React from 'react'
import './Products.css'
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { addToWishes, removeFromWishes } from "../../context/wishesSlice"
import { TiHeartFullOutline } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { incCart } from '../../context/cartSlice';

function Products({ data, title }) {
    const dispatch = useDispatch()
    let wishes = useSelector(state => state.wishes.value)
    return (
        <div className='container'>
            <h2 className='product__heading'>{title} <span>&#10095;</span></h2>
            <div className="wrapper">
                {
                    data?.map((item) => {
                        return <div key={item._id} className="card">
                            <Link to={`/products/${item._id}`} className="card__image">
                                <img src={item.url} alt="" />
                            </Link>
                            {
                                wishes?.some((el) => el._id === item._id)
                                    ?
                                    <div onClick={() => dispatch(removeFromWishes(item))} className='card__heart'>
                                        <TiHeartFullOutline />
                                    </div>
                                    :
                                    <div onClick={() => dispatch(addToWishes(item))} className='card__heart'>
                                        <CiHeart />
                                    </div>
                            }
                            <div className="card__body">
                                <h3 className='card__title'>{item.title}</h3>
                                <mark>{(item.price * 1.5 / 12)?.brm()}</mark>
                                <div className="card__prices">
                                    <div className='card__price-item'>
                                        <del>{(item.price * 1.2)?.brm()}</del>
                                        <p>{item.price?.brm()} so'm    </p>
                                    </div>
                                    <div onClick={() => dispatch(incCart(item))} className='card__cart'>
                                        <FiShoppingCart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>

    )
}

export default Products
