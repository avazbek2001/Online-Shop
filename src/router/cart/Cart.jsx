import React, { useEffect } from 'react'
import Empty from '../../components/empty/Empty'
import img from '../../assets/shopocat.490a4a1.png'
import { useSelector, useDispatch } from 'react-redux'
import { incCart, decCart, removeAllCart, removeCart } from '../../context/cartSlice'
import CartProduct from '../../components/cart-product/CartProduct'


function Cart() {
    const dispatch = useDispatch()
    const carts = useSelector(state => state.carts.value)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='h-70'>
            {
                carts.length ? <div className='container'>

                    {
                        <CartProduct data={carts} />
                    }
                </div> :
                    <Empty
                        img={img}
                        title="Savatda hozircha mahsulot yo'q"
                        info="Bosh sahifadagi to'plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping"
                        btn_word="Bosh Sahifda"
                        link="/"
                    />
            }
        </div>
    )
}

export default Cart