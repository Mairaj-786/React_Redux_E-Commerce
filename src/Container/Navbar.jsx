import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container mx-auto">
                    <div className="row">
                        <div className="col-lg-6 col-md-3 col-12" >
                            <a className="navbar-brand" href="#">DIVISIMA</a>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="center__input d-flex">
                                <input type="text" className="form-control" placeholder="" name="" id="" />
                                <i className="fa fa-search"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
