import React, { useState, useEffect } from 'react'

const MainNav = () => {
    const [Ham, SetHam] = React.useState(false);


    return (
        <>
            <div className="ham">
                <i onClick={() => SetHam(!Ham)} className={`${Ham ? 'fa fa-times' : 'fa fa-bars'} `}></i>
            </div>
            <div className={`MainNav bg-dark ${Ham ? 'show_Main_Nav ' : ''}`}>
                <div className='container '>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">Men's</a></li>
                        <li><a href="#">Jwelry</a></li>
                        <li><a href="#">Shoes</a></li>
                        <li><a href="#">Pages</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default MainNav
