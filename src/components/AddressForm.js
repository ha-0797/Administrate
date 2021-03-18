import React, { useContext, useState } from 'react';
import { AddressContext } from '../contexts/AddressContext';

const AddressForm = () => {
    const { addAddress } = useContext(AddressContext);
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addAddress(title);
        setTitle('');
    };
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="title" value={title} 
            onChange={(e) => setTitle(e.target.value)} required/>
            <input type="submit" value="add address" />
        </form>
     );
}
 
export default AddressForm;