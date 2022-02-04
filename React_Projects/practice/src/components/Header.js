import { Component } from "react/cjs/react.production.min";
import { Link } from 'react-router-dom'; 

class Header extends Component {
    render () {
        const logout=()=> {
            localStorage.clear();
            window.location.replace("/User/Login");
        }

        var menu;
        if(localStorage.getItem("token")) {
            menu = (
                <ul className="navbar-nav">                    
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/About">About us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Contact">Contact Us</Link>
                    </li> 
                    <li className="nav-item">
                            <Link className="nav-link" to="/Product/12345">Product</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/View/Product">View Product</Link>
                    </li>                    
                    <li className="nav-item">
                        <bottom className="nav-link" onClick={logout}>Log Out</bottom>
                    </li>
                </ul>
            );
        }
        else {
            menu = (
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/About">About us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Contact">Contact Us</Link>
                    </li> 
                     <li className="nav-item">
                        <Link className="nav-link" to="/User/Register">User Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className=" btn nav-link" to="/User/Login">Login</Link>
                    </li>
                </ul>
            );
        }

        return (
           <div>
            <div>From the props of App.js:- {this.props.username}, {this.props.add}</div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">React Practice</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    {menu}
                </div>
            </nav>
           </div>
        )
    }
}

export default Header;