import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";

const UpdateProduct = ()=> {
    const {ProductId} = useParams();
    const [myProduct, setMyProduct] = useState([]);
    const [pName, setName] = useState("");
    const [pPrice, setPrice] = useState("");
    const [pColor, setColor] = useState("");
    const [msg, setMsg] = useState("");

    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }

    useEffect(()=> {
        axios.get("http://localhost:80/product/update/"+ProductId, config).then((result)=> {
            setMyProduct(result.data);
            setName(result.data.pName);
            setPrice(result.data.pPrice);
            setColor(result.data.pColor);
        }).catch();
    }, []);

    const updateProduct = (e)=> {
        e.preventDefault();
        const productData = {pid: ProductId, name: pName, price: pPrice, color: pColor};
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }
        axios.put("http://localhost:80/product/update", productData, config).then((result)=> {
            setMsg(result.data.message);
            console.log(result);
        });
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2>Product Details</h2>
                    <p>Name: {myProduct.pName}</p>
                    <p>Price: {myProduct.pPrice}</p>
                    <p>Color: {myProduct.pColor}</p>
                </div>
                <div className="col-md-4">
                    <h2>Update Product</h2>
                    <form>                        
                        <div className="text-center h3">{msg}</div>
                        <div className="form-group">
                            <label for="name">Product Name</label>
                            <input type="text" className="form-control" id="name"  placeholder="Enter product's name" value={pName} onChange={(e)=>setName(e.target.value)}/>
                        </div>                
                        <div className="form-group">
                            <label for="price">Product Price</label>
                            <input type="text" className="form-control" id="price" placeholder="Enter product's price" value={pPrice} onChange={(e)=>setPrice(e.target.value)}/>
                        </div>                
                        <div className="form-group">
                            <label for="price">Product Color</label>
                            <input type="text" className="form-control" id="price" placeholder="Enter product's color" value={pColor} onChange={(e)=>setColor(e.target.value)}/>
                        </div>  
                        <button type="submit" className="btn btn-primary mt-2 text-center" onClick={updateProduct}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateProduct;