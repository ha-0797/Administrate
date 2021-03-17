import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';

class AddressBook extends Component {
    static contextType = ThemeContext;
    render() { 
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark
        return ( 
            <div className="address-book" style={{background:theme.syntax, background:theme.bg}}>
                <ul>
                    <li style={{ background: theme.ui}}>Hamza</li>
                    <li style={{ background: theme.ui}}>Omara</li>
                    <li style={{ background: theme.ui}}>Zainab</li>
                </ul>
            </div>
         );
    }
}
 
export default AddressBook;