import Slides from './Slides'
import React from 'react'
import LatestProduct from './LatestProduct'
import Cards from './Cards'

import ThirdNav from '../Container/ThirdNav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import KidsProducts from './KidsProducts'
const Home = () => {
    return (
        <div>
            <Slides />
            <LatestProduct />
            <ThirdNav />
            <Route exact path="/" component={Cards}></Route>
        </div>
    )
}

export default Home
