import React, { useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Friends = () => {
    useEffect(() => {
        axios.get('http://localhost:5000/api/friends')
        .then(res => console.log(res.data))
        .catch(error => console.error(error))
    }, [])
        return (
            <div className="Friends">
                <h1>Friends Characters</h1>
                <Link to='/login'>Home</Link>
            </div>
        );
}

export default Friends;