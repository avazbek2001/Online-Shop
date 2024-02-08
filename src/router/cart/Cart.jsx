import React, { useEffect } from 'react'
import Empty from '../../components/empty/Empty'
import img from '../../assets/shopocat.490a4a1.png'
import { useSelector, useDispatch } from 'react-redux'
import { incCart, decCart, removeAllCart, removeCart } from '../../context/cartSlice'


function Cart() {
    const dispatch = useDispatch()
    const carts = useSelector(state => state.carts.value)
    console.log(carts);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (

        <div>
            {
                carts.length ? <div className='container'>

                    {
                        carts?.map(el => {
                            return <div key={el._id}>
                                <img src={el.url} width={150} alt="" />
                                <h4>{el.title}</h4>
                                <button onClick={() => dispatch(decCart(el))}>-</button>
                                <button>{el.quantity}</button>
                                <button onClick={() => dispatch(incCart(el))}>+</button>
                                <button onClick={() => dispatch(removeCart(el))}>Remove Cart</button>
                                <button onClick={() => dispatch(removeAllCart(el))}>Remove All Carts</button>
                            </div>

                        })
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