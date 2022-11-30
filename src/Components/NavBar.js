import React from 'react';
import { Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import './style.css';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    // Style Method - 2
    // StyleActive = ({isActive}) => {
    //     return{
    //         backgroundColor: (isActive) ? 'red' : 'none',
    //         textDecoration: (isActive) ? 'normal' : 'none'
    //     }
    // }
    // Style Method - 2

    render() { 
        return (
            <nav>
                <Link style={this.StyleActive} to='/'>Home</Link>
                <Link style={this.StyleActive} to='about'>About</Link>
                <Link to='products'>Products</Link>
            </nav>
        );
    }
}
 
export default NavBar;