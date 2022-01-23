import { useState } from "react";
import axios from "axios";

const UserRegister = ()=> {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [msg, setMsg] = useState("");
    const userRegister = (e)=> {
        e.preventDefault(); // Stops the page form being refresh
        const userData= {username, password, phone, address}; // stores in json format
        axios.post("http://localhost:80/user/insert", userData).then((result)=> {
            setMsg(result.data.message);
        });
    }
    return(
        <div>
        <div className="text-center h1">Fill Up The Forms</div>
        <form>
            <div className="text-center h3">{msg}</div>
            <div className="form-group">
                <label for="username">Username</label>
                <input type="text" className="form-control" id="username"  placeholder="Enter a username" onChange={(e)=>setUsername(e.target.value)}/>
            </div>  
            <div className="form-group">
                <label for="password">Password</label>
                <input type="text" className="form-control" id="password"  placeholder="Enter a password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>         
            <div className="form-group">
                <label for="phone">Phone</label>
                <input type="number" className="form-control" id="phone" placeholder="Enter your phone" onChange={(e)=>setPhone(e.target.value)}/>
            </div>                              
            <div className="form-group">
                <label for="address">Address</label>
                <input type="text" className="form-control" id="address"  placeholder="Enter your address" onChange={(e)=>setAddress(e.target.value)}/>
            </div>
            <button type="btn" className="btn btn-primary mt-2 text-center" onClick={userRegister}>Submit</button>
        </form>
        </div>
    )
}

export default UserRegister;