import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'

const Cart = () => {
    const { products, totalQuintites, totalPrice, DiscountPrice } = useSelector(state => state.CartReducers)
    const dispatch = useDispatch()

    const { product } = useSelector(state => state.ProductReducer)

    return (
        <div className='Cart pb-5'>
            <div className="container">
                <h5 className="text-uppercase">{`${products.length ? `your Cart` : 'Your Cart is empty'}`}</h5>
                <div className="row">
                    <div className="col-lg-8 leftSide">
                        <div className="cart__heading">
                            <div className="row pt-1">
                                <div className="col-lg-2">picture</div>
                                <div className="col-lg-2">Name</div>
                                <div className="col-lg-2">Price</div>
                                <div className="col-lg-2">Inc/Dec</div>
                                <div className="col-lg-2">Total Price</div>
                                <div className="col-lg-2">Remove</div>
                            </div>
                        </div>
                        {products.map(p => (
                            <div className="row verticleAlign" key={p.id}>
                                <div className="col-lg-2 img">
                                    <img src={`/images/${p.image}`} alt="" />
                                </div>
                                <div className="col-lg-2 ">
                                    {p.name}
                                </div>
                                <div className="col-lg-2">
                                    ${p.price}
                                </div>
                                <div className="col-lg-2">
                                    <div className="inc_dec" >
                                        <span onClick={() => dispatch({ type: 'DEC', payload: product.id })} >-</span>
                                        <b>{p.Quintity}</b>
                                        <span onClick={() => dispatch({ type: 'INC', payload: product.id })}>+</span>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <b>${p.DiscountPrice * p.Quintity}</b>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="col-lg-4">
                        <div className="summary">
                            <b>Summary</b>
                            <div className="summary-item_price ">
                                <p>Total Items : <span> {totalQuintites}</span></p>
                                <p>Total Price : <span>{DiscountPrice}</span></p>
                                <button className="btn">CheckOut</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cart
