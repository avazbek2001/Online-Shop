import React from 'react'
import './SingleRoute.css'
import { PRODUCTS } from '../../static/index'
import { useParams } from 'react-router-dom'
import Notfound from '../not-found/Notfound'

function SingleRoute() {
    const params = useParams()
    const data = PRODUCTS
    const item = data.find(item => `${item._id}` === params.id)
    if (!item) {
        return <Notfound />
    }
    console.log(item);
    return (
        <div className='container'>
            <div className='single-route'>
                <div className="single-route-left">
                    <div className="column_images">
                        <img src={item.url} alt="" />
                        <img src={item.url} alt="" />
                        <img src={item.url} alt="" />
                        <img src={item.url} alt="" />
                        <img src={item.url} alt="" />
                    </div>
                    <div className="main_image">
                        <img src={item.url} alt="" />
                    </div>
                </div>
                <div className="single-route-right">
                    <h4 className='single-route-title'>
                        {item.title}
                    </h4>
                    <div className="sell">
                        <span>Sotuvchi:</span>
                        <span>Mobile Outlet</span>
                    </div>
                    <div className="delivery">
                        <span>Yetkazib berish:</span>
                        <span>1 kun, bepul</span>
                    </div>
                    <hr className='single-route-hr' />
                    <div className="color">
                        <span>Rang:</span>
                        <div className="color_item">
                            <img src={item.url} alt="" />
                            <img src={item.url} alt="" />
                        </div>
                    </div>
                    <div className="storage">
                        <span>Xotira</span>
                        <div className="storage_item">
                            <img src={item.url} alt="" />
                            <img src={item.url} alt="" />
                        </div>
                    </div>
                    <div className="single_amount">
                        <span>Miqdor</span>
                        <div className="single_amount_item">
                            <div lassName="single_increament_amount">
                                <button>-</button>
                                <button>1</button>
                                <button>+</button>
                            </div>
                            <span>Sotuvda 450 dona bor</span>
                        </div>
                    </div>
                    <div className="single_cost">
                        <span>Narx</span>
                        <div className="single_cost_item">
                            <b>dan {item.price?.brm()}</b>
                            <del>{(item.price * 1.5)?.brm()} so'm</del>
                            <span className='single_discount'>Aksiya</span>
                        </div>
                    </div>
                    <div className="credit_cost">
                        <mark>oyiga {(item.price * 1.5 / 12)?.brm()} so'mdan</mark>
                        <span>Muddatli to'lov</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleRoute
