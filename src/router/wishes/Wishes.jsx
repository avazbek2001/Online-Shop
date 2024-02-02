import React from 'react'
import Empty from '../../components/empty/Empty'
function Wishes() {
    return (
        <div className='container'>
            <Empty
               
                img="https://uzum.uz/static/img/hearts.cf414be.png"
                title="Sizga yoqqanini qoʻshing"
                info="Mahsulotdagi ♡ belgisini bosing. Akkauntga kring va barcha saralanganlar saqlanib qoladi"
                btn_word="Akkauntga Kirish"
                link="/login"
            />
        </div>
    )
}

export default Wishes
