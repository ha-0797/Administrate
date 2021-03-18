import React, { useContext, useState } from 'react';
import { AddressContext } from '../contexts/AddressContext';

const AddressForm = () => {
    const { addAddress } = useContext(AddressContext);
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addAddress(name, contact);
        setName('');
        setContact('');
    };
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" value={name} 
            onChange={(e) => setName(e.target.value)} required/>
        <input type="text" placeholder="Contact Details" value={contact} 
            onChange={(e) => setContact(e.target.value)} required/>
            <input type="submit" value="Add contact" />
        </form>
     );
}
 
export default AddressForm;