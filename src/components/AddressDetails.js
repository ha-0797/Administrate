import React, { useContext, useState } from 'react';
import { AddressContext } from '../contexts/AddressContext';

const AddressDetails = ( address ) => {
    const { removeAddress, editAddress } = useContext(AddressContext);
    const [name, setName] = useState(address.address.name);
    const [contact, setContact] = useState(address.address.contact);
    const id = address.address.id;
    const handleSubmit = (e) => {
        editAddress(name, contact, address.address.id);
    };
    return ( 
        <li>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder={address.address.name} value={name} 
                    onChange={(e) => setName(e.target.value)} required/>
                <input type="text" placeholder={address.address.contact} value={contact} 
                    onChange={(e)=> setContact(e.target.value)} required/>
                <input type="submit" value="Edit" />
                <button onClick={() => removeAddress(id)}>Remove</button>
            </form>
        </li>
     );
}
 
export default AddressDetails;