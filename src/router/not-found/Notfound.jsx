import React from 'react'
import Empty from '../../components/empty/Empty'
import img from '../../assets/penguin.a739ac8.png'
function Notfound() {
    return (
        <div>
            <Empty
                img={img}
                title="Bu mahsulot qolmadi"
                info="Lekin boshqa koʻplab mahsulotlar ham bor. Ularni bosh sahifada koʻring"
                btn_word="Bosh Sahifda"
                link="/"
            />
        </div>
    )
}

export default Notfound
