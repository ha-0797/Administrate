import React, { useContext } from 'react';
import { OrgContext } from '../contexts/OrgContext';
import OrgDetails from './OrgDetails';

const OrgBook = () => {
    const { orgs } = useContext(OrgContext);
    return orgs.length ? ( 
        <div className="Org-book">
            <ul>
                {orgs.map( (org) =>{
                    return(<OrgDetails org={org} key={org.id}/>)
                })}
            </ul>
        </div>
     ) : (
        <div className="empty">No orgs</div>
     );
}

export default OrgBook;