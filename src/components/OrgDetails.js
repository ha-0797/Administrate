import React, { useContext, useState } from 'react';
import { OrgContext } from '../contexts/OrgContext';
import PersonDetails from './PersonDetails';

const OrgDetails = ( org ) => {
    const { removeOrg, editOrg, addPerson } = useContext(OrgContext);

    const [name, setName] = useState(org.org.name);
    const [contact, setContact] = useState(org.org.contact);
    const [isForm, SetIsForm] = useState(org.org.isForm);
    const [emp, setEmp] = useState(org.org.emp);

    const [personName, setPersonName] = useState('');
    const [personContact, setPersonContact] = useState('');

    const id = org.org.id;
    const handleSubmit = (e) => {
        editOrg(name, contact, id, emp);
    };
    const personSubmit = (e) => {
        addPerson(name, contact, id, emp, personName, personContact);
    }
    
    return ( 
        isForm ? <li>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder={"name"} value={name} 
                    onChange={(e) => setName(e.target.value)} required/>
                <input type="text" placeholder={"contact"} value={contact} 
                    onChange={(e)=> setContact(e.target.value)} required/>
                <input type="submit" value="Done" />
                <button onClick={() => removeOrg(id)}>Remove</button>
            </form>
        </li> : <li>
            <div>
                {name}  ,  {contact} 
                <button onClick={() => SetIsForm(!isForm)}>Edit</button>
                <button onClick={() => removeOrg(id)}>Remove</button>
            </div>
            <ul>
                <li>
                    <form onSubmit={personSubmit}>
                        <input type="text" placeholder={"Employee name"} value={personName} 
                            onChange={(e) => setPersonName(e.target.value)} required/>
                        <input type="text" placeholder={"Employee contact"} value={personContact} 
                            onChange={(e)=> setPersonContact(e.target.value)} required/>
                        <input type="submit" value="Add" />
                    </form>
                </li>
                {emp.map( (person) =>{
                    return(<PersonDetails org={org} person={person} key={person.id}/>)
                })}
            </ul>
        </li>
    );
}
 
export default OrgDetails;