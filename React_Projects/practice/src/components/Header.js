import { Component } from "react/cjs/react.production.min";
import { Link } from 'react-router-dom'; 

class Header extends Component {
    render () {
        return (
           <div>
            <div>From the props of App.js:- {this.props.username}, {this.props.add}</div>
            <div>
                <Link to='/'>Home</Link>
                <div></div>
                <Link to='/About'>About Us</Link>
                <div></div>
                <Link to='/Contact'>Contact Us</Link>
                <div></div>
                <Link to='/Product/12345'>Product</Link>
            </div>
           </div>
        )
    }
}

export default Header;