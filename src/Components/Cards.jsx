import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


const Cards = () => {
    const { products } = useSelector(state => state.ProductReducer);
    return (
        <div className="Cards">
            <h2 className="text-center">BROWSE TOP SELLING PRODUCTS</h2>
            <div className="container">
                <div className="Cards_nav">
                    <ul>
                        <li><a href="#">Tops</a></li>
                        <li><a href="#">Dress</a></li>
                        <li><a href="#">jumpsuit</a></li>
                        <li><a href="#">Lingerie</a></li>
                        <li><a href="#">jeans</a></li>
                        <li><a href="#">coats</a></li>
                        <li><a href="#">jumper</a></li>
                        <li><a href="#">Kids</a></li>

                    </ul>
                </div>
            </div>

            <div className="main_cards">
                <div className="container">
                    <div className="row">
                        {products.map(product => (
                            <div className="col-lg-3 col-md-4 col-9 mx-auto ">
                                <div className="Card_IMG">
                                    <Link to={`/details/${product.id}`}>
                                        <img src={`/images/${product.image}`} alt="" />
                                    </Link>
                                </div>
                                <div className="price">
                                    <p>{product.name}</p>
                                    <b className="ml-auto">${product.price}</b>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
