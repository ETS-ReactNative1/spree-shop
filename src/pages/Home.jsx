import React from 'react'
import Nav from '../components/Nav'
import Announcements from '../components/Announcements'
import Slider from '../components/Slider'

const Home = () => {
    return (
        <div className='container'>
        <Announcements />
        <Nav />
        <Slider />
         Homepage
            
        </div>
    )
}

export default Home
