import React, { useContext, useState } from 'react';
import { OrgContext } from '../contexts/OrgContext';

const PersonDetails = ( org ) => {
    const { editPerson, removePerson } = useContext(OrgContext);

    const [name, setName] = useState(org.person.personName);
    const [contact, setContact] = useState(org.person.personContact);
    const [isForm, SetIsForm] = useState(org.person.isForm);
    
    const handleSubmit = (e) => {
        editPerson(org.org.name, org.org.contact, org.org.id, org.org.emp, name, contact, org.person.id);
    }
    return ( 
        isForm ? <li>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder={"name"} value={name} 
                    onChange={(e) => setName(e.target.value)} required/>
                <input type="text" placeholder={"contact"} value={contact} 
                    onChange={(e)=> setContact(e.target.value)} required/>
                <input type="submit" value="Done" />
                <button onClick={()=>removePerson(org.org.name, org.org.contact, org.org.id, org.org.emp, name, contact, org.person.id)}>Remove</button>
            </form>
        </li> : <li>
            <div>
                {name}  ,  {contact} 
                <button onClick={() => SetIsForm(!isForm)}>Edit</button>
                <button onClick={()=>removePerson(org.org.name, org.org.contact, org.org.id, org.org.emp, name, contact, org.person.id)}>Remove</button>
            </div>
        </li>
     );
}
 
export default PersonDetails;