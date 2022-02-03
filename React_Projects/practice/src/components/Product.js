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
    const [pImage, setPImage] = useState("");
    
    const addProduct = (e)=> {
        e.preventDefault();
        const productData = new FormData();
        productData.append("pName", pName);
        productData.append("pPrice", pPrice);
        productData.append("pColor", pColor);
        productData.append("product_image", pImage);

        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }
        axios.post("http://localhost:80/product/insert", productData, config).then((result)=> {
            setMsg(result.data.message);
            console.log(result);
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
                <div className="form-group">
                    <label for="price">Product Image</label>
                    <input type="file" className="form-control" id="price" placeholder="Enter product's color" onChange={(e)=>setPImage(e.target.files[0])}/>
                </div>  
                <button type="btn" className="btn btn-primary mt-2 text-center" onClick={addProduct}>Submit</button>
            </form>
        </div>
    )
    
}

export default Product;