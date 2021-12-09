import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";

const ChatPage = () => {
    const [users, setUsers] = useState([]);
    const fetchChats = async() => {
        const data = await axios.get('/api/data')
        setUsers(data);
    }

    useEffect(() => {
        fetchChats();
    }, []);

    return (
        <div>
            {users.map()}
        </div>
    );
}

export default ChatPage