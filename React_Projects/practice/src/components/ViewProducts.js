import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";

const ViewProduct = ()=> {
    const [pData, setPData] = useState([]);
    const [msg, setMsg] = useState("");

    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }

    useEffect(()=> {
        axios.get("http://localhost:80/product/get", config).then((result)=> {
            setPData(result.data);
        }).catch(e=> {
            console.log(e);
        });
    }, [pData]);

    const deleteProduct = (pId)=> {
        const pro_data = {pId} // Converts in Json Format pro_data = {pId: 'value of pId'}
        axios.delete("http://localhost:80/product/delete/"+pId, config).then(result=> {
            setMsg(result.data.message);
            console.log(result);
        });
    }

    return (
        <div className="container">
        <div className="text-center h3">{msg}</div>
        <div className="row">
            {pData.map(singleData=> {
                return (
                    // Key is added to uniquely identify each rendered item by react
                    <div key={singleData._id} className="col-md-4">
                        <h2>Product Name: {singleData.pName}</h2>
                        <p>Product Price: {singleData.pPrice}</p>
                        <p>Product Color: {singleData.pColor}</p>
                        <button className="btn btn-primary" onClick={()=>{deleteProduct(singleData._id)}}>{singleData._id}</button>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default ViewProduct;