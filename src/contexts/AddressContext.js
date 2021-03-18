import React, { createContext, useState } from 'react';
import uuid from 'react-uuid';

export const AddressContext = createContext();

const AddressContextProvider = (props) => {
    const [addresses, setAddresses] = useState([
        {title: "Hamza", id:1},
        {title: "Omara", id:2},
        {title: "Zainab", id:3}
    ]);
    const addAddress = (title) => {
        setAddresses([...addresses, {title, id:uuid()}])
    };
    const removeAddress = (id) => {
        setAddresses(addresses.filter(address => address.id !== id))
    };
    return ( 
        <AddressContext.Provider value={{addresses, addAddress, removeAddress}}>
            {props.children}
        </AddressContext.Provider>
     );
}
 
export default AddressContextProvider;