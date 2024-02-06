import React from 'react'
import Banner from '../../components/banner/Banner'
import Products from '../../components/products/Products';

function Home({ data }) {
    return (
        <div className='home container'>
            <Banner />
            <Products title="Arzon Narxlar" data={data} />
        </div>
    )
}

export default Home
