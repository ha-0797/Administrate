import React, { createContext, useEffect, useState } from 'react';
import uuid from 'react-uuid';

export const AddressContext = createContext();

const AddressContextProvider = (props) => {
    const [addresses, setAddresses] = useState(() => {
        const localData = localStorage.getItem("addresses");
        return localData ? JSON.parse(localData) : [];
    });

    const addAddress = (name, contact) => {
        setAddresses([{name, contact, id:uuid()}, ...addresses])
    };
    const removeAddress = (id) => {
        setAddresses(addresses.filter(address => address.id !== id))
    };
    const editAddress = (name, contact, id) => {
        const temp = addresses.filter(address => address.id!== id);
        setAddresses([{name, contact, id:uuid()}, ...temp])
    };
    useEffect(() =>{
        localStorage.setItem('addresses', JSON.stringify(addresses))
    }, [addresses]);
    return ( 
        <AddressContext.Provider value={{addresses, addAddress, removeAddress, editAddress}}>
            {props.children}
        </AddressContext.Provider>
     );
}
 
export default AddressContextProvider;