import React, { useContext } from 'react';
import { OrgContext } from '../contexts/OrgContext';

const NavBar = () => {
    const { orgs } = useContext(OrgContext);
    return ( 
        <div className="Org-book">
            <h1>Administrate Org Book</h1>
            <p>You currently have {orgs.length} orgs</p>
        </div>
     );
}
 
export default NavBar;