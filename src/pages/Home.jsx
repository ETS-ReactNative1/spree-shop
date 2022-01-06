import React from 'react'
import Nav from '../components/Nav'
import Announcements from '../components/Announcements'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className='container'>
        <Announcements />
        <Nav />
        <Slider />
        <Categories />
        <Products />
        <Newsletter />
        <Footer />            
        </div>
    )
}

export default Home
