import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <div>
            <Link to='/login'>Login</Link>
            </div>
            
        </div>
    );
};

export default Header;