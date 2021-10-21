import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Navigation = () => {

    return (

        <div>
            {/* Navbar */}
            <Navbar blue color="dark">




                <div className="container">
                    <NavbarBrand href="/">Hotel Booking</NavbarBrand>
                </div>

                <NavbarBrand href="/">Sign</NavbarBrand>
                <br />
                <NavbarBrand href="/">Register</NavbarBrand>




            </Navbar>



        </div >
    )
}

export default Navigation;
