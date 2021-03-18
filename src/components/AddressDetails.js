import React, { useContext } from 'react';
import { AddressContext } from '../contexts/AddressContext';

const AddressDetails = ( address ) => {
    console.log(address.address);
    const { removeAddress } = useContext(AddressContext);
    return ( 
        <li>
            <div className="title">
                { address.address.title }
                <button onClick={() => removeAddress(address.address.id)}>Remove</button>
            </div>
        </li>
     );
}
 
export default AddressDetails;