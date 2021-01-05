import React from 'react';
import { Link } from 'react-router-dom'


const ThirdNav = () => {
    return (
        <div>

            <h2 className="text-center">BROWSE TOP SELLING PRODUCTS</h2>
            <div className="Cards_nav">
                <ul>
                    <li><Link to="/">Tops</Link></li>
                    <li><a href="#">Dress</a></li>
                    <li><a href="#">jumpsuit</a></li>
                    <li><a href="#">Lingerie</a></li>
                    <li><a href="#">jeans</a></li>
                    <li><a href="#">coats</a></li>
                    <li><a href="#">jumper</a></li>
                    <li><Link to="/kids">Kids</Link></li>

                </ul>
            </div>
        </div>
    )
}

export default ThirdNav
