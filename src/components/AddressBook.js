import React, { useContext, useState } from 'react';
import { AddressContext } from '../contexts/AddressContext';
import AddressDetails from './AddressDetails';

const AddressBook = () => {
    const { addresses } = useContext(AddressContext);
    return addresses.length ? ( 
        <div className="address-book">
            <ul>
                {addresses.map( (address) =>{
                    return(<AddressDetails address={address} key={address.id}/>)
                })}
            </ul>
        </div>
     ) : (
        <div className="empty">No Contacts</div>
     );
}
 
export default AddressBook;