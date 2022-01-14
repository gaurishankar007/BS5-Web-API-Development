import { Component } from "react/cjs/react.production.min";
import Home from "./Home";
import About from './About';
import {Route, Routes} from 'react-router-dom';
import Contact from "./Contact";
import Product from "./Product";

class Mid extends Component {
    render() {
        return(
            <div>
                <Routes>
                    <Route path="/" element={<Home></Home>} />
                    <Route path="/About" element={<About></About>}/>
                    <Route path="/Contact" element={<Contact></Contact>}/>
                    <Route path="/Product/:id" element={<Product></Product>}/>
                </Routes>
            </div>
        )
    }
}

export default Mid;