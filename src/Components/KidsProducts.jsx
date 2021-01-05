import React from 'react'
import { useSelector } from 'react-redux'



const KidsProducts = () => {

    const { kids } = useSelector(state => state.ProductReducer)
    return (
        <div>
            <div className="main_cards">
                <div className="container">
                    <div className="row">
                        {kids.map(kid => (
                            <div className="col-lg-3 col-md-4 col-9 mx-auto ">
                                <div className="Card_IMG">
                                    <img className='shadow border' src={`/kidsIMG/${kid.image}`} alt="" />
                                </div>
                                <div className="price">
                                    <p>Kids</p>
                                    <b className="ml-auto">$20</b>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KidsProducts
