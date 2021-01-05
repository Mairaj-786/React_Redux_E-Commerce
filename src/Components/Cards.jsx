import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


const Cards = () => {
    const { products } = useSelector(state => state.ProductReducer);
    return (
        <div className="Cards">

            <h1 className="text-center"></h1>
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
