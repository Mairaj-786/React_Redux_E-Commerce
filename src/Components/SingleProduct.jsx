import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const SingleProduct = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { product } = useSelector(state => state.ProductReducer)

    const [Quintity, SetQuintity] = useState(1)


    const decQuintity = () => {
        if (Quintity > 1)
            SetQuintity(Quintity - 1)
    }

    useEffect(() => {
        dispatch({ type: 'PRODUCT', id })
    }, [id])
    return (
        <div className="SingleProduct">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="IMG">
                            <img src={`/images/${product.image}`} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="description">
                            <div className="name_price">
                                <h3>{product.name}</h3>
                                <b>$ {product.price}</b>
                            </div>
                            <div className="incre_Decre_btn">
                                <div className="inc_dec" >
                                    <span onClick={decQuintity}>-</span>
                                    <b>{Quintity}</b>
                                    <span onClick={() => SetQuintity(Quintity + 1)}>+</span>
                                    <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { product, Quintity } })}>Add To Cart</button>
                                </div>
                            </div>
                            <div className="details">
                                <h4>Details</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto ad vel mollitia minus modi, reprehenderit esse, rerum accusantium alias, magnam debitis laudantium quaerat adipisci corporis facilis minima vitae aliquid. Voluptatum?</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
