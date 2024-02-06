import React, { useEffect } from 'react'
import Empty from '../../components/empty/Empty'
import img from '../../assets/hearts.cf414be.png'

import { useSelector } from 'react-redux'
import Products from '../../components/products/Products'

function Wishes() {
    let wishes = useSelector(state => state.wishes.value)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            {
                wishes.length ? <Products title="Sevimlilar" data={wishes} /> :
                    <Empty
                        img={img}
                        title="Sizga yoqqanini qoʻshing"
                        info="Mahsulotdagi ♡ belgisini bosing. Akkauntga kring va barcha saralanganlar saqlanib qoladi"
                        btn_word="Akkauntga Kirish"
                        link="/login"
                    />
            }
        </div>
    )
}

export default Wishes
