import React, { useEffect } from 'react'
import Empty from '../../components/empty/Empty'
import img from '../../assets/shopocat.490a4a1.png'
function Cart() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Empty
                img={img}
                title="Savatda hozircha mahsulot yoʻq"
                info="Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping"
                btn_word="Bosh Sahifda"
                link="/"
            />
        </div>
    )
}

export default Cart