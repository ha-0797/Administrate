import React, { useContext, useState } from 'react';
import { AddressContext } from '../contexts/AddressContext';

const NavBar = () => {
    const { addresses } = useContext(AddressContext);
    return ( 
        <div className="address-book">
            <h1>Administrate Address Book</h1>
            <p>You currently have {addresses.length} addresses</p>
        </div>
     );
}
 
export default NavBar;