import React from 'react'
import Empty from '../../components/empty/Empty'
import img from '../../assets/hearts.cf414be.png'
function Wishes() {
    return (
        <div className='container'>
            <Empty
                img={img}
                title="Sizga yoqqanini qoʻshing"
                info="Mahsulotdagi ♡ belgisini bosing. Akkauntga kring va barcha saralanganlar saqlanib qoladi"
                btn_word="Akkauntga Kirish"
                link="/login"
            />
        </div>
    )
}

export default Wishes
