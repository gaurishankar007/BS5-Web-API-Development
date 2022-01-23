import { useParams } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";

// functional Component
const Product = ()=> {
    const {id} = useParams();
    const [pName, setName] = useState("");
    const [pPrice, setPrice] = useState("");
    const [pColor, setColor] = useState("");
    const [msg, setMsg] = useState("");
    const addProduct = (e)=> {
        e.preventDefault();
        const productData = {pName, pPrice, pColor};
        axios.post("http://localhost:80/product/insert", productData).then((result)=> {
            setMsg(result.data.message);
        });
    }

    return (
        <div>            
            <div> This is product section. ID: {id}</div>
            <div className="text-center h1">Fill Up The Product Details</div>
            <form>
                <div className="text-center h3">{msg}</div>
                <div className="form-group">
                    <label for="name">Product Name</label>
                    <input type="text" className="form-control" id="name"  placeholder="Enter product's name" onChange={(e)=>setName(e.target.value)}/>
                </div>                
                <div className="form-group">
                    <label for="price">Product Price</label>
                    <input type="text" className="form-control" id="price" placeholder="Enter product's price" onChange={(e)=>setPrice(e.target.value)}/>
                </div>                
                <div className="form-group">
                    <label for="price">Product Color</label>
                    <input type="text" className="form-control" id="price" placeholder="Enter product's color" onChange={(e)=>setColor(e.target.value)}/>
                </div>  
                <button type="btn" className="btn btn-primary mt-2 text-center" onClick={addProduct}>Submit</button>
            </form>
        </div>
    )
    
}

export default Product;