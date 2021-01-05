import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const MainNav = () => {
    const [Ham, SetHam] = React.useState(false);

    const { totalQuintites } = useSelector(state => state.CartReducers)

    return (
        <>
            <div className="ham">
                <i onClick={() => SetHam(!Ham)} className={`${Ham ? 'fa fa-times' : 'fa fa-bars'} `}></i>
            </div>
            <div className={`MainNav bg-dark ${Ham ? 'show_Main_Nav ' : ''}`}>
                <div className='container '>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">Men's</a></li>
                        <li><a href="#">Jwelry</a></li>
                        <li><a href="#">Shoes</a></li>
                        <li><a href="#">Pages</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><Link to="/carts"><i className="fa fa-shopping-cart"></i><span className="cart">{totalQuintites}</span></Link></li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default MainNav
