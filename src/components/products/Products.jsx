import React from 'react'
import './Products.css'
function Products({ data }) {
    return (
        <div className='container'>
            <h2 className='product__heading'>Arzon Narxlar <span>&#10095;</span></h2>
            <div className="wrapper">
                {
                    data?.map((item) => {
                        return <div key={item._id} className="card">
                            <div className="card__image">
                                <img src={item.url} alt="" />
                            </div>
                            <div className="card__body">
                                <h3 className='card__title'>{item.title}</h3>
                                <mark>{(item.price * 1.5 / 12)?.brm()}</mark>
                                <div className="card__prices">
                                    <div>
                                        <del>{(item.price * 1.2)?.brm()}</del>
                                        <p>{item.price?.brm()} so'm    </p>
                                    </div>
                                    <div className='card__cart-btn'></div>
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