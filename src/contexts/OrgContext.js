import React, { createContext, useEffect, useState } from 'react';
import uuid from 'react-uuid';

export const OrgContext = createContext();

const OrgContextProvider = (props) => {
    const [orgs, setOrgs] = useState(() => {
        const localData = localStorage.getItem("orgs");
        return localData ? JSON.parse(localData) : [];
    });

    const addOrg = (name, contact) => {
        setOrgs([{name, contact, id:uuid(), isForm:false, emp:[]}, ...orgs])
    };
    const removeOrg = (id) => {
        setOrgs(orgs.filter(org => org.id !== id))
    };
    const editOrg = (name, contact, id, emp) => {
        const temp = orgs.filter(org => org.id!== id);
        setOrgs([{name, contact, id, isForm:false, emp}, ...temp])
    };
    const addPerson = (name, contact, id, emp, personName, personContact) => {
        const temp = orgs.filter(org => org.id!== id);
        const _emp = [{personName, personContact, id:uuid(), isForm:false}, ...emp]
        setOrgs([{name, contact, id:uuid(), isForm:false, emp:_emp}, ...temp])
    };
    const editPerson = (name, contact, id, emp, personName, personContact, personId) => {
        const temp = orgs.filter(org => org.id!== id);
        const t_emp = emp.filter(person => person.id!== personId);
        const _emp = [{personName, personContact, id:personId, isForm:false}, ...t_emp]
        setOrgs([{name, contact, id:uuid(), isForm:false, emp:_emp}, ...temp])
    };
    const removePerson = (name, contact, id, emp, personName, personContact, personId) => {
        const temp = orgs.filter(org => org.id!== id);
        const t_emp = emp.filter(person => person.id!== personId);
        setOrgs([{name, contact, id:uuid(), isForm:false, emp:t_emp}, ...temp])
    };
    useEffect(() =>{
        localStorage.setItem('orgs', JSON.stringify(orgs))
    }, [orgs]);
    return ( 
        <OrgContext.Provider value={{orgs, addOrg, removeOrg, editOrg, addPerson, editPerson, removePerson}}>
            {props.children}
        </OrgContext.Provider>
     );
}
 
export default OrgContextProvider;